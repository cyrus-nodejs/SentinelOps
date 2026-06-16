import { Module } from '@nestjs/common';
import { RemediationsService } from './remediations.service';
import { RemediationsController } from './remediations.controller';
import {PrismaModule} from '../prisma/prisma.module'

@Module({
  imports: [
    PrismaModule
  ],
  controllers: [RemediationsController],
  providers: [RemediationsService],
})
export class RemediationsModule {}
