'use client';

import { InvestigationsTable } from '@/components/investigations/investigations-table';

export default function InvestigationsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        Investigations
      </h1>

      <InvestigationsTable
        investigations={[]}
      />
    </div>
  );
}