import {
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';

import { RemediationsService } from './remediations.service';

@Controller('remediations')
export class RemediationsController {
  constructor(
    private readonly remediations:
      RemediationsService,
  ) {}

  @Get()
  async findAll() {
    return this.remediations.findAll();
  }

  @Post(':id/approve')
  async approve(
    @Param('id') id: string,
  ) {
    return this.remediations.approve(
      id,
    );
  }
}