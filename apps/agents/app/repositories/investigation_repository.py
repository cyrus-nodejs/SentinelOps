from sqlalchemy import text

from db.session import (
    SessionLocal,
)
class InvestigationRepository:

    async def save(
        self,
        incident_id,
        report,
        root_cause,
    ):
        db = SessionLocal()

        db.execute(
            text("""
            INSERT INTO
            "Investigation"
            (
                id,
                summary,
                "rootCause",
                "incidentId"
            )
            VALUES
            (
                gen_random_uuid(),
                :summary,
                :rootCause,
                :incidentId
            )
            """),
            {
                "summary": report,
                "rootCause": root_cause,
                "incidentId":
                incident_id,
            },
        )

        db.commit()