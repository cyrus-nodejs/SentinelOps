from fastapi import FastAPI

from app.api.routes import router
from app.api.investigations import (
    router as investigations_router,
)

app = FastAPI(
    title="SentinelOps Agents"
)

app.include_router(router)
app.include_router(
    investigations_router,
    prefix="/api",
    tags=["investigations"],
)