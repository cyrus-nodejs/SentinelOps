from app.providers.splunk.mcp_client import MCPClient


class AlertsTool:

    def __init__(self):
        self.client = MCPClient()

    async def list(
        self,
        incident_id: str | None = None,
        severity: str | None = None,
    ):
        return await self.client.call(
            "alerts.list",
            {
                "incident_id": incident_id,
                "severity": severity,
            },
        )

    async def get(
        self,
        alert_id: str,
    ):
        return await self.client.call(
            "alerts.get",
            {
                "alert_id": alert_id,
            },
        )

    async def acknowledge(
        self,
        alert_id: str,
    ):
        return await self.client.call(
            "alerts.acknowledge",
            {
                "alert_id": alert_id,
            },
        )

    async def resolve(
        self,
        alert_id: str,
    ):
        return await self.client.call(
            "alerts.resolve",
            {
                "alert_id": alert_id,
            },
        )