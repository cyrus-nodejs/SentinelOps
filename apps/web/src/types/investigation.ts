export interface Investigation {
  id: string;

  incidentId: string;

  summary: string;

  rootCause: string;

  confidence: number;

  createdAt: string;
}