import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

export async function seedRemediations(
prisma: PrismaClient,
incidentIds: string[],
) {
for (const incidentId of incidentIds) {
await prisma.remediation.create({
data: {
action: faker.hacker.phrase(),
approved: faker.datatype.boolean(),
executed: faker.datatype.boolean(),
incidentId,
},
});
}
}