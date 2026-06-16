import {
PrismaClient,
IncidentSeverity,
IncidentStatus,
} from '@prisma/client';
import { faker } from '@faker-js/faker';

export async function seedIncidents(
prisma: PrismaClient,
userIds: string[],
) {
const incidents = [];

for (let i = 0; i < 30; i++) {
incidents.push(
await prisma.incident.create({
data: {
title: faker.hacker.phrase(),
description: faker.lorem.paragraph(),
severity: faker.helpers.arrayElement([
IncidentSeverity.LOW,
IncidentSeverity.MEDIUM,
IncidentSeverity.HIGH,
IncidentSeverity.CRITICAL,
]),
status: faker.helpers.arrayElement([
IncidentStatus.OPEN,
IncidentStatus.INVESTIGATING,
IncidentStatus.RESOLVED,
IncidentStatus.CLOSED,
]),
assignedToId: faker.helpers.arrayElement(userIds),
},
}),
);
}

return incidents;
}

