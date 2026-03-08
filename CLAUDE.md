# ranran-frontend

Turborepo + pnpm monorepo for the Ranran frontend. Vue 3 + Vite as default framework.

## Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Dev all apps |
| `pnpm build` | Build all apps + packages |
| `pnpm type-check` | Type-check all |
| `pnpm lint` | Lint all |
| `pnpm dev:wishes` | Dev apps/wishes only |
| `pnpm build:wishes` | Build apps/wishes only |

## Structure

```
apps/        # deployable apps (Vue 3 + Vite)
packages/
  shared/    # axios clients, types, auth service, utils
```

## Railway Deploy Pattern

Each app is deployed as a **Static Site** on Railway:
- Build command: `pnpm build:<app>` (e.g. `pnpm build:wishes`)
- Output directory: `apps/<app>/dist` (e.g. `apps/wishes/dist`)
- No start command — Railway serves static files via CDN

Adding a new app: scaffold in `apps/`, set `name: @ranran/<name>`, add `dev:<name>` / `build:<name>` to root `package.json`.

## Auth (`@ranran/shared`)

`authService` covers login / register / refresh / me against the Auth service (`VITE_AUTH_URL`).
Token stored in localStorage. The main API client (`VITE_API_URL`) auto-attaches Bearer token and
retries on 401 via `authService.refresh()`. Concurrent 401s queue behind one refresh.

## Env Vars (apps/wishes/.env)

```
VITE_API_URL=http://localhost:8083/api/ranran   # ranran-backend
VITE_AUTH_URL=http://localhost:8082/api/auth    # auth service
```

## Conventions

- Vue 3 `<script setup>` + Composition API
- Follow user design choices — don't add features not asked for
- PR titles: `feat:`, `fix:`, `chore:` prefix
