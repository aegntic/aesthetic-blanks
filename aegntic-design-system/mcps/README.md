# MCP Servers for Aegntic Design System

Two MCP servers support the full design pipeline:

## 1. Figma MCP (required for `figma-implement-design`)

The `figma-implement-design` skill requires a Figma MCP server to fetch design context.

### Option A: Figma Desktop MCP (recommended)
Install the Figma Desktop app with the MCP plugin. No server config needed — it uses the currently open file.

### Option B: Remote Figma MCP
Add to `~/.hermes/config.yaml`:
```yaml
mcp:
  servers:
    figma:
      command: npx
      args: ['-y', 'figma-mcp-server', '--figma-api-key', 'YOUR_FIGMA_TOKEN']
      env:
        FIGMA_API_KEY: YOUR_FIGMA_TOKEN
```
Get token from Figma → Settings → Personal access tokens.

## 2. Odysseus MCP (optional, for vault/RAG pipeline)

Already configured at `/home/ae/AE/03_Vault/odysseus`. Provides:
- `memory_server` — persistent memory
- `vault_indexer_server` — Obsidian vault search
- `rag_server` — retrieval-augmented generation
- `image_gen_server` — image generation
- `hermes_cron_server` — scheduled jobs

Config (already in `~/.hermes/config.yaml`):
```yaml
mcp:
  servers:
    odysseus-hermes:
      command: /home/ae/AE/03_Vault/odysseus/.venv/bin/python
      args: ['-m', 'mcp_servers.hermes_server_wrapper']
      working_dir: /home/ae/AE/03_Vault/odysseus
      env:
        ODYSSEUS_CWD: /home/ae/AE/03_Vault/odysseus
      enabled: true
```

## Verification

```bash
# Check figma MCP is reachable
hermes mcp list

# Or test via Claude/Codex
figma_desktop_get_screenshot # if using desktop MCP
```
