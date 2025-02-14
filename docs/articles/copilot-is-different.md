# How Copilot Is Different from Other Chatbots

Testkube Copilot is more than just a chatbot or a general-purpose LLM.  
Its design and integration with the Testkube ecosystem set it apart:

## Deep Integration with Testkube

- **Contextual Awareness:**  
  Copilot continuously enriches its context based on the current page you’re viewing on the Testkube Dashboard.

- **Direct Control Plane Interaction:**  
  It can retrieve real-time information directly from the Testkube Control Plane, ensuring that the data and recommendations are up to date.

## Specialized Agent Architecture

Copilot is powered by a suite of specialized agents that work both independently and collaboratively:

- **Logs Analysis Agent:**  
  Fetches and analyzes logs from test executions.
- **Execution Analysis Agent:**  
  Reviews YAML definitions and execution details to help debug issues.

- **Documentation Agent:**  
  Provides answers and references based on the Testkube documentation.

- **YAML Configuration Agent:**  
  Assists in writing and troubleshooting YAML configurations for Testkube resources.

- **Navigation Agent:**  
  Knows the structure of the Testkube Dashboard and generates markdown links to navigate directly to various pages.

## Collaborative Operation

These agents can work on their own for quick tasks or in tandem for more complex queries—leveraging each other as callable tools to deliver comprehensive answers.

## Future Enhancements

- **Actionable Commands:**  
  In upcoming releases, Copilot will be able to perform actions directly from the chat interface, further streamlining your workflow.

This tight integration and specialized functionality provide a tailored experience that generic chatbots or LLMs cannot match.
