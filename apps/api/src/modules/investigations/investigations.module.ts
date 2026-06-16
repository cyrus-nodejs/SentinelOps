import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import {PrismaModule} from '../prisma/prisma.module'

import { InvestigationsController } from './investigations.controller';
import { InvestigationsService } from './investigations.service';
import { InvestigationsProcessor } from './queues/investigations.processor';
import { InvestigationsGateway } from './gateways/investigations.gateway';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'investigations',
    }),
    PrismaModule
  ],

  controllers: [
    InvestigationsController,
  ],

  providers: [
    InvestigationsService,
    InvestigationsProcessor,
    InvestigationsGateway,
  ],

  exports: [
    InvestigationsService,
  ],
})
export class InvestigationsModule {}