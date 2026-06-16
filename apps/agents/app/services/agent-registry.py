from agents.orchestrator.agent import (
    OrchestratorAgent
)

class AgentRegistry:

    @staticmethod
    def orchestrator():

        return OrchestratorAgent()