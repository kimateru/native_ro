import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://mvrkfwymdwmxxtwcldhb.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12cmtmd3ltZHdteHh0d2NsZGhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYzMDkwNTksImV4cCI6MjA3MTg4NTA1OX0.QsZ8XPZ-6rE5ipCqH7dQL_huc3cSd1HPva5uX1J2soA";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);