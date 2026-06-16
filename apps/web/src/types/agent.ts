export interface AgentRun {
  id: string;

  agentName: string;

  status: string;

  latencyMs: number;

  tokenCount: number;

  model: string;

  createdAt: string;
}