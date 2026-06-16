import { useQuery } from '@tanstack/react-query';

import { getInvestigation } from '@/services/investigations.service';

export function useInvestigation(
  id: string,
) {
  return useQuery({
    queryKey: [
      'investigation',
      id,
    ],

    queryFn: () =>
      getInvestigation(id),
  });
}