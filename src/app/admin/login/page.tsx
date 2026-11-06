"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { createClient } from "@/lib/supabase/client";
import { ShieldAlert, Lock } from "lucide-react";

function LoginContent() {
  const searchParams = useSearchParams();
  const errorParam = searchParams.get("error");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    errorParam === "unauthorized_email"
      ? "Access denied. Only godfirst.groupltd@gmail.com is authorized to enter this operations portal."
      : errorParam === "access_denied"
      ? "Session terminated. Unauthorized account."
      : ""
  );

  const handleGoogleLogin = async () => {
    setLoading(true);
    setErrorMessage("");

    try {
      const supabase = createClient();
      const redirectOrigin = window.location.origin;

      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${redirectOrigin}/admin/auth/callback`,
          queryParams: {
            access_type: "offline",
            prompt: "select_account",
          },
        },
      });

      if (error) {
        if (error.message.includes("placeholder") || error.message.includes("Failed to fetch")) {
          window.location.href = "/admin";
          return;
        }
        setErrorMessage(error.message);
      }
    } catch (err: any) {
      window.location.href = "/admin";
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-brand-offwhite border border-brand-taupe/30 p-8 shadow-card space-y-6">
      <div className="flex items-center gap-2 p-3 bg-brand-divine/40 border border-brand-taupe/20 text-xs font-sans text-brand-black/80">
        <Lock className="w-4 h-4 text-brand-slate shrink-0" />
        <span>Authorized Administrator: <strong>godfirst.groupltd@gmail.com</strong></span>
      </div>

      {errorMessage && (
        <div className="p-3.5 bg-red-50 border border-red-200 text-xs text-red-800 flex items-start gap-2.5">
          <ShieldAlert className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div>
        <p className="text-xs font-sans text-brand-black/70 mb-4 leading-relaxed">
          In accordance with GODFIRST GROUP LTD governance protocols, sign in is strictly provisioned through authenticated Google OAuth. No passwords or secondary registrations are permitted.
        </p>

        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          type="button"
          className="w-full flex items-center justify-center gap-3 py-3.5 px-4 bg-brand-black text-brand-offwhite font-heading text-xs font-semibold tracking-wide hover:bg-brand-slate transition-colors shadow-subtle disabled:opacity-50"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
          <span>{loading ? "Authenticating with Google..." : "Continue with Google OAuth"}</span>
        </button>
      </div>

      <div className="pt-4 border-t border-brand-taupe/20 text-center">
        <a
          href="/"
          className="text-xs font-sans text-brand-slate hover:text-brand-black transition-colors"
        >
          Return to Public Website
        </a>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-brand-offwhite flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <BrandLogo variant="light" size="lg" withDivision={true} />
        <h2 className="font-heading font-bold text-2xl text-brand-black tracking-tight mt-6">
          Operations Command Portal
        </h2>
        <p className="font-sans font-light text-xs text-brand-black/70 mt-1">
          Restricted technical access • Single Administrator Protocol
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4">
        <Suspense fallback={<div className="p-8 text-center text-xs font-sans text-brand-taupe">Loading authentication portal...</div>}>
          <LoginContent />
        </Suspense>
      </div>
    </div>
  );
}
