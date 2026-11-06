import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  let response = NextResponse.next();

  // Set X-Robots-Tag: noindex, nofollow for all /admin routes
  if (pathname.startsWith("/admin") || pathname.startsWith("/api/admin")) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  // Allow public access to login page and OAuth callback
  if (
    pathname === "/admin/login" ||
    pathname.startsWith("/admin/auth") ||
    pathname.startsWith("/api/auth")
  ) {
    return response;
  }

  // Protect /admin routes
  if (pathname.startsWith("/admin") || pathname.startsWith("/api/admin")) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

    // In local dev without Supabase live keys, allow access to preview operations portal
    if (!supabaseUrl || supabaseUrl.includes("placeholder")) {
      return response;
    }

    // Inspect auth cookies
    const allCookies = request.cookies.getAll();
    const authCookie = allCookies.find(
      (c) => c.name.includes("auth-token") || c.name.includes("sb-access-token")
    );

    if (!authCookie) {
      if (pathname.startsWith("/api/admin")) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = "/admin/login";
      return NextResponse.redirect(redirectUrl);
    }
  }

  return response;
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
