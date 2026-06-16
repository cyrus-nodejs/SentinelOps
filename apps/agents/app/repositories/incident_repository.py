from sqlalchemy import text

from db.session import (
    SessionLocal,
)

class IncidentRepository:

    async def get_incident(
        self,
        incident_id: str,
    ):
        db = SessionLocal()

        result = db.execute(
            text("""
                SELECT *
                FROM "Incident"
                WHERE id = :id
            """),
            {
                "id": incident_id
            },
        )

        return result.first()