import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@/components/ui/table';

export function AgentsTable({
  agents,
}: {
  agents?: any[];
}) {
  return (
    <Table>
      <TableBody>
        {agents?.map((agent) => (
          <TableRow
            key={agent.id}
          >
            <TableCell>
              {agent.name}
            </TableCell>

            <TableCell>
              {agent.status}
            </TableCell>

            <TableCell>
              {agent.latencyMs}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}