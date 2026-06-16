import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

export async function seedAuditLogs(prisma: PrismaClient) {
for (let i = 0; i < 50; i++) {
await prisma.auditLog.create({
data: {
actor: faker.internet.email(),
action: faker.helpers.arrayElement([
'CREATE',
'UPDATE',
'DELETE',
'LOGIN',
]),
resource: faker.database.column(),
metadata: {
ip: faker.internet.ip(),
},
},
});
}
}