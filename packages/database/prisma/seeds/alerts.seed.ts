import {
PrismaClient,
AlertSeverity,
AlertStatus,
} from '@prisma/client';
import { faker } from '@faker-js/faker';

export async function seedAlerts(
prisma: PrismaClient,
hostIds: string[],
) {
for (let i = 0; i < 50; i++) {
await prisma.alert.create({
data: {
title: faker.hacker.phrase(),
description: faker.lorem.sentence(),
severity: faker.helpers.arrayElement([
AlertSeverity.LOW,
AlertSeverity.MEDIUM,
AlertSeverity.HIGH,
AlertSeverity.CRITICAL,
]),
status: faker.helpers.arrayElement([
AlertStatus.OPEN,
AlertStatus.ACKNOWLEDGED,
AlertStatus.RESOLVED,
]),
hostId: faker.helpers.arrayElement(hostIds),
},
});
}
}