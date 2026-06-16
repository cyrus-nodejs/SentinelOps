import { PrismaClient, UserRole } from '@prisma/client';
import { faker } from '@faker-js/faker';
import * as bcrypt from 'bcrypt';

export async function seedUsers(
prisma: PrismaClient,
organizationId: string,
teamId: string,
count = 20,
) {
const password = await bcrypt.hash('Password123!', 10);

const users = [];

for (let i = 0; i < count; i++) {
users.push(
await prisma.user.create({
data: {
email: faker.internet.email().toLowerCase(),
password,
firstName: faker.person.firstName(),
lastName: faker.person.lastName(),
role: faker.helpers.arrayElement([
UserRole.ANALYST,
UserRole.ENGINEER,
UserRole.VIEWER,
]),
organizationId,
teamId,
},
}),
);
}

const admin = await prisma.user.create({
data: {
email: 'admin@example.com',
password,
firstName: 'System',
lastName: 'Admin',
role: UserRole.ADMIN,
organizationId,
teamId,
},
});

return [admin, ...users];
}