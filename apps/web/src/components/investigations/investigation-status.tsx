import { Badge } from '@/components/ui/badge';

export function InvestigationStatus({
  status,
}: {
  status: string;
}) {
  return (
    <Badge>
      {status}
    </Badge>
  );
}