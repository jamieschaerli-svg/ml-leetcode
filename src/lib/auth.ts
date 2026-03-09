import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

/**
 * Create a Supabase client for browser-side auth.
 */
export function createBrowserClient() {
  return createClient(supabaseUrl, supabaseAnonKey);
}

/**
 * Dev-only bypass user. Only works when NODE_ENV === 'development'.
 * NOT a backdoor — disabled entirely in production builds.
 */
export const DEV_BYPASS_EMAIL = 'dev@localhost';
export const DEV_BYPASS_PASSWORD = 'dev-local-only';

export function isDevMode(): boolean {
  return process.env.NODE_ENV === 'development';
}

export interface AuthUser {
  id: string;
  email: string;
  isDevBypass: boolean;
}

/**
 * Dev bypass session stored in sessionStorage (not localStorage).
 * Cleared when the browser tab closes.
 */
const DEV_SESSION_KEY = 'ml-leetcode-dev-session';

export function getDevSession(): AuthUser | null {
  if (!isDevMode()) return null;
  if (typeof window === 'undefined') return null;
  try {
    const stored = sessionStorage.getItem(DEV_SESSION_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

export function setDevSession(user: AuthUser): void {
  if (typeof window === 'undefined') return;
  sessionStorage.setItem(DEV_SESSION_KEY, JSON.stringify(user));
}

export function clearDevSession(): void {
  if (typeof window === 'undefined') return;
  sessionStorage.removeItem(DEV_SESSION_KEY);
}
