-- Onetime Deals Supabase database schema
-- Run this entire file in Supabase Dashboard > SQL Editor > New query.

create extension if not exists pgcrypto;

do $$ begin
  create type public.listing_type as enum ('fixed', 'auction');
exception when duplicate_object then null;
end $$;

do $$ begin
  create type public.listing_status as enum ('available', 'sold', 'unavailable');
exception when duplicate_object then null;
end $$;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null default 'User',
  is_admin boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.listings (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references public.profiles(id),
  title text not null,
  category text not null,
  condition text not null,
  description text not null default '',
  listing_type public.listing_type not null default 'fixed',
  price numeric(12,2),
  start_bid numeric(12,2),
  ends_at timestamptz,
  status public.listing_status not null default 'available',
  photos text[] not null default '{}',
  created_at timestamptz not null default now(),
  constraint valid_listing_price check (
    (listing_type = 'fixed' and price is not null)
    or (listing_type = 'auction' and start_bid is not null)
  )
);

create table if not exists public.bids (
  id uuid primary key default gen_random_uuid(),
  listing_id uuid not null references public.listings(id) on delete cascade,
  bidder_id uuid not null references public.profiles(id),
  amount numeric(12,2) not null check (amount > 0),
  created_at timestamptz not null default now()
);

create table if not exists public.favourites (
  user_id uuid not null references public.profiles(id) on delete cascade,
  listing_id uuid not null references public.listings(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (user_id, listing_id)
);

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  listing_id uuid not null references public.listings(id) on delete cascade,
  sender_id uuid not null references public.profiles(id),
  body text not null check (length(trim(body)) > 0),
  created_at timestamptz not null default now(),
  read_at timestamptz
);

create or replace function public.is_admin()
returns boolean
language sql stable security definer set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and is_admin = true
  );
$$;

alter table public.profiles enable row level security;
alter table public.listings enable row level security;
alter table public.bids enable row level security;
alter table public.favourites enable row level security;
alter table public.messages enable row level security;

drop policy if exists "profiles are visible" on public.profiles;
create policy "profiles are visible" on public.profiles for select using (true);

drop policy if exists "users update own profile" on public.profiles;
create policy "users update own profile" on public.profiles for update using (id = auth.uid());

drop policy if exists "public can view listings" on public.listings;
create policy "public can view listings" on public.listings for select using (true);

drop policy if exists "admins manage listings" on public.listings;
create policy "admins manage listings" on public.listings for all using (public.is_admin()) with check (public.is_admin());

drop policy if exists "signed in users view bids" on public.bids;
create policy "signed in users view bids" on public.bids for select using (auth.uid() is not null);

drop policy if exists "signed in users place bids" on public.bids;
create policy "signed in users place bids" on public.bids for insert with check (auth.uid() = bidder_id);

drop policy if exists "users manage own favourites" on public.favourites;
create policy "users manage own favourites" on public.favourites for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "participants view messages" on public.messages;
create policy "participants view messages" on public.messages for select using (auth.uid() = sender_id or public.is_admin());

drop policy if exists "signed in users send messages" on public.messages;
create policy "signed in users send messages" on public.messages for insert with check (auth.uid() = sender_id);

create or replace function public.handle_new_user()
returns trigger
language plpgsql security definer set search_path = public
as $$
begin
  insert into public.profiles (id, display_name)
  values (new.id, coalesce(new.raw_user_meta_data->>'display_name', 'User'))
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();
