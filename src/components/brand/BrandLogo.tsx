import Link from "next/link";
import Image from "next/image";

interface BrandLogoProps {
  variant?: "light" | "dark";
  withDivision?: boolean;
  iconOnly?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
  href?: string;
}

export function BrandLogo({
  variant = "dark", // 'dark' means logo is displayed on dark bg (so logo text/icon is off-white)
  withDivision = true,
  iconOnly = false,
  className = "",
  size = "md",
  href = "/",
}: BrandLogoProps) {
  const isDarkBg = variant === "dark";

  // Dimensions
  const iconDimensions = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14",
  }[size];

  const content = (
    <div className={`inline-flex items-center gap-3.5 group select-none ${className}`}>
      {/* Dolphin in broken G emblem */}
      <div className={`relative ${iconDimensions} shrink-0 transition-transform duration-300 group-hover:scale-105`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-full ${isDarkBg ? "text-brand-offwhite" : "text-brand-black"}`}
        >
          {/* Broken Circle G Arch */}
          <path
            d="M 50 6 A 44 44 0 1 0 94 50 L 94 42 A 8 8 0 0 0 86 34 L 54 34 A 6 6 0 0 0 48 40 L 48 46 A 4 4 0 0 0 52 50 L 74 50 A 24 24 0 1 1 50 26 A 24 24 0 0 1 73 32 L 82 23 A 38 38 0 0 0 50 14"
            fill="currentColor"
          />
          {/* Subtle Filigree Arch Detail */}
          <path
            d="M 50 16 A 34 34 0 1 0 84 50 A 34 34 0 0 0 78 35"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="2 3"
            opacity="0.35"
            fill="none"
          />
          {/* Leaping Dolphin inside G */}
          <path
            d="M 32 60 C 28 48 30 32 45 25 C 53 21 62 23 68 28 C 65 30 58 31 52 35 C 47 38 44 44 43 51 C 42 57 37 60 32 60 Z"
            fill="currentColor"
          />
          <path
            d="M 50 26 C 54 28 58 32 58 38 C 55 37 51 36 47 38 C 45 34 47 28 50 26 Z"
            fill="currentColor"
            opacity="0.85"
          />
          {/* Snout */}
          <path
            d="M 68 28 C 72 30 76 32 78 34 C 75 35 71 34 68 32 C 67 30 67 29 68 28 Z"
            fill="currentColor"
          />
          {/* Fin */}
          <path d="M 45 25 C 43 20 40 17 38 15 C 41 18 43 21 45 25 Z" fill="currentColor" />
          <path d="M 53 37 C 56 41 57 46 54 49 C 52 47 51 43 53 37 Z" fill="currentColor" />
          {/* Tail */}
          <path d="M 32 60 C 27 63 22 67 19 72 C 22 68 27 66 31 65 C 30 67 28 72 26 76 C 29 72 32 67 34 62 Z" fill="currentColor" />
        </svg>
      </div>

      {!iconOnly && (
        <div className="flex flex-col text-left">
          {/* Mother Wordmark: Never lowercase GODFIRST */}
          <div className="flex items-baseline gap-1.5 leading-none">
            <span
              className={`font-heading font-bold tracking-[0.16em] uppercase text-sm md:text-base ${
                isDarkBg ? "text-brand-offwhite" : "text-brand-black"
              }`}
            >
              GODFIRST
            </span>
            <span
              className={`font-sans font-light tracking-[0.2em] text-[8px] uppercase ${
                isDarkBg ? "text-brand-taupe" : "text-brand-taupe"
              }`}
            >
              GROUP LTD
            </span>
          </div>

          {/* Division Lockup: SOLAR & ENERGY */}
          {withDivision && (
            <div className="flex items-center gap-1.5 mt-1 pt-0.5 border-t border-brand-taupe/20">
              <span
                className={`font-sans font-light uppercase tracking-ultra text-[8.5px] leading-tight ${
                  isDarkBg ? "text-brand-offwhite/90" : "text-brand-slate"
                }`}
              >
                SOLAR &amp; ENERGY
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );

  if (!href) return content;

  return (
    <Link href={href} className="inline-block focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-slate">
      {content}
    </Link>
  );
}
