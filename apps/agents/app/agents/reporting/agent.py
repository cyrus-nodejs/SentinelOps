

from google import genai

from app.core.settings import settings


class ReportAgent:

    def __init__(self):
        self.client = genai.Client(
            api_key=settings.GEMINI_API_KEY,
        )

    async def execute(
        self,
        evidence,
        findings,
    ):
        response = (
            self.client.models.generate_content(
                model="gemini-2.5-flash",
                contents=f"""
Create an executive investigation report.

Evidence:
{evidence}

Findings:
{findings}
""",
            )
        )

        return response.text