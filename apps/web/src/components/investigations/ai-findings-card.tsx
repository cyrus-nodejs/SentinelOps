import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function AIFindingsCard({
  rootCause,
  confidence,
}: {
  rootCause: string;
  confidence: number;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          AI Findings
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p>{rootCause}</p>

        <p className="mt-2 text-sm">
          Confidence:
          {' '}
          {confidence}%
        </p>
      </CardContent>
    </Card>
  );
}