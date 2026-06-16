# api/investigations.py

from fastapi import APIRouter

from app.agents.orchestrator.agent import (
    OrchestratorAgent,
)

router = APIRouter()

agent = OrchestratorAgent()


@router.post(
    "/investigations/start"
)
async def start_investigation(
    payload: dict,
):
    result = await agent.execute(
        investigation_id=payload[
            "investigation_id"
        ],
        incident_id=payload[
            "incident_id"
        ],
    )

    return result