import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class IncidentsService {
     constructor(
    private readonly prisma: PrismaService,
   
  ) {}

async findAll() {
    return this.prisma.incident.findMany({
      include: {
        alerts: true,
        service: true,
      },

      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.incident.findUnique({
      where: {
        id,
      },

      include: {
        alerts: true,
        service: true,
        investigations: true,
      },
    });
  }
}
