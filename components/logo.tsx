interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
  showSteam?: boolean;
}

export function Logo({
  className,
  variant = "dark",
  showSteam = true,
}: LogoProps) {
  const bowl = variant === "dark" ? "#364a3c" : "#FDF8F0";
  const rim = variant === "dark" ? "#4f6855" : "#F3EDE3";
  const bean = variant === "dark" ? "#6f8a72" : "#F3EDE3";
  const steam = variant === "dark" ? "#6f8a72" : "#FDF8F0";

  return (
    <svg
      className={className}
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      role="img"
      aria-label="Health Bean"
    >
      {showSteam && (
        <g
          stroke={steam}
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.55"
        >
          <path d="M54 28 Q58 18 54 8" />
          <path d="M66 24 Q70 12 66 2" />
          <path d="M78 28 Q82 18 78 8" />
        </g>
      )}

      <path
        d="M16 60 Q16 116 64 116 Q112 116 112 60 Z"
        fill={bowl}
      />

      <ellipse cx="64" cy="60" rx="48" ry="6" fill={rim} />

      <ellipse
        cx="62"
        cy="50"
        rx="26"
        ry="13"
        transform="rotate(-12 62 50)"
        fill={bean}
      />
    </svg>
  );
}
