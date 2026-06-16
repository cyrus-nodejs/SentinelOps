from app.providers.splunk.mcp_client import MCPClient


class IncidentsTool:

    def __init__(self):
        self.client = MCPClient()

    async def list(
        self,
        status: str | None = None,
    ):
        return await self.client.call(
            "incidents.list",
            {
                "status": status,
            },
        )

    async def get(
        self,
        incident_id: str,
    ):
        return await self.client.call(
            "incidents.get",
            {
                "incident_id": incident_id,
            },
        )

    async def related(
        self,
        incident_id: str,
    ):
        return await self.client.call(
            "incidents.related",
            {
                "incident_id": incident_id,
            },
        )

    async def timeline(
        self,
        incident_id: str,
    ):
        return await self.client.call(
            "incidents.timeline",
            {
                "incident_id": incident_id,
            },
        )