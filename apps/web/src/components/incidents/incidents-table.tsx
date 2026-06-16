'use client';

import Link from 'next/link';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';


import {useIncidents} from '@/hooks/use-incidents'

export function IncidentsTable() {
const {data } = useIncidents();
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            Severity
          </TableHead>

          <TableHead>
            Title
          </TableHead>

          <TableHead>
            Status
          </TableHead>

          <TableHead>
            Actions
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {data.map(
          (incident:any) => (
            <TableRow
              key={incident.id}
            >
              <TableCell>
                {incident.severity}
              </TableCell>

              <TableCell>
                {incident.title}
              </TableCell>

              <TableCell>
                {incident.status}
              </TableCell>

              <TableCell>
                <Link
                  href={`/incidents/${incident.id}`}
                >
                  View
                </Link>
              </TableCell>
            </TableRow>
          )
        )}
      </TableBody>
    </Table>
  );
}