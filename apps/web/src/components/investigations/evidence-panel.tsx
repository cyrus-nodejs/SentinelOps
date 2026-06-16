export function EvidencePanel({
  evidence,
}: {
  evidence: unknown;
}) {
  return (
    <pre className="rounded-lg border p-4 overflow-auto">
      {JSON.stringify(
        evidence,
        null,
        2,
      )}
    </pre>
  );
}