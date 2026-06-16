import { prisma } from ".././src/prisma";

import { seedOrganizations } from './seeds/organizations.seed';
import { seedTeams } from './seeds/teams.seed';
import { seedUsers } from './seeds/users.seed';
import { seedHosts } from './seeds/hosts.seed';
import { seedServices } from './seeds/service.seed';
import { seedIncidents } from './seeds/incidents.seed';
import { seedInvestigations } from './seeds/investigations.seed';
import { seedAlerts } from './seeds/alerts.seed';
import { seedRemediations } from './seeds/remediations.seed';
import { seedAgentRuns } from './seeds/agent-runs.seed';
import { seedAuditLogs } from './seeds/audit-logs.seed';



async function main() {
const organization = await seedOrganizations(prisma);

const teams = await seedTeams(
prisma,
organization.id,
);

const users = await seedUsers(
prisma,
organization.id,
teams.socTeam.id,
);

const hosts = await seedHosts(
prisma,
organization.id,
);

await seedServices(
prisma,
organization.id,
);

const incidents = await seedIncidents(
prisma,
users.map((u) => u.id),
);

await seedInvestigations(
prisma,
incidents.map((i) => i.id),
);

await seedAlerts(
prisma,
hosts.map((h:any) => h.id),
);

await seedRemediations(
prisma,
incidents.map((i) => i.id),
);

await seedAgentRuns(prisma);

await seedAuditLogs(prisma);

console.log('✅ Database seeded successfully');
}

main()
.catch(console.error)
.finally(async () => {
await prisma.$disconnect();
});

