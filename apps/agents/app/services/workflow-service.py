from services.agent_registry import (
    AgentRegistry,
)

class WorkflowService:

    async def investigate(
        self,
        incident_id: str
    ):

        orchestrator = (
            AgentRegistry
            .orchestrator()
        )

        return await orchestrator.run(
            incident_id
        )