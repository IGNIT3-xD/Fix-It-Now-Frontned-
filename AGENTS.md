# AGENTS.md

Frontend for the "Fix It Now" home-services marketplace. Next.js 16 (App Router) + React 19 + TypeScript (strict) + Tailwind v4 + shadcn/ui. No tests exist in this repo.

## Commands

- `npm run dev` — dev server
- `npm run build` — production build (runs type checking; use this to validate TS)
- `npm run lint` — `eslint` only; no typechecking
- `npx tsc --noEmit` — standalone typecheck (tsconfig already sets `noEmit`)
- There is no test runner or test setup — do not invent one.

## Env & config

- `.env` is gitignored and required locally. It must define: `BACKEND_API`, `JWT_ACCESS`, `JWT_REFRESH`. Only the key names matter; nothing else is loaded.
- Backend is remote (README: https://fix-it-now-silk.vercel.app/). Server actions fetch `${process.env.BACKEND_API}/api/...` directly — there is no local backend and no proxy/rewrite config in `next.config.ts`.
- Deployed to Vercel as project `fix-it-now-live` (https://fix-it-now-live.vercel.app/).
- Tailwind v4 is CSS-first: no `tailwind.config.*`. Theme tokens and dark mode (`@custom-variant dark (&:is(.dark *))`) live in `app/globals.css`. shadcn style is `radix-nova`; aliases map `@/*` → repo root, `@/components/ui` for shadcn components.

## Auth (critical, non-obvious)

- `proxy.ts` at the repo root is Next 16's replacement for `middleware.ts` (the file is named `proxy.ts`, not `middleware.ts`). It is the auth gate.
- Auth = JWT in httpOnly cookies `accessToken` (24h) and `refreshToken` (7d), set by server actions in `app/auth/_actions/auth.action.ts`.
- Both `proxy.ts` and dashboard server actions verify the JWT **in the frontend** with `jsonwebtoken` using `process.env.JWT_ACCESS` to read the `role` claim. Changing JWT_ACCESS or the backend's signing key breaks auth silently.
- Server actions forward auth to the backend by copying the cookie: `headers: { Cookie: \`accessToken=${accessToken}\` }`.
- Route guards: `/auth/*` redirect to `/` when logged in; `(public)` pages are open; everything else requires a valid token and `/dashboard/{customer,technician,admin}` additionally require the matching `role` claim. Add new protected routes here, not in page components.
- `cookies()` is async in Next 16 — always `await cookies()`.

## Structure & conventions

- Route groups: `app/(public)` (home, `/services`, `/contact-us`) and `app/(private)` (`/dashboard/*`). Auth pages live in `app/auth`.
- Folders prefixed `_` (e.g. `app/(private)/dashboard/_actions`, `_components`, `_config`, `app/(public)/services/_actions`) are non-routable and hold per-feature server actions and UI.
- Data flow: server actions (`"use server"`) verify JWT + role, call the backend, `revalidatePath()` after mutations, and return the backend's envelope `{ success: boolean, message: string, data }` (typed as `PrevState` in `lib/types.ts`). Client components consume this via `useActionState`/form actions.
- Public pages call server actions directly (e.g. home page calls `popularServicesAction`).
- `lib/types.ts` types are loose by design (`any` liberally, `eslint-disable` at top) — match that style; do not over-engineer shared types.
- Fonts are loaded in `app/layout.tsx` via `next/font/google` (Inter, Geist, Raleway, Manrope) into CSS vars (`--font-sans`, `--font-raleway`, `--font-manrope`).

## Gotchas

- `next.config.ts` allows `images.remotePatterns` for any host, so `next/image` can point at any URL — don't "fix" this.
- Mutating server actions use React 19 `useActionState` with the `PrevState` signature `(prevState, formData)` — keep that contract.
- README.md only holds links (live site, backend API, Postman docs) — not a setup guide.
