import { AgentsTable } from '@/components/agents/agents-table';

export default function AgentsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">
        Agents
      </h1>

      <AgentsTable
        agents={[]}
      />
    </div>
  );
}