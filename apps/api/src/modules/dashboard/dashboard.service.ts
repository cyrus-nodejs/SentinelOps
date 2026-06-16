import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DashboardService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async getMetrics() {
    const [
      openIncidents,
      criticalAlerts,
      activeInvestigations,
      remediations,
      monitoredHosts,
    ] = await Promise.all([
      this.prisma.incident.count({
        where: {
          status: 'OPEN',
        },
      }),

      this.prisma.alert.count({
        where: {
          severity: 'CRITICAL',
        },
      }),

      this.prisma.investigation.count({
        where: {
          status: 'RUNNING',
        },
      }),

      this.prisma.remediation.count(),

      this.prisma.host.count(),
    ]);

    return {
      openIncidents,
      criticalAlerts,
      activeInvestigations,
      remediations,
      monitoredHosts,
      agentSuccessRate: 98,
    };
  }
}