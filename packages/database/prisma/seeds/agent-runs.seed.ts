import { PrismaClient, AgentRunStatus } from '@prisma/client';
import { faker } from '@faker-js/faker';

export async function seedAgentRuns(prisma: PrismaClient) {
for (let i = 0; i < 20; i++) {
await prisma.agentRun.create({
data: {
agentName: faker.word.words(2),
status: faker.helpers.arrayElement([
AgentRunStatus.PENDING,
AgentRunStatus.RUNNING,
AgentRunStatus.SUCCESS,
AgentRunStatus.FAILED,
]),
output: {
score: faker.number.int({ min: 1, max: 100 }),
},
},
});
}
}