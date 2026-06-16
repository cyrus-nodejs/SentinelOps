from app.providers.splunk.mcp_client import MCPClient


class HostsTool:

    def __init__(self):
        self.client = MCPClient()

    async def list(self):
        return await self.client.call(
            "hosts.list",
            {},
        )

    async def get(
        self,
        host_id: str,
    ):
        return await self.client.call(
            "hosts.get",
            {
                "host_id": host_id,
            },
        )

    async def metrics(
        self,
        host_id: str | None = None,
    ):
        return await self.client.call(
            "hosts.metrics",
            {
                "host_id": host_id,
            },
        )

    async def health(
        self,
        host_id: str,
    ):
        return await self.client.call(
            "hosts.health",
            {
                "host_id": host_id,
            },
        )