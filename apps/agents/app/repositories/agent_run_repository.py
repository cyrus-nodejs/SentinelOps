class AgentRunRepository:

    async def create(
        self,
        agent,
        output,
    ):
        db = SessionLocal()

        db.execute(
            text("""
            INSERT INTO
            "AgentRun"
            (
                id,
                "agentName",
                status,
                output
            )
            VALUES
            (
                gen_random_uuid(),
                :agent,
                'SUCCESS',
                :output
            )
            """),
            {
                "agent": agent,
                "output":
                json.dumps(output),
            },
        )

        db.commit()