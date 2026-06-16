import { useQuery } from '@tanstack/react-query';

import { getDashboardMetrics } from '@/services/dashboard.service';

export function useDashboard() {
  return useQuery({
    queryKey: [
      'dashboard-metrics',
    ],

    queryFn:
      getDashboardMetrics,
  });
}