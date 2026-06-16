

from app.agents.investigation.agent import (
    InvestigationAgent,
)

from app.agents.correlation.agent import (
    CorrelationAgent,
)

from app.agents.report.agent import (
    ReportAgent,
)

from app.agents.remediation.agent import (
    RemediationAgent,
)

from app.agents.models.investigation_result import (
    InvestigationResult,
)


class OrchestratorAgent:

    def __init__(self):
        self.investigation = (
            InvestigationAgent()
        )

        self.correlation = (
            CorrelationAgent()
        )

        self.report = (
            ReportAgent()
        )

        self.remediation = (
            RemediationAgent()
        )

    async def execute(
        self,
        investigation_id: str,
        incident_id: str,
    ):
        evidence = (
            await self.investigation.execute(
                incident_id
            )
        )

        findings = (
            await self.correlation.execute(
                evidence
            )
        )

        report = (
            await self.report.execute(
                evidence,
                findings,
            )
        )

        remediation = (
            await self.remediation.execute(
                findings
            )
        )

        return InvestigationResult(
            investigation_id=
            investigation_id,

            summary=report,

            root_cause=findings,

            confidence=92,

            evidence=evidence,

            remediation_plan=
            remediation,
        )