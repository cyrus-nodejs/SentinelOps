class MCPClient:

    def __init__(
        self,
        transport,
    ):
        self.transport = transport

    async def call(
        self,
        tool_name: str,
        arguments: dict,
    ):
        return await (
            self.transport.call_tool(
                tool_name,
                arguments,
            )
        )