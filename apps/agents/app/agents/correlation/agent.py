# agents/correlation/agent.py

from google import genai

from app.core.settings import settings


class CorrelationAgent:

    def __init__(self):
        self.client = genai.Client(
            api_key=settings.GEMINI_API_KEY,
        )

    async def execute(
        self,
        evidence: dict,
    ):
        response = self.client.models.generate_content(
            model="gemini-2.5-flash",
            contents=f"""
Analyze the incident evidence.

Determine:

1. Root cause
2. Attack chain
3. Severity
4. Confidence score

Evidence:

{evidence}
""",
        )

        return response.text