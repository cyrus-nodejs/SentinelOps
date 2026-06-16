import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

export async function seedServices(
  prisma: PrismaClient,
  organizationId: string,
) {
  const services = [];

  for (let i = 0; i < 10; i++) {
    services.push(
      await prisma.service.create({
        data: {
          name: faker.company.buzzPhrase(),
          version: `${faker.number.int({ min: 1, max: 5 })}.${faker.number.int({
            min: 0,
            max: 9,
          })}.${faker.number.int({
            min: 0,
            max: 9,
          })}`,
          organizationId,
        },
      }),
    );
  }

  return services;
}