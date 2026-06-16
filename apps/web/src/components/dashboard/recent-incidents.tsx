import Link from 'next/link';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const incidents = [
  {
    id: '1',
    title: 'Credential Stuffing Attack',
    severity: 'CRITICAL',
  },
  {
    id: '2',
    title: 'Suspicious Login Activity',
    severity: 'HIGH',
  },
  {
    id: '3',
    title: 'Database CPU Spike',
    severity: 'MEDIUM',
  },
];

export function RecentIncidents() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Recent Incidents
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {incidents.map(
            (incident) => (
              <Link
                key={incident.id}
                href={`/incidents/${incident.id}`}
                className="block border rounded-lg p-3"
              >
                <div className="font-medium">
                  {incident.title}
                </div>

                <div className="text-sm text-muted-foreground">
                  {incident.severity}
                </div>
              </Link>
            )
          )}
        </div>
      </CardContent>
    </Card>
  );
}