import { Injectable } from '@nestjs/common';
import {PrismaService} from '../prisma/prisma.service'

@Injectable()
export class RemediationsService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async findAll() {
    return this.prisma.remediation.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async approve(
    id: string,
  ) {
    return this.prisma.remediation.update({
      where: {
        id,
      },

      data: {
        approved: true,
        approvedAt: new Date(),
      },
    });
  }
}