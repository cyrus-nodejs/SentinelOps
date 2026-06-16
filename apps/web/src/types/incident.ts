export type IncidentSeverity =
  | 'LOW'
  | 'MEDIUM'
  | 'HIGH'
  | 'CRITICAL';

export type IncidentStatus =
  | 'OPEN'
  | 'INVESTIGATING'
  | 'RESOLVED';

export interface Incident {
  id: string;

  title: string;

  description: string;

  severity: IncidentSeverity;

  status: IncidentStatus;

  createdAt: string;

  updatedAt: string;
}