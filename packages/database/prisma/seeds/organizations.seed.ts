import { PrismaClient } from '@prisma/client';

export async function seedOrganizations(prisma: PrismaClient) {
return prisma.organization.create({
data: {
name: 'Acme Security Operations',
},
});
}