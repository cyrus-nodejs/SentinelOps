import os

import httpx

class SplunkMCPClient:

    def __init__(self):
        self.base_url = os.getenv(
            "SPLUNK_MCP_URL"
        )

    async def search_logs(
        self,
        query: str
    ):
        async with httpx.AsyncClient() as client:

            response = await client.post(
                f"{self.base_url}/search",
                json={
                    "query": query
                }
            )

            return response.json()