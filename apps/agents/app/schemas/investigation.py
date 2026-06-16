from pydantic import BaseModel

class InvestigationRequest(BaseModel):
    incident_id: str

class InvestigationResponse(BaseModel):
    summary: str
    root_cause: str
    confidence: float