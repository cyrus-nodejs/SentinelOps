

from google import genai

from app.core.settings import settings


class RemediationAgent:

    def __init__(self):
        self.client = genai.Client(
            api_key=settings.GEMINI_API_KEY,
        )

    async def execute(
        self,
        findings: str,
    ):
        response = (
            self.client.models.generate_content(
                model="gemini-2.5-flash",
                contents=f"""
Create a remediation plan.

Findings:
{findings}

Return JSON actions.
""",
            )
        )

        return response.text