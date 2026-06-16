from fastapi import APIRouter

from services.workflow_service import (
    WorkflowService
)

router = APIRouter()

service = WorkflowService()

@router.post(
    "/investigate/{incident_id}"
)
async def investigate(
    incident_id: str
):

    return await service.investigate(
        incident_id
    )