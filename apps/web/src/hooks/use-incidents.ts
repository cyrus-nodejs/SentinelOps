import { useQuery } from '@tanstack/react-query';

import { getIncidents } from '@/services/incidents.service';

export function useIncidents() {
  return useQuery({
    queryKey: ['incidents'],

    queryFn: getIncidents,
  });
}