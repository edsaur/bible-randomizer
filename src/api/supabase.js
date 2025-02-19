import { createClient } from "@supabase/supabase-js";

const supabaseURL = 'https://jmedciuukeyomjfrnxva.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptZWRjaXV1a2V5b21qZnJueHZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkxNjY4MTEsImV4cCI6MjA1NDc0MjgxMX0.zRQFZOA8_LFDncDkDDvF-fyRd5Sx-CP6NrnFNxrjKuo';
export const supabase = createClient(supabaseURL, supabaseKey, { auth: { autoRefreshToken: true, persistSession: true, detectSessionInUrl: true } });