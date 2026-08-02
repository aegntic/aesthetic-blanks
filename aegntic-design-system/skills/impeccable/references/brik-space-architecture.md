# Brik.space Architecture Reference

## Platform Overview
Brik.space is an **agentic design platform** for generative visual tools. Key concepts:

### Core Model: Tools vs Assets
- **Tools**: Reusable design systems (parameterized, controllable instruments)
- **Assets**: Single outputs produced from tools with specific parameter values
- This separation enables "create once, use forever" workflow

### Two Entry Points
1. **Generate a Tool**: Natural language prompt → AI generates complete Tool class + controllers
2. **Generate an Asset**: Browse gallery → use existing tool → tweak parameters → export

### Editor Architecture (Three Panels)
- **Left**: Chat console with Art Director + Creative Coder dual-agent system
- **Center**: Live canvas preview with size presets
- **Right**: Controller panel (sliders, toggles, dropdowns, color pickers, file uploads, buttons)

### Controller Types
`slider` | `toggle` | `dropdown` | `color` | `text` | `file` | `button` | `number`

### Export Formats (Production-Ready)
- **Image**: PNG/JPEG, 1-5x scale, transparent background option
- **Video**: MP4/WebM, configurable duration/FPS/quality
- **Code**: Self-contained HTML with baked-in values (paid)
- **Embed**: Iframe embed code for live tools (paid)

### Technical Stack
- Built on Base44 (backend) + React frontend
- Tools are TypeScript modules exporting a `Tool` class
- Canvas 2D or WebGL (GLSL shaders as template strings)
- IndexedDB for local persistence
- Ollama/LM Studio/OpenAI/Anthropic for LLM providers

## Brik Pro Implementation Patterns (Local-First Fork)

### Storage Layer (`src/lib/storage/index.ts`)
- IndexedDB via `idb` wrapper
- Stores: tools, projects, versions, chat history, settings, gallery
- Git-like versioning per tool (full code + controller snapshots)
- Project export/import as JSON bundles

### LLM Integration (`src/lib/llm/index.ts`)
- Multi-provider: Ollama, LM Studio, OpenAI, Anthropic, Custom
- System prompt encodes Tool class contract
- Streaming responses for iterative generation
- Controller extraction from code analysis (fallback)

### Tool Class Contract
```typescript
class Tool {
  constructor(canvas: HTMLCanvasElement, controllers: Controller[])
  async init(): Promise<void>
  render(timestamp: number): void
  resize(width: number, height: number): void
  destroy(): void
  updateController(id: string, value: unknown): void
}
```

### Key Differences from Brik.space
| Feature | Brik.space | Brik Pro |
|---------|------------|----------|
| Hosting | Cloud (Base44) | Local-first |
| Credits | Monthly limits | Unlimited (local LLM) |
| Versioning | Basic | Git-style per-tool |
| Export | Paid tiers | All free |
| LLM | Cloud only | Local + cloud |
| Data | Their servers | Your IndexedDB |

## Usage in Future Sessions
When building agentic creative platforms:
1. Start with Tool/Asset distinction
2. Design dual-agent prompt (Art Director + Creative Coder)
3. Controller system as first-class citizen
4. Local-first storage with versioning
5. Export as code/embed for portability