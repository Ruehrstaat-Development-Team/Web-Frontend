import * as Sentry from "@sentry/nuxt";
import dotenv from "dotenv";

dotenv.config();

// Only run `init` when process.env.SENTRY_DSN is available.
if (process.env.SENTRY_DSN) {
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    environment: process.env.NODE_ENV,
    sampleRate: 1.0,
  });
}
