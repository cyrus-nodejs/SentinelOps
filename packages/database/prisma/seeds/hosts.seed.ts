import { PrismaClient, HostStatus } from '@prisma/client';
import { faker } from '@faker-js/faker';

export async function seedHosts(
  prisma: PrismaClient,
  organizationId: string,
) {
  const hosts = [];

  for (let i = 0; i < 15; i++) {
    hosts.push(
      await prisma.host.create({
        data: {
          hostname: `${faker.internet.domainWord()}-server`,
          ipAddress: faker.internet.ip(),
          status: faker.helpers.arrayElement([
            HostStatus.HEALTHY,
            HostStatus.WARNING,
            HostStatus.CRITICAL,
          ]),
          organizationId,
        },
      }),
    );
  }

  return hosts;
}