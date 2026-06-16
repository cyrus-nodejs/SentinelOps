import {
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';

import { InvestigationsService } from './investigations.service';

@Controller('investigations')
export class InvestigationsController {
  constructor(
    private readonly investigations:
      InvestigationsService,
  ) {}

  @Get()
  async findAll() {
    return this.investigations.findAll();
  }

  @Get(':id')
  async findOne(
    @Param('id') id: string,
  ) {
    return this.investigations.findOne(
      id,
    );
  }

  @Post(':id/start')
  async start(
    @Param('id') incidentId: string,
  ) {
    return this.investigations.start(
      incidentId,
    );
  }
}