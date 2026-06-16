

from pydantic import BaseModel


class InvestigationResult(BaseModel):
    investigation_id: str

    summary: str

    root_cause: str

    confidence: float

    evidence: list

    remediation_plan: list