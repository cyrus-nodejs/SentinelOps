import {
  Controller,
  Get,
} from '@nestjs/common';

import { AgentsService } from './agents.service';

@Controller('agent-runs')
export class AgentsController {
  constructor(
    private readonly agents: AgentsService,
  ) {}

  @Get()
  async runs() {
    return this.agents.findAllRuns();
  }
}