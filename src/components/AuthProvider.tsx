'use client';

import { createContext, useContext, useEffect, useState, useCallback, useMemo, ReactNode } from 'react';
import { User } from '@supabase/supabase-js';
import { createBrowserClient, AuthUser } from '@/lib/auth';

interface AuthContextValue {
  user: AuthUser | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: string | null }>;
  signUp: (email: string, password: string) => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  loading: true,
  signIn: async () => ({ error: 'Not initialized' }),
  signUp: async () => ({ error: 'Not initialized' }),
  signOut: async () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

function toAuthUser(user: User): AuthUser {
  return {
    id: user.id,
    email: user.email || '',
  };
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = useMemo(() => createBrowserClient(), []);

  useEffect(() => {
    async function init() {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          setUser(toAuthUser(session.user));
        }
      } catch (err) {
        console.error('Failed to get session:', err);
      } finally {
        setLoading(false);
      }
    }

    init();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser(toAuthUser(session.user));
      } else {
        setUser(null);
      }
    });

    return () => subscription.unsubscribe();
  }, [supabase]);

  const signIn = useCallback(async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        const msg = error.message.toLowerCase();
        if (msg.includes('invalid login credentials') || msg.includes('invalid_credentials')) {
          return { error: 'Wrong email or password. Double-check your credentials or create an account.' };
        }
        if (msg.includes('email not confirmed')) {
          return { error: 'Please confirm your email before signing in. Check your inbox.' };
        }
        if (msg.includes('too many requests') || msg.includes('rate limit')) {
          return { error: 'Too many attempts. Please wait a moment and try again.' };
        }
        return { error: error.message };
      }
      if (!data.session) {
        return { error: 'Sign in failed — no session returned. Please try again.' };
      }
      return { error: null };
    } catch {
      return { error: 'Could not connect to the server. Check your internet and try again.' };
    }
  }, [supabase]);

  const signUp = useCallback(async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) {
        const msg = error.message.toLowerCase();
        if (msg.includes('already registered') || msg.includes('already been registered')) {
          return { error: 'An account with this email already exists. Please sign in instead.' };
        }
        if (msg.includes('password') && msg.includes('characters')) {
          return { error: 'Password must be at least 6 characters.' };
        }
        if (msg.includes('valid email') || msg.includes('invalid email')) {
          return { error: 'Please enter a valid email address.' };
        }
        if (msg.includes('too many requests') || msg.includes('rate limit')) {
          return { error: 'Too many attempts. Please wait a moment and try again.' };
        }
        return { error: error.message };
      }
      // Supabase returns empty identities when the email is already taken
      // but doesn't throw an error (security measure to not leak user existence)
      if (data.user && data.user.identities?.length === 0) {
        return { error: 'An account with this email already exists. Please sign in instead.' };
      }
      return { error: null };
    } catch {
      return { error: 'Could not connect to the server. Check your internet and try again.' };
    }
  }, [supabase]);

  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
    setUser(null);
  }, [supabase]);

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
