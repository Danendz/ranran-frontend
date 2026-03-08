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
| `pnpm start:wishes` | Serve apps/wishes dist (Railway) |

## Structure

```
apps/        # deployable apps (Vue 3 + Vite)
packages/
  shared/    # axios clients, types, auth service, utils
```

## Railway Deploy Pattern

- Build command: `pnpm build:<app>` (e.g. `pnpm build:wishes`)
- Start command: `pnpm start:<app>` (e.g. `pnpm start:wishes`)
- Uses `serve --single --listen $PORT dist` — SPA-safe, production-grade static server
- `railway.json` in each app configures build command, start command, and watch patterns

Adding a new app: scaffold in `apps/`, set `name: @ranran/<name>`, add `dev:<name>` / `build:<name>` / `start:<name>` to root `package.json`.

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
