'use client';

import { AuthProvider } from '@/contexts/AuthContext';
import { NextUIProvider } from '@nextui-org/react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <AuthProvider>{children}</AuthProvider>
    </NextUIProvider>
  );
}
