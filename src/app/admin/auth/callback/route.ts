import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "godfirst.groupltd@gmail.com";

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const origin = requestUrl.origin;

  if (code) {
    const cookieStore = cookies();
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder-project.supabase.co";
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key";

    const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...options });
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.set({ name, value: "", ...options });
        },
      },
    });

    const {
      data: { session },
      error,
    } = await supabase.auth.exchangeCodeForSession(code);

    if (error || !session?.user) {
      return NextResponse.redirect(`${origin}/admin/login?error=auth_failed`);
    }

    const email = (session.user.email || "").toLowerCase().trim();
    const authorizedEmail = ADMIN_EMAIL.toLowerCase().trim();

    // STRICT SINGLE-ADMIN ACCESS CHECK
    if (email !== authorizedEmail) {
      await supabase.auth.signOut();
      return NextResponse.redirect(`${origin}/admin/login?error=unauthorized_email`);
    }

    return NextResponse.redirect(`${origin}/admin`);
  }

  return NextResponse.redirect(`${origin}/admin/login`);
}

