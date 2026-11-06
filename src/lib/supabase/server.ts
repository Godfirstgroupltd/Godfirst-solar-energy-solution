import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

function cleanSupabaseUrl(url?: string): string {
  if (!url) return "https://placeholder-project.supabase.co";
  return url.replace(/\/rest\/v1\/?$/, "").replace(/\/$/, "");
}

export function createClient() {
  const cookieStore = cookies();
  const supabaseUrl = cleanSupabaseUrl(process.env.NEXT_PUBLIC_SUPABASE_URL);
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key";

  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value;
      },
      set(name: string, value: string, options: CookieOptions) {
        try {
          cookieStore.set({ name, value, ...options });
        } catch (error) {
          // Handled in middleware
        }
      },
      remove(name: string, options: CookieOptions) {
        try {
          cookieStore.set({ name, value: "", ...options });
        } catch (error) {
          // Handled in middleware
        }
      },
    },
  });
}

// Service role client for server-side admin tasks (bypasses RLS safely on server)
export function createAdminClient() {
  const supabaseUrl = cleanSupabaseUrl(process.env.NEXT_PUBLIC_SUPABASE_URL);
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key";

  return createServerClient(supabaseUrl, serviceRoleKey, {
    cookies: {
      get() {
        return "";
      },
      set() {},
      remove() {},
    },
  });
}
