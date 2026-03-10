"use client";

import Link from "next/link";
import UserMenu from "./UserMenu";
import Logo from "./Logo";

interface HeaderProps {
  children?: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className="border-b border-white/10 px-6 py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 text-xl font-bold">
          <Logo size={32} />
          <span>
            <span style={{ color: "var(--accent)" }}>Code</span>Pro
          </span>
        </Link>
        <div className="flex items-center gap-4">
          {children}
          <UserMenu />
        </div>
      </div>
    </header>
  );
}
