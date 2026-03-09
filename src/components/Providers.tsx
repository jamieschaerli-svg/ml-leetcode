'use client';

import { ReactNode } from 'react';
import { AuthProvider } from './AuthProvider';

/**
 * Root-level providers wrapper.
 * Import this in layout.tsx and wrap {children} with it.
 */
export function Providers({ children }: { children: ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
