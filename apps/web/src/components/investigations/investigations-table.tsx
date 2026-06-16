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

interface Investigation {
  id: string;
  incidentId: string;
  status: string;
  confidence: number;
  createdAt: string;
}

interface Props {
  investigations?: Investigation[];
}

export function InvestigationsTable({
  investigations,
}: Props) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Confidence</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {investigations?.map((item) => (
          <TableRow key={item.id}>
            <TableCell>
              {item.id}
            </TableCell>

            <TableCell>
              {item.status}
            </TableCell>

            <TableCell>
              {item.confidence}%
            </TableCell>

            <TableCell>
              <Link
                href={`/investigations/${item.id}`}
              >
                View
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}