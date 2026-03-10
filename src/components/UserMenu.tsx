'use client';

import { useAuth } from './AuthProvider';
import Link from 'next/link';

export default function UserMenu() {
  const { user, loading, signOut } = useAuth();

  if (loading) return null;

  if (!user) {
    return (
      <Link
        href="/login"
        className="rounded-lg border border-white/10 px-4 py-2 text-sm transition-colors hover:border-white/30"
      >
        Sign In
      </Link>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-zinc-400">
        {user.email}
      </span>
      <button
        onClick={() => signOut()}
        className="rounded-lg border border-white/10 px-3 py-1.5 text-sm transition-colors hover:border-white/30"
      >
        Sign Out
      </button>
    </div>
  );
}
