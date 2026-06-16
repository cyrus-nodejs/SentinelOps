from app.providers.splunk.mcp_client import MCPClient


class RemediationTool:

    def __init__(self):
        self.client = MCPClient()

    async def plan(
        self,
        incident_id: str,
        attack_type: str,
    ):
        return await self.client.call(
            "remediation.plan",
            {
                "incident_id": incident_id,
                "attack_type": attack_type,
            },
        )

    async def execute(
        self,
        action_type: str,
        target: str,
    ):
        return await self.client.call(
            "remediation.execute",
            {
                "action_type": action_type,
                "target": target,
            },
        )

    async def verify(
        self,
        execution_id: str,
    ):
        return await self.client.call(
            "remediation.verify",
            {
                "execution_id": execution_id,
            },
        )

    async def rollback(
        self,
        execution_id: str,
    ):
        return await self.client.call(
            "remediation.rollback",
            {
                "execution_id": execution_id,
            },
        )