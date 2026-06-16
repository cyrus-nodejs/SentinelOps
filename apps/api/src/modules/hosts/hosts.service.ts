import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";


@Injectable()
export class HostsService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.host.findMany({
      include: {
        organization: true
      },
    });
  }
}
