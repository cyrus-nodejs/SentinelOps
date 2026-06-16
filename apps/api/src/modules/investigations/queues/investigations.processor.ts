import { Processor, WorkerHost } from '@nestjs/bullmq';

import { Job } from 'bullmq';

import axios from 'axios';
import {PrismaService} from  '../../prisma/prisma.service'

import { InvestigationsGateway } from '../gateways/investigations.gateway';
import { InvestigationEvents } from '../constants/investigation-events';

@Processor('investigations')
export class InvestigationsProcessor
  extends WorkerHost
{
  constructor(
    private readonly prisma: PrismaService,
    private readonly gateway: InvestigationsGateway,
  ) {
    super();
  }

  async process(
    job: Job,
  ) {
    const {
      investigationId,
    } = job.data;

    this.gateway.emit(
      InvestigationEvents.STARTED,
      {
        investigationId,
      },
    );
const investigation =
  await this.prisma.investigation.findUnique({
    where: {
      id: investigationId,
    },

    include: {
      incident: true,
    },
  });

const result =
  await axios.post(
    `${process.env.AGENT_SERVICE_URL}/api/investigations/start`,
    {
      investigation_id:
        investigation?.id,

      incident_id:
        investigation?.incidentId,
    },
  );
  await this.prisma.investigation.update({
  where: {
    id: investigationId,
  },

  data: {
    status: 'COMPLETED',

    summary:
      result.data.summary,

    rootCause:
      result.data.root_cause,

    confidence:
      result.data.confidence,
  },
})


await this.prisma.evidence.createMany({
  data:
    result.data.evidence.map(
      (item: any) => ({
        investigationId,
        payload: item,
      }),
    ),
});

await this.prisma.remediation.createMany({
  data:
    result.data.remediation_plan.map(
      (action: any) => ({
        investigationId,
        action: action.name,
        status: 'PENDING',
      }),
    ),
});

    this.gateway.emit(
      InvestigationEvents.COMPLETED,
      result.data,
    );
  }
}