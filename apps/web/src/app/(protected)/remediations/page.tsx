import { RemediationTable } from '@/components/remediations/remediation-table';

export default function RemediationsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">
        Remediations
      </h1>

      <RemediationTable
        items={[]}
      />
    </div>
  );
}