import { ReactNode } from 'react';

import { AppSidebar } from './app-sidebar';
import { AppHeader } from './app-header';

interface Props {
  children: ReactNode;
}

export function AppShell({
  children,
}: Props) {
  return (
    <div className="flex h-screen">
      <AppSidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <AppHeader />

        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}