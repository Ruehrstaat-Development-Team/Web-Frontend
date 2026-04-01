import * as Sentry from "@sentry/vue";


async function lazyLoadSentryIntegrations(){
    if(!process.client) return;
    const { Replay } = await import("@sentry/vue");
    Sentry.addIntegration(new Replay({
        maskAllText: false,
        maskAllInputs: true,
        blockAllMedia: false
    }));
}

function getSentryIntegrations(){
    if(!process.client) return [];

    const router = useRouter();
    const browserTracing = new Sentry.BrowserTracing({
        routingInstrumentation: Sentry.vueRouterInstrumentation(router),
        tracingOrigins: ["*"]
    })
    return [browserTracing];
}

export default defineNuxtPlugin({
    name: 'sentry',
    parallel: true,
    async setup(nuxtApp){
        const vueApp = nuxtApp.vueApp;
        const config = useRuntimeConfig();
        Sentry.init({
          app: vueApp,
          dsn: config.public.SENTRY_DSN_PUBLIC as string ?? undefined,
          integrations: getSentryIntegrations(),
          tracesSampleRate: config.public.SENTRY_TRACES_SAMPLE_RATE as number,
          replaysSessionSampleRate: config.public.SENTRY_REPLAY_SAMPLE_RATE as number,
          replaysOnErrorSampleRate: config.public.SENTRY_ERROR_REPLAY_SAMPLE_RATE as number,
          release: config.public.APP_VERSION as string ?? undefined,
          environment: config.public.APP_ENVIRONMENT as string ?? undefined,
          enabled: config.public.APP_ENVIRONMENT != "development",
        });

        lazyLoadSentryIntegrations();
    }
})