```yaml showLineNumbers title="Basic Ragas Workflow"
kind: TestWorkflow
apiVersion: testworkflows.testkube.io/v1
metadata:
  name: ragas-getting-started
  namespace: testkube
  labels:
    type: ai
spec:
  content:
    files:
      - path: /data/ragas_eval.py
        content: |
          import os
          from ragas import EvaluationDataset, SingleTurnSample, evaluate
          from ragas.metrics import Faithfulness, ResponseRelevancy
          from ragas.llms import LangchainLLMWrapper
          from ragas.embeddings import LangchainEmbeddingsWrapper
          from langchain_openai import ChatOpenAI, OpenAIEmbeddings

          llm = LangchainLLMWrapper(ChatOpenAI(model="gpt-4o-mini", temperature=0))
          emb = LangchainEmbeddingsWrapper(OpenAIEmbeddings(model="text-embedding-3-small"))

          samples = [
              SingleTurnSample(
                  user_input="Who wrote Hamlet?",
                  response="Hamlet was written by William Shakespeare.",
                  retrieved_contexts=["Shakespeare wrote the play Hamlet around 1600."],
                  reference="William Shakespeare",
              ),
              SingleTurnSample(
                  user_input="What is the capital of Sweden?",
                  response="The capital of Sweden is Stockholm.",
                  retrieved_contexts=["Stockholm is the capital and largest city of Sweden."],
                  reference="Stockholm",
              ),
          ]

          dataset = EvaluationDataset(samples=samples)
          result = evaluate(
              dataset=dataset,
              metrics=[Faithfulness(), ResponseRelevancy()],
              llm=llm,
              embeddings=emb,
          )
          print(result)

          os.makedirs("results", exist_ok=True)
          result.to_pandas().to_json("results/ragas_results.json", orient="records", indent=2)
          print("Wrote results/ragas_results.json")
  container:
    workingDir: /data
    image: python:3.12-slim
    env:
      - name: HOME
        value: /data
      - name: RAGAS_DO_NOT_TRACK
        value: "true"
      - name: OPENAI_API_KEY
        value: '{{credential("OPENAI_API_KEY")}}'
    resources:
      requests:
        cpu: "1"
        memory: 2Gi
  steps:
    - name: Install and run Ragas
      shell: |
        set -e
        pip install --no-cache-dir "ragas>=0.2,<0.3" "langchain-openai>=0.2,<0.3" "langchain<0.4" "langchain-community<0.4" "langchain-core<0.4"
        python ragas_eval.py
    - name: Save results
      condition: always
      artifacts:
        paths:
          - results/*.json
```
