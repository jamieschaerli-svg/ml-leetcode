'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/AuthProvider';
import { isDevMode, DEV_BYPASS_EMAIL, DEV_BYPASS_PASSWORD } from '@/lib/auth';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const { signIn, signUp } = useAuth();
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    const result = isSignUp
      ? await signUp(email, password)
      : await signIn(email, password);

    setLoading(false);

    if (result.error) {
      setError(result.error);
    } else if (isSignUp) {
      setSuccess('Account created! Check your email to confirm, then sign in.');
      setIsSignUp(false);
    } else {
      router.push('/');
    }
  }

  function handleDevLogin() {
    setEmail(DEV_BYPASS_EMAIL);
    setPassword(DEV_BYPASS_PASSWORD);
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">
            <span style={{ color: 'var(--accent)' }}>ML</span> LeetCode
          </h1>
          <p className="mt-2" style={{ color: 'var(--text-secondary)' }}>
            {isSignUp ? 'Create your account' : 'Sign in to continue learning'}
          </p>
        </div>

        <div className="card">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium"
                style={{ color: 'var(--text-secondary)' }}
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--accent)]"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-1 block text-sm font-medium"
                style={{ color: 'var(--text-secondary)' }}
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--accent)]"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <div
                className="rounded-lg border px-4 py-3 text-sm"
                style={{
                  background: 'var(--error)' + '11',
                  borderColor: 'var(--error)' + '44',
                  color: 'var(--error)',
                }}
              >
                {error}
              </div>
            )}

            {success && (
              <div
                className="rounded-lg border px-4 py-3 text-sm"
                style={{
                  background: 'var(--success)' + '11',
                  borderColor: 'var(--success)' + '44',
                  color: 'var(--success)',
                }}
              >
                {success}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full disabled:opacity-50"
            >
              {loading ? 'Please wait...' : isSignUp ? 'Create Account' : 'Sign In'}
            </button>
          </form>

          <div className="mt-4 text-center">
            <button
              onClick={() => {
                setIsSignUp(!isSignUp);
                setError(null);
                setSuccess(null);
              }}
              className="text-sm transition-colors hover:underline"
              style={{ color: 'var(--accent)' }}
            >
              {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
            </button>
          </div>

          {/* Dev bypass — only visible in development */}
          {isDevMode() && (
            <div className="mt-6 border-t border-white/10 pt-4">
              <p className="mb-2 text-center text-xs" style={{ color: 'var(--text-secondary)' }}>
                Development only
              </p>
              <button
                onClick={handleDevLogin}
                className="w-full rounded-lg border border-dashed border-white/20 px-4 py-2 text-sm transition-colors hover:border-white/40"
                style={{ color: 'var(--text-secondary)' }}
              >
                Fill dev credentials
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
