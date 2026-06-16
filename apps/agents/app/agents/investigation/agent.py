# agents/investigation/agent.py

from app.tools.alerts import AlertsTool
from app.tools.hosts import HostsTool
from app.tools.incidents import IncidentsTool
from app.tools.searches import SearchLogsTool


class InvestigationAgent:

    def __init__(self):
        self.alerts = AlertsTool()
        self.hosts = HostsTool()
        self.incidents = IncidentsTool()
        self.logs = SearchLogsTool()

    async def execute(
        self,
        incident_id: str,
    ):
        incident = await self.incidents.get(
            incident_id
        )

        alerts = await self.alerts.list(
            incident_id
        )

        logs = await self.logs.search(
            incident_id
        )

        hosts = await self.hosts.metrics()

        return {
            "incident": incident,
            "alerts": alerts,
            "logs": logs,
            "hosts": hosts,
        }