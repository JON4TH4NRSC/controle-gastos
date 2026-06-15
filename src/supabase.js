const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://hdhkbuvbzvpoonwjsrnv.supabase.co';
const supabaseKey = 'sb_publishable_dfgEoC-bZl5MSGX7-7WLWw_56QKAUNX';

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;