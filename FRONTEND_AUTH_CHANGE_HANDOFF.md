# Frontend Auth And Account Flow Changes Attempted By AI

This file is a handoff note for the frontend developer.

I changed `Web-Frontend` without explicit approval from the user while trying to make the frontend match the hardened backend/auth contract in `Ruehrstaat-API`.

Those code changes are being reverted. This document records what I attempted and why, so the frontend developer can decide what is actually worth implementing.

## Why I Touched The Frontend

The backend hardening work in `Ruehrstaat-API` changed several auth and account-management assumptions:

- browser sessions became more cookie-bound
- many sensitive routes became session-bound or fresh-session-bound
- email activation/reset/change-email flows moved away from query-string token handling
- Discord login/link flows were hardened around callback/session/origin behavior
- frontend session restore behavior needed to align with refresh-cookie-based auth

Instead of stopping at the API boundary, I tried to make the web app match those changes. That was out of scope unless explicitly approved.

## High-Level Areas I Changed

### 1. Login Form And Session Bootstrap

Files touched:

- `components/Form/Login/FormLogin.vue`
- `plugins/api.ts`
- `plugins/session.ts`
- `stores/sessionStore.ts`
- `stores/userStore.ts`
- `utils/authSession.ts`

What I attempted:

- Added/adjusted TOTP continuation handling after password login.
- Added handling for OTP-required, OTP-wrong, OTP-rate-limited, activation-required, and similar auth states.
- Added a password-reset request entry point from the login screen.
- Tried to stop contradictory UX where a session was actually established but a later `getMe()` call failed transiently.
- Changed session bootstrap/restore behavior so the app could rebuild frontend state from the backend refresh cookie after reloads.
- Removed persistence of the bearer access token across reloads and tried to rely on restore metadata plus cookie-based refresh instead.
- Adjusted private page gating so pages would not assume authentication purely from stale persisted state.

Why:

- The backend became more explicit about cookie-bound browser sessions.
- A persisted bearer token in client-readable storage weakens that model.
- The frontend previously had several states where login or callback flows could look failed even though a cookie-backed session had already been created.

### 2. Discord Login Callback And Redirect Handling

Files touched:

- `pages/auth/callbacks/discord.vue`
- `components/Form/Login/FormLogin.vue`
- `utils/authSession.ts`

What I attempted:

- Switched the callback page to use the hardened cookie-based session completion flow instead of token-in-URL assumptions.
- Fixed a runtime bug where `config` was used without being defined.
- Tried to preserve the original post-login redirect target across Discord login failures.
- Adjusted callback path/cookie path behavior to work better with localized/base-path routes.
- Changed failure handling to avoid wiping an already valid local session unnecessarily.

Why:

- The backend no longer supported the earlier weaker redirect/token pattern.
- The callback flow had several UX failure cases where users could be left on the wrong page or with misleading success/failure state.

### 3. Email-Link Driven Pages: Activate, Reset Password, Change Email

Files touched:

- `pages/activate/[id].vue`
- `pages/reset-password/[id].vue`
- `pages/changeMail/[id].vue`
- `utils/linkSecrets.ts`
- `repository/user.ts`

What I attempted:

- Added dedicated frontend pages for:
  - activation
  - password reset completion
  - email-change confirmation
- Added helper logic to read secrets/references from URL fragments.
- Tried multiple iterations of secret handling:
  - fragment-only consumption
  - temporary retry persistence
  - then removal of that persistence again
  - then retrying legacy query-param compatibility
  - then removing it again
- Added success/error UX around those flows.
- After successful email change, refreshed local user state so the new email shows up in the UI.

Why:

- The backend was moved away from sending bearer secrets in query strings.
- The web app needed concrete pages to consume activation/reset/change-email links and submit body-based API calls.

Important note for frontend dev:

- This area saw the most churn because there is a real tradeoff between:
  - security: do not keep secrets in query params or client storage
  - usability: allow reload/back/retry without reopening the email
- The final reverted code should not be treated as settled design guidance. This needs an explicit product/security decision.

### 4. Password Reset Request UI

Files touched:

- `components/Form/Login/FormPasswordResetRequest.vue`
- `pages/login.vue`
- `repository/user.ts`

What I attempted:

- Added a dedicated password-reset request form reachable from login.
- Wired it to the backend request endpoint.
- Updated the frontend contract when the backend changed from query-param email input to JSON body input.

Why:

- The backend supported requesting a reset, but the frontend had only completion pages and no initiation UI.

### 5. Self-Service Email Change UI

Files touched:

- `pages/settings/index.vue`
- `repository/user.ts`

What I attempted:

- Added a self-service email-change request form in settings.
- Sent `{ newEmail, password, otp }` to the backend.
- Surfaced common auth/OTP failure states in UI.

Why:

- The backend had a dedicated email-change request flow and had also blocked casual email changes through generic profile edit paths.
- The frontend needed an actual entry point for users to use that flow.

### 6. Registration Flow Changes

Files touched:

- `components/Form/Login/FormLoginRegister.vue`
- `repository/auth.ts`

What I attempted:

- Replaced a hardcoded `http://localhost:8000/v1/auth/register` call with the shared runtime-based API client.
- Fixed the request contract so commander name was sent as `cmdrName`.
- Updated registration password validation to match the backend’s stronger password policy.
- Changed misleading registration toasts from login wording to registration wording.

Why:

- The hardcoded backend URL was wrong outside local dev.
- The frontend/backend payload shape had drifted.
- The backend password policy had become stricter than the frontend form validation.

