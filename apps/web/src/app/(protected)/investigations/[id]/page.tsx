import { EvidencePanel } from '@/components/investigations/evidence-panel';
import { InvestigationTimeline } from '@/components/investigations/investigation-timeline';
import { AIFindingsCard } from '@/components/investigations/ai-findings-card';

export default function InvestigationDetailPage() {
  return (
    <div className="space-y-6">
      <AIFindingsCard
        rootCause="Credential Stuffing"
        confidence={92}
      />

      <InvestigationTimeline
        events={[]}
      />

      <EvidencePanel
        evidence={{}}
      />
    </div>
  );
}