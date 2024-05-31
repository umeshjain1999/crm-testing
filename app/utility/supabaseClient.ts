// @ts-nocheck
import { createClient } from "@refinedev/supabase";
const SUPABASE_URL = typeof window === 'undefined' ? process.env.DATABASE_URL : window.ENV.DATABASE_URL;

const SUPABASE_KEY = typeof window === 'undefined' ? process.env.DATABASE_PUBLIC_KEY : window.ENV.DATABASE_PUBLIC_KEY;

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
  db: {
    schema: "public",
  },
  auth: {
    persistSession: true,
  },
});