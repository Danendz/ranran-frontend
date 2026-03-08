# ranran-frontend

Turborepo + pnpm monorepo for the Ranran frontend.

## Requirements

- Node.js 20+
- pnpm 10+

## Setup

```bash
pnpm install
```

Copy env file for each app:

```bash
cp apps/wishes/.env.example apps/wishes/.env
```

## Running

| Command | Description |
|---------|-------------|
| `pnpm dev` | Dev all apps |
| `pnpm dev:wishes` | Dev wishes app only |
| `pnpm build` | Build all apps |
| `pnpm build:wishes` | Build wishes app only |
| `pnpm type-check` | Type-check all |
| `pnpm lint` | Lint all |

## Structure

```
apps/
  wishes/       # Vue 3 + Vite + TypeScript + Tailwind
packages/
  shared/       # Axios API client, auth service, shared types
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_API_URL` | Ranran backend base URL (e.g. `http://localhost:8083/api/ranran`) |
| `VITE_AUTH_URL` | Auth service base URL (e.g. `http://localhost:8082/api/auth`) |

## Deployment (Railway)

Each app is deployed as a **Static Site** on Railway:

- Build command: `pnpm build:<app>` (e.g. `pnpm build:wishes`)
- Output directory: `apps/<app>/dist` (e.g. `apps/wishes/dist`)
- No start command needed — Railway serves the static files via CDN
