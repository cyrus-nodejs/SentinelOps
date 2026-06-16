import { Injectable } from '@nestjs/common';

import { PrismaService } from "../prisma/prisma.service";


@Injectable()
export class AgentsService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async findAllRuns() {
    return this.prisma.agentMetric.findMany({
      orderBy: {
        createdAt: 'desc',
      },

      take: 100,
    });
  }
}