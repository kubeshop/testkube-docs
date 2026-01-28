# Enable/Activate AI Assistant

This section explains how to enable or activate the AI Assistant feature for both Cloud and On-Prem installations of Testkube.

:::info
The Testkube AI Assistant is _always_ disabled by default for new Organizations.
:::

## How to Enable AI Assistant

The AI Assistant feature must be enabled by the **Owner** of the organization or an **Admin**.

Enable AI Assistant in one of two ways:

1. **Via the Initial AI Assistant Prompt:**  
   When you first access the AI Assistant, an initial prompt is displayed with action buttons that allow you to either enable the feature or keep it disabled.

2. **Through Organization Settings:**  
   Navigate to the **Product Features** tab in your organization settings and toggle the AI Assistant feature on.

Once enabled, AI Assistant will integrate with your Testkube Dashboard, ready to assist you and your team with your testing needs.

## Default LLM and Model

The default LLM used by the AI Assistant is OpenAIs [GPT-5.2-Codex](https://openai.com/index/introducing-gpt-5-2-codex/).

For On-Prem-installations you can configure your own OpenAI API Key or separate LLM/model as described in the 
[On-Prem Installation](/articles/ai-assistant-on-prem-install) instructions.

For Cloud-installations the default LLM and model can not be changed.
