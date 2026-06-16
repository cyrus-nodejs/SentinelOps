import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

export async function seedTeams(
prisma: PrismaClient,
organizationId: string,
) {
const socTeam = await prisma.team.create({
data: {
name: 'SOC Team',
organizationId,
},
});

const engineeringTeam = await prisma.team.create({
data: {
name: 'Platform Engineering',
organizationId,
},
});

return {
socTeam,
engineeringTeam,
};
}