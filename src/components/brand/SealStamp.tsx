interface SealStampProps {
  className?: string;
  size?: number;
}

export function SealStamp({ className = "", size = 110 }: SealStampProps) {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative rounded-full select-none ${className}`}
    >
      <svg
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-brand-offwhite"
      >
        {/* Outer dashed ring */}
        <circle
          cx="80"
          cy="80"
          r="76"
          stroke="#A89F91"
          strokeWidth="1.2"
          strokeDasharray="2 3"
          opacity="0.5"
        />
        {/* Concentric rings */}
        <circle cx="80" cy="80" r="70" stroke="#F5F5F0" strokeWidth="1" opacity="0.9" />
        <circle cx="80" cy="80" r="52" stroke="#A89F91" strokeWidth="0.8" opacity="0.6" />

        {/* Circular text arcs */}
        <defs>
          <path id="seal-top" d="M 24 80 A 56 56 0 0 1 136 80" />
          <path id="seal-bottom" d="M 136 80 A 56 56 0 0 1 24 80" />
        </defs>

        <text
          fontFamily="var(--font-inter), sans-serif"
          fontSize="7"
          fontWeight="400"
          letterSpacing="0.24em"
          fill="#F5F5F0"
        >
          <textPath href="#seal-top" startOffset="50%" textAnchor="middle">
            GODFIRST GROUP LTD
          </textPath>
        </text>

        <text
          fontFamily="var(--font-inter), sans-serif"
          fontSize="6.8"
          fontWeight="400"
          letterSpacing="0.22em"
          fill="#A89F91"
        >
          <textPath href="#seal-bottom" startOffset="50%" textAnchor="middle">
            FOUNDATION FIRST • EST. 2026
          </textPath>
        </text>

        {/* Center Dolphin G emblem */}
        <g transform="translate(58, 58) scale(0.44)">
          <path
            d="M 50 6 A 44 44 0 1 0 94 50 L 94 42 A 8 8 0 0 0 86 34 L 54 34 A 6 6 0 0 0 48 40 L 48 46 A 4 4 0 0 0 52 50 L 74 50 A 24 24 0 1 1 50 26 A 24 24 0 0 1 73 32 L 82 23 A 38 38 0 0 0 50 14"
            fill="#F5F5F0"
          />
          <path
            d="M 32 60 C 28 48 30 32 45 25 C 53 21 62 23 68 28 C 65 30 58 31 52 35 C 47 38 44 44 43 51 C 42 57 37 60 32 60 Z"
            fill="#F5F5F0"
          />
        </g>
      </svg>
    </div>
  );
}
