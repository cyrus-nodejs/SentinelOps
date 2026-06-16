'use client';
import { KpiCard } from '@/components/dashboard/kpi-card';
import { IncidentTrendChart } from '@/components/dashboard/incident-trend-chart';
import { RecentIncidents } from '@/components/dashboard/recent-incidents';
import {useDashboard} from '@/hooks/use-dashboard'

export default function DashboardPage() {
    const { data } = useDashboard();
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-muted-foreground">
          Agentic Operations Overview
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-6">
        <KpiCard
  title="Open Incidents"
  value={
    data?.openIncidents ?? 0
  }
/>
        
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <RecentIncidents />

        <IncidentTrendChart />
      </div>
    </div>
  );
}