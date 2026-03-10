"use client";

export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background rounded square */}
      <rect
        x="2"
        y="2"
        width="60"
        height="60"
        rx="14"
        fill="url(#bgGrad)"
        stroke="url(#borderGrad)"
        strokeWidth="2"
      />

      {/* Left bracket < */}
      <path
        d="M24 18L12 32L24 46"
        stroke="#e8e8e8"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right bracket > */}
      <path
        d="M40 18L52 32L40 46"
        stroke="#e8e8e8"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Center slash / with accent glow */}
      <path
        d="M36 16L28 48"
        stroke="url(#slashGrad)"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Small data nodes */}
      <circle cx="16" cy="12" r="2.5" fill="#00c853" opacity="0.8" />
      <circle cx="48" cy="12" r="2.5" fill="#ffab00" opacity="0.8" />
      <circle cx="48" cy="52" r="2.5" fill="#ff5252" opacity="0.8" />
      <circle cx="16" cy="52" r="2.5" fill="#6c63ff" opacity="0.8" />

      {/* Connecting lines (neural net feel) */}
      <line x1="16" y1="12" x2="24" y2="18" stroke="#6c63ff" strokeWidth="1" opacity="0.3" />
      <line x1="48" y1="12" x2="40" y2="18" stroke="#6c63ff" strokeWidth="1" opacity="0.3" />
      <line x1="48" y1="52" x2="40" y2="46" stroke="#6c63ff" strokeWidth="1" opacity="0.3" />
      <line x1="16" y1="52" x2="24" y2="46" stroke="#6c63ff" strokeWidth="1" opacity="0.3" />

      <defs>
        <linearGradient id="bgGrad" x1="0" y1="0" x2="64" y2="64">
          <stop offset="0%" stopColor="#1a1a2e" />
          <stop offset="100%" stopColor="#0a0a1a" />
        </linearGradient>
        <linearGradient id="borderGrad" x1="0" y1="0" x2="64" y2="64">
          <stop offset="0%" stopColor="#6c63ff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#6c63ff" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="slashGrad" x1="36" y1="16" x2="28" y2="48">
          <stop offset="0%" stopColor="#6c63ff" />
          <stop offset="50%" stopColor="#8b83ff" />
          <stop offset="100%" stopColor="#6c63ff" />
        </linearGradient>
      </defs>
    </svg>
  );
}