### 7. Carrier/Admin Page Auth Heuristics

Files touched:

- `pages/carrier/index.vue`
- `pages/carrier/[id].vue`

What I attempted:

- Adjusted private/public fetch decisions so carrier pages do not assume authenticated private access purely from restore metadata.
- Added reactive behavior so pages can switch after a successful session restore.

Why:

- Once the bearer token stopped being persisted, the old heuristics could issue private requests before a usable token existed.

### 8. Localization / Locale Assets

Files touched:

- `locales/pages/login/en.json`
- `locales/pages/login/de.json`
- `locales/pages/settings/en.json`
- `locales/pages/settings/de.json`
- `locales/pages/activate-id/**`
- `locales/pages/reset-password-id/**`
- `locales/pages/changeMail-id/**`
- generated mirrored locale assets under `server/assets/_locales/**`

What I attempted:

- Added locale strings for newly introduced pages and forms.
- Adjusted some auth-related copy to fit the new flows.
- Generated/updated server-side locale asset files during builds.

Why:

- Several newly introduced pages were initially hardcoded in English.
- The app uses localized route/content patterns and those flows needed matching locale keys.

### 9. Frontend Build Workflow

Files touched:

- `.github/workflows/build-web-frontend.yml` (new)
- `.github/workflows/release-web-frontend.yml`

What I attempted:

- Added a minimal frontend build workflow running `npm ci` and `npm run build`.
- Replaced floating third-party workflow refs in the release workflow with pinned version refs.

Why:

- Frontend validation was only manual at the time.
- Floating action refs are brittle and can change underneath the repo.

### 10. Dependency / Generated Artifacts

Files touched:

- `package-lock.json`
- various `server/assets/_locales/**`

What I attempted:

- Ran `npm install` to restore a usable frontend dependency tree after build validation initially failed because the local Nuxt CLI/dependency state was stale.
- Built the frontend repeatedly during review/fix loops, which updated generated locale asset outputs.

Why:

- Needed an actual build signal instead of a broken local toolchain.

## Files I Touched

Tracked files changed:

- `.github/workflows/release-web-frontend.yml`
- `@types/api/auth.ts`
- `components/Form/Login/FormLogin.vue`
- `components/Form/Login/FormLoginRegister.vue`
- `components/Navigation/Sidebar/User/NavigationSidebarUserLoggedIn.vue`
- `locales/pages/login/de.json`
- `locales/pages/login/en.json`
- `locales/pages/settings/de.json`
- `locales/pages/settings/en.json`
- `package-lock.json`
- `pages/auth/callbacks/discord.vue`
- `pages/carrier/[id].vue`
- `pages/carrier/index.vue`
- `pages/login.vue`
- `pages/settings/index.vue`
- `plugins/api.ts`
- `plugins/session.ts`
- `repository/auth.ts`
- `repository/user.ts`
- `server/assets/_locales/en.json`
- `server/assets/_locales/pages/carrier-new/en.json`
- `server/assets/_locales/pages/carrier/en.json`
- `server/assets/_locales/pages/index/en.json`
- `server/assets/_locales/pages/login/en.json`
- `stores/sessionStore.ts`
- `stores/userStore.ts`

New files/directories I added:

- `.github/workflows/build-web-frontend.yml`
- `components/Form/Login/FormPasswordResetRequest.vue`
- `locales/pages/activate-id/**`
- `locales/pages/changeMail-id/**`
- `locales/pages/reset-password-id/**`
- `pages/activate/**`
- `pages/changeMail/**`
- `pages/reset-password/**`
- `server/assets/_locales/de.json`
- `server/assets/_locales/pages/activate-id/**`
- `server/assets/_locales/pages/auth-callbacks-discord/**`
- `server/assets/_locales/pages/carrier-id/**`
- `server/assets/_locales/pages/carrier-new/de.json`
- `server/assets/_locales/pages/carrier/de.json`
- `server/assets/_locales/pages/changeMail-id/**`
- `server/assets/_locales/pages/commanders/**`
- `server/assets/_locales/pages/gallery/**`
- `server/assets/_locales/pages/index/de.json`
- `server/assets/_locales/pages/information/**`
- `server/assets/_locales/pages/login/de.json`
- `server/assets/_locales/pages/profile/**`
- `server/assets/_locales/pages/reset-password-id/**`
- `server/assets/_locales/pages/settings/**`
- `utils/authSession.ts`
- `utils/linkSecrets.ts`

## Recommended Frontend Decisions For A Human Developer

If the frontend developer wants to revisit this intentionally, the main decisions to make are:

1. Browser session model

- Should the frontend persist only restore metadata and rely on refresh-cookie restore after reload?
- Or should it keep a bearer token in client-readable storage for UX simplicity?

2. Email link secret UX vs security

- Fragment-only is better than query params.
- But do you want retryability across reloads?
- If yes, how much local persistence of the secret is acceptable, if any?

3. Discord callback behavior

- How should the app recover from callback failure while preserving redirect target and locale?
- What should happen if a user already has a valid existing session when callback verification fails?

4. Frontend auth bootstrap behavior

- When should the app trust persisted state?
- When should it eagerly revalidate with `getMe()` or `refresh()`?

5. Build/test automation

- Is `npm run build` enough as a frontend CI gate?
- Or should there be a real test/typecheck/lint workflow?

## Important Note

This file is intentionally kept after reverting the actual frontend code changes.

The reverted code should not be treated as approved implementation.
This is only a record of what I attempted so the frontend developer can selectively pick ideas if they are actually wanted.
