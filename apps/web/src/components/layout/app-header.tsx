import { Bell } from 'lucide-react';

import { Breadcrumbs } from './breadcrumbs';

export function AppHeader() {
  return (
    <header className="h-16 border-b px-6 flex items-center justify-between">
      <Breadcrumbs />

      <div className="flex items-center gap-4">
        <Bell className="h-5 w-5" />

        <div className="h-8 w-8 rounded-full bg-muted" />
      </div>
    </header>
  );
}