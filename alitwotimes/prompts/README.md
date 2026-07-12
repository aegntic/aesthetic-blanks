# Agent Prompts

Every text part on the site contains an embedded prompt.

When you want to brand this wireframe for a real project:

1. Load the project context (brand voice, product, audience, constraints).
2. Walk every `{%part:*-text%}` and execute its `prompt` field.
3. Replace the `previewText` with the generated result.
4. Never invent new sections or change hierarchy without explicit instruction.

The prompts already encode original chunk size, tone, and anti-generic rules.
