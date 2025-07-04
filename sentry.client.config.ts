import { useRuntimeConfig } from "#imports";
import * as Sentry from "@sentry/nuxt";

Sentry.init({
  dsn: useRuntimeConfig().public.sentry.dsn,
  sampleRate: 1.0,
  integrations: [Sentry.browserTracingIntegration(), Sentry.replayIntegration(), Sentry.browserProfilingIntegration(), Sentry.browserApiErrorsIntegration()],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});
