class ModelRouter:

    def route(
        self,
        task_type,
    ):

        if task_type == "summary":
            return SplunkHostedModel()

        return GeminiProvider()