from app.providers.splunk.mcp_client import MCPClient


class DashboardsTool:

    def __init__(self):
        self.client = MCPClient()

    async def list(self):
        return await self.client.call(
            "dashboards.list",
            {},
        )

    async def get(
        self,
        dashboard_id: str,
    ):
        return await self.client.call(
            "dashboards.get",
            {
                "dashboard_id": dashboard_id,
            },
        )

    async def metrics(
        self,
        dashboard_id: str,
    ):
        return await self.client.call(
            "dashboards.metrics",
            {
                "dashboard_id": dashboard_id,
            },
        )