
import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

export async function seedInvestigations(
prisma: PrismaClient,
incidentIds: string[],
) {
for (const incidentId of incidentIds) {
const investigation = await prisma.investigation.create({
data: {
summary: faker.lorem.paragraph(),
rootCause: faker.lorem.sentence(),
incidentId,
},
});

await prisma.evidence.createMany({
  data: [
    {
      source: 'SIEM',
      content: {
        eventCount: faker.number.int({ min: 100, max: 5000 }),
      },
      investigationId: investigation.id,
    },
    {
      source: 'Firewall',
      content: {
        blockedIps: faker.number.int({ min: 10, max: 500 }),
      },
      investigationId: investigation.id,
    },
  ],
});

}
}