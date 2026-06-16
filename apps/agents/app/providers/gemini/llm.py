import os

from .client import client

MODEL = os.getenv(
    "GEMINI_MODEL",
    "gemini-2.5-flash"
)

class GeminiProvider:

    async def generate(
        self,
        prompt: str
    ) -> str:

        response = client.models.generate_content(
            model=MODEL,
            contents=prompt
        )

        return response.text