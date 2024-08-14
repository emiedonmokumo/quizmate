'use client'; // Mark as Client Component

import { SessionProvider } from 'next-auth/react';

export function GlobalContext({ children }) {
    return <SessionProvider>{children}</SessionProvider>;
}
