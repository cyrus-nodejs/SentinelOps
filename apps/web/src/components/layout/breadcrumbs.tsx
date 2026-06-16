'use client';

import { usePathname } from 'next/navigation';

export function Breadcrumbs() {
  const pathname = usePathname();

  const segments = pathname
    .split('/')
    .filter(Boolean);

  return (
    <div className="text-sm text-muted-foreground">
      {segments.length === 0
        ? 'Dashboard'
        : segments.join(' / ')}
    </div>
  );
}