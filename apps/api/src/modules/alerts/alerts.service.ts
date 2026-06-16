import { Injectable } from '@nestjs/common';
import { PrismaService } from "../prisma/prisma.service";


@Injectable()
export class AlertsService {
     constructor(
    private readonly prisma: PrismaService,
   
  ) {}

    findAll() {
    return this.prisma.alert.findMany({
      include: {
        host: true,
      },
    });
  }
}
