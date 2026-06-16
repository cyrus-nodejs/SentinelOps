from .tools.alerts import AlertsTool
from .tools.search_logs import SearchLogsTool
from .tools.hosts import HostsTool
from .tools.dashboards import DashboardTool

TOOL_REGISTRY = {
    "alerts.list": AlertsTool(),
    "search.logs": SearchLogsTool(),
    "hosts.list": HostsTool(),
    "dashboards.get": DashboardTool(),
}


async def list_tools():
    return list(TOOL_REGISTRY.keys())