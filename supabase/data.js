/* OneTime Deals — Supabase data layer
 * Load after supabase-js, config.js, and before the app script.
 * This module is intentionally small so the UI can replace localStorage calls incrementally.
 */
(function () {
  const cfg = window.ONETIME_SUPABASE_CONFIG || {};
  if (!window.supabase || !cfg.url || !cfg.anonKey) {
    window.oneTimeData = null;
    return;
  }

  const client = window.supabase.createClient(cfg.url, cfg.anonKey);

  const mapListing = (row, bids = []) => ({
    id: row.id,
    title: row.title,
    category: row.category,
    condition: row.condition,
    description: row.description || '',
    type: row.listing_type,
    price: row.price == null ? undefined : Number(row.price),
    startBid: row.start_bid == null ? undefined : Number(row.start_bid),
    endsAt: row.ends_at,
    status: row.status,
    photos: row.photos || [],
    createdAt: row.created_at,
    bids: bids.filter(b => b.listing_id === row.id).map(b => ({
      id: b.id,
      amount: Number(b.amount),
      bidder: b.profiles?.display_name || 'User',
      bidderId: b.bidder_id,
      at: b.created_at
    }))
  });

  async function currentUser() {
    const { data, error } = await client.auth.getUser();
    if (error) throw error;
    return data.user;
  }

  async function profile() {
    const user = await currentUser();
    if (!user) return null;
    const { data, error } = await client.from('profiles').select('*').eq('id', user.id).single();
    if (error) throw error;
    return data;
  }

  async function listings() {
    const { data: rows, error } = await client.from('listings').select('*').order('created_at', { ascending: false });
    if (error) throw error;
    const { data: bids, error: bidError } = await client
      .from('bids')
      .select('id,listing_id,bidder_id,amount,created_at,profiles(display_name)')
      .order('amount', { ascending: false });
    if (bidError) throw bidError;
    return (rows || []).map(row => mapListing(row, bids || []));
  }

  async function createListing(input) {
    const user = await currentUser();
    if (!user) throw new Error('Please sign in first.');
    const payload = {
      owner_id: user.id,
      title: input.title,
      category: input.category,
      condition: input.condition,
      description: input.description || '',
      listing_type: input.type || 'fixed',
      price: input.type === 'fixed' ? Number(input.price) : null,
      start_bid: input.type === 'auction' ? Number(input.startBid) : null,
      ends_at: input.type === 'auction' ? input.endsAt : null,
      status: input.status || 'available',
      photos: input.photos || []
    };
    const { data, error } = await client.from('listings').insert(payload).select().single();
    if (error) throw error;
    return data;
  }

  async function updateListing(id, input) {
    const payload = {
      title: input.title,
      category: input.category,
      condition: input.condition,
      description: input.description || '',
      listing_type: input.type,
      price: input.type === 'fixed' ? Number(input.price) : null,
      start_bid: input.type === 'auction' ? Number(input.startBid) : null,
      ends_at: input.type === 'auction' ? input.endsAt : null,
      status: input.status,
      photos: input.photos || []
    };
    const { data, error } = await client.from('listings').update(payload).eq('id', id).select().single();
    if (error) throw error;
    return data;
  }

  async function deleteListing(id) {
    const { error } = await client.from('listings').delete().eq('id', id);
    if (error) throw error;
  }

  async function placeBid(listingId, amount) {
    const user = await currentUser();
    if (!user) throw new Error('Please sign in to bid.');
    const { data, error } = await client.from('bids').insert({
      listing_id: listingId,
      bidder_id: user.id,
      amount: Number(amount)
    }).select().single();
    if (error) throw error;
    return data;
  }

  async function toggleFavourite(listingId, saved) {
    const user = await currentUser();
    if (!user) throw new Error('Please sign in to save items.');
    if (saved) {
      const { error } = await client.from('favourites').delete().eq('user_id', user.id).eq('listing_id', listingId);
      if (error) throw error;
    } else {
      const { error } = await client.from('favourites').insert({ user_id: user.id, listing_id: listingId });
      if (error) throw error;
    }
  }

  async function sendMessage(listingId, body) {
    const user = await currentUser();
    if (!user) throw new Error('Please sign in to message the shop.');
    const { data, error } = await client.from('messages').insert({ listing_id: listingId, sender_id: user.id, body }).select().single();
    if (error) throw error;
    return data;
  }

  window.oneTimeData = {
    client, currentUser, profile, listings, createListing, updateListing,
    deleteListing, placeBid, toggleFavourite, sendMessage
  };
})();
