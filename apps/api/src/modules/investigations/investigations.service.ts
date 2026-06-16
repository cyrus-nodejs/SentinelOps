import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';

import { Queue } from 'bullmq';

import {PrismaService} from '../prisma/prisma.service'

@Injectable()
export class InvestigationsService {
  constructor(
    private readonly prisma: PrismaService,

    @InjectQueue('investigations')
    private readonly queue: Queue,
  ) {}

  async findAll() {
    return this.prisma.investigation.findMany({
      include: {
        incident: true,
      },

      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(
    id: string,
  ) {
    return this.prisma.investigation.findUnique({
      where: {
        id,
      },

      include: {
        incident: true,
        findings: true,
        evidence: true,
      },
    });
  }

  async start(
    incidentId: string,
  ) {
    const investigation =
      await this.prisma.investigation.create({
        data: {
          incidentId,
          status: 'QUEUED',
        },
      });

    await this.queue.add(
      'start-investigation',
      {
        investigationId:
          investigation.id,
      },
    );

    return investigation;
  }
}