class SplunkTools:

    def __init__(
        self,
        client,
    ):
        self.client = client

    async def get_alerts(
        self,
    ):
        return (
            await self.client.call(
                "alerts.list"
            )
        )

    async def search_logs(
        self,
        query: str,
    ):
        return (
            await self.client.call(
                "search.logs",
                {
                    "query": query
                }
            )
        )