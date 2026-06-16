from app.providers.splunk.mcp_client import MCPClient


class SearchLogsTool:

    def __init__(self):
        self.client = MCPClient()

    async def search(
        self,
        incident_id: str,
    ):
        return await self.client.call(
            "search.logs",
            {
                "incident_id": incident_id,
            },
        )

    async def by_ip(
        self,
        ip_address: str,
    ):
        return await self.client.call(
            "search.by_ip",
            {
                "ip_address": ip_address,
            },
        )

    async def by_user(
        self,
        username: str,
    ):
        return await self.client.call(
            "search.by_user",
            {
                "username": username,
            },
        )

    async def raw(
        self,
        query: str,
    ):
        return await self.client.call(
            "search.raw",
            {
                "query": query,
            },
        )