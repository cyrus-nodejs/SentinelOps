import { IncidentsTable } from '@/components/incidents/incidents-table';

export default function IncidentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Incidents
        </h1>

        <p className="text-muted-foreground">
          Security and observability incidents
        </p>
      </div>

      <IncidentsTable />
    </div>
  );
}