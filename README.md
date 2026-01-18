
## MondayAI

MondayAI is a **front-end prototype** that recreates a Monday.com-style board UI and a mock **AI Sidekick** panel (chat + “take action” flow).

It’s designed for teaching UI engineering patterns: component composition, state lifting, overlays/panels, and evolving a “smart assistant” UI from **mock logic** to a real API.

- **Design source**: [Figma file](https://www.figma.com/design/qDWYKD8OLHbBTBgVaZxCP7/MondayAI)
- **Important note**: There is **no backend** here. All data is **in-memory** inside React state.

## What students can do with this project

- **Read and understand a realistic UI**: a board layout (top bar, sidebar, board header, task table).
- **Practice state management**: tasks are stored in `App.tsx` and passed down via props.
- **Build complex components**: overlays, animated panels, and contentEditable input.
- **Turn a mock “AI” into real AI**: replace local heuristics with an API call (OpenAI, your server, etc.).
- **Add product features**: persistence, filtering, editing, keyboard shortcuts, accessibility improvements.

## Tech stack

- **Vite 6** + **React 18** + **TypeScript**
- **Tailwind CSS** (utility-first styling; a generated CSS bundle lives in `src/index.css`)
- **shadcn/ui** + **Radix UI** primitives (dialogs, tooltips, etc.)
- **motion** (`motion/react`) for animations
- **lucide-react** for icons

## Getting started

### Prerequisites

- **Node.js**: modern LTS recommended (18+ is a good baseline)
- **npm**: comes with Node

### Install

```bash
npm install
```

### Run the dev server

```bash
npm run dev
```

By default (per `vite.config.ts`) the dev server opens at:

- `http://localhost:3000/`

If port `3000` is busy, Vite will prompt or choose another port.

### Build

```bash
npm run build
```

Build output goes to the `build/` directory (see `vite.config.ts`).

## How the app works (high level)

### Main UI areas

- **Top bar**: `src/components/layout/TopBar.tsx`
- **Sidebar**: `src/components/layout/Sidebar.tsx`
- **Board header**: `src/components/board/BoardHeader.tsx`
  - Clicking **AI Sidekick** opens the Sidekick panel.
- **Task board**: `src/components/board/TaskBoard.tsx`
  - Renders two groups (this week / next week).
- **Task table**: `src/components/board/TaskGroup.tsx`
  - Shows tasks in a grid, plus a “+ Add item” input row.
- **Updates pane (right side)**: `src/components/board/UpdatesPane.tsx`
  - Opens when you click the update/comment icon on a task.

### Data model

The `Task` type is defined in `src/components/board/TaskGroup.tsx` and includes:

- `name`, `description`
- `status`, `priority`, `type`
- optional `updates[]` (rendered in the Updates Pane)

### App state + flows

The “source of truth” for tasks is in `src/App.tsx`:

- `group1Tasks` / `group2Tasks` are stored in React state.
- `handleAddTask(...)` appends a new task when you press Enter on “+ Add item”.
- `handleOpenUpdates(task)` opens the Updates Pane for that task.
- `handleAiAction(payload)` applies Sidekick “actions” to the board (add updates, change priority, copy to clipboard, etc.).

## AI Sidekick (mock implementation)

The Sidekick UI lives in `src/components/board/SidekickPanel.tsx`.

### What it does today

- Accepts a user message (contentEditable input)
- Uses simple keyword rules (`detectResponseType(...)`) to decide what the “AI” should do
- Shows a “Thinking…” animation, then a response card (agenda / progress / email / risks / checklist / help)
- If the user confirms (e.g. “yes”, “ok”, “do it”), it emits an `onAiAction` payload back to `App.tsx`

### Where to extend it

To add a new Sidekick capability:

- Add a new value to `ResponseType`
- Update:
  - `detectResponseType(...)`
  - `getResponseContent(...)`
  - `getFollowUpMessage(...)`
  - `getSuccessMessage(...)`
  - (optional) add a new card component
- Update `handleAiAction(...)` in `src/App.tsx` to actually apply the change to tasks

### Replacing mock AI with real AI (suggested upgrade)

Right now everything is local. A common next step is:

- Add a `/api/sidekick` endpoint (or call a hosted AI API)
- Replace the timer-based “thinking” flow with a real `fetch(...)`
- Return a structured payload like:
  - `type` (intent)
  - `content` (HTML/text to display)
  - `actions` (what to mutate in the board)

## Styling notes (important for students)

- This project uses Tailwind utility classes heavily in components.
- Theme tokens / CSS variables are defined in `src/styles/globals.css`.
- `src/index.css` contains a large generated Tailwind output (don’t hand-edit it unless you know why).

## Figma assets + attribution

This repo contains images exported from Figma under `src/assets/`.

Some components import them using virtual paths like `figma:asset/<hash>.png`. Those are resolved via aliases in `vite.config.ts`.

Attributions and licenses:

- See `src/Attributions.md` for `shadcn/ui` (MIT) and Unsplash photo attribution.

## Suggested student assignments

### Warm-up (UI + state)

- **Add a third task group** (e.g. “Later”) and render it in `TaskBoard`.
- **Add a new column** (Owner / Due date) to `TaskGroup` and update the `Task` type.
- **Make Status editable**: replace the status cell with a dropdown and update state.

### Intermediate

- **Persistence**: save tasks to `localStorage` and restore on load.
- **Filtering**: implement “show only Critical priority” or “Working on it” filter.
- **Keyboard UX**: Enter to add task, Esc to close panes, Cmd/Ctrl+K to focus Sidekick.

### Advanced

- **Real AI integration**: call a real API for Sidekick responses.
- **Streaming**: simulate token streaming in the Sidekick output.
- **Accessibility**: focus trapping for overlays, aria labels, keyboard navigation for the task grid.

## Troubleshooting

### The app doesn’t start

- Run `npm install` again and then `npm run dev`.
- Ensure your Node version is modern (Node 18+ recommended).

### Port already in use

- Change the port in `vite.config.ts` (`server.port`) or stop whatever is using `3000`.

### Microphone / speech-to-text doesn’t work

The Sidekick uses the browser’s SpeechRecognition API (`webkitSpeechRecognition` in many cases). It’s typically supported best in Chromium-based browsers.
  