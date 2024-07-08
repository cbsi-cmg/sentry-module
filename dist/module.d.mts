import { IntegrationFn, Options } from '@sentry/types';
import { captureConsoleIntegration, contextLinesIntegration, debugIntegration, dedupeIntegration, extraErrorDataIntegration, httpClientIntegration, reportingObserverIntegration, rewriteFramesIntegration, sessionTimingIntegration, browserTracingIntegration, vueIntegration } from '@sentry/vue';
import { SentryWebpackPluginOptions } from '@sentry/webpack-plugin';
import * as SentryNode from '@sentry/node';
import { anrIntegration, consoleIntegration, nodeContextIntegration, contextLinesIntegration as contextLinesIntegration$1, expressIntegration, graphqlIntegration, hapiIntegration, httpIntegration, localVariablesIntegration, modulesIntegration, mongoIntegration, mysqlIntegration, onUncaughtExceptionIntegration, onUnhandledRejectionIntegration, postgresIntegration, prismaIntegration, spotlightIntegration, nativeNodeFetchIntegration, NodeOptions } from '@sentry/node';
import { Configuration } from 'webpack';
import { breadcrumbsIntegration, globalHandlersIntegration, httpContextIntegration, replayIntegration, browserApiErrorsIntegration } from '@sentry/browser';
import * as SentryTypes from '@sentry/core';
import { functionToStringIntegration, inboundFiltersIntegration, linkedErrorsIntegration, requestDataIntegration } from '@sentry/core';

type IntegrationConfig<T extends IntegrationFn> = Parameters<T>[0] | Record<string, never> | false

type BrowserIntegrations = {
    Breadcrumbs?: IntegrationConfig<typeof breadcrumbsIntegration>
    GlobalHandlers?: IntegrationConfig<typeof globalHandlersIntegration>
    HttpContext?: IntegrationConfig<typeof httpContextIntegration>
    Replay?: IntegrationConfig<typeof replayIntegration>
    TryCatch?: IntegrationConfig<typeof browserApiErrorsIntegration>
    CaptureConsole?: IntegrationConfig<typeof captureConsoleIntegration>
    ContextLines?: IntegrationConfig<typeof contextLinesIntegration>
    Debug?: IntegrationConfig<typeof debugIntegration>
    Dedupe?: IntegrationConfig<typeof dedupeIntegration>
    ExtraErrorData?: IntegrationConfig<typeof extraErrorDataIntegration>
    HttpClient?: IntegrationConfig<typeof httpClientIntegration>
    ReportingObserver?: IntegrationConfig<typeof reportingObserverIntegration>
    RewriteFrames?: IntegrationConfig<typeof rewriteFramesIntegration>
    SessionTiming?: IntegrationConfig<typeof sessionTimingIntegration>
}

type CoreIntegrations = {
    FunctionToString?: IntegrationConfig<typeof functionToStringIntegration>
    InboundFilters?: IntegrationConfig<typeof inboundFiltersIntegration>
    LinkedErrors?: IntegrationConfig<typeof linkedErrorsIntegration>
    RequestData?: IntegrationConfig<typeof requestDataIntegration>
}

type NodeProfilingIntegrations = {
    ProfilingIntegration?: IntegrationConfig<IntegrationFn> // Dummy type since we don't want to depend on `@sentry/profiling-node`
}

type NodeIntegrations = {
    Anr?: IntegrationConfig<typeof anrIntegration>
    Console?: IntegrationConfig<typeof consoleIntegration>
    Context?: IntegrationConfig<typeof nodeContextIntegration>
    ContextLines?: IntegrationConfig<typeof contextLinesIntegration$1>
    Express?: IntegrationConfig<typeof expressIntegration>
    GraphQL?: IntegrationConfig<typeof graphqlIntegration>
    Hapi?: IntegrationConfig<typeof hapiIntegration>
    Http?: IntegrationConfig<typeof httpIntegration>
    LocalVariables?: IntegrationConfig<typeof localVariablesIntegration>
    Modules?: IntegrationConfig<typeof modulesIntegration>
    Mongo?: IntegrationConfig<typeof mongoIntegration>
    Mysql?: IntegrationConfig<typeof mysqlIntegration>
    OnUncaughtException?: IntegrationConfig<typeof onUncaughtExceptionIntegration>
    OnUnhandledRejection?: IntegrationConfig<typeof onUnhandledRejectionIntegration>
    Postgres?: IntegrationConfig<typeof postgresIntegration>
    Prisma?: IntegrationConfig<typeof prismaIntegration>
    Spotlight?: IntegrationConfig<typeof spotlightIntegration>
    Undici?: IntegrationConfig<typeof nativeNodeFetchIntegration>
    CaptureConsole?: IntegrationConfig<typeof captureConsoleIntegration>
    Debug?: IntegrationConfig<typeof debugIntegration>
    Dedupe?: IntegrationConfig<typeof dedupeIntegration>
    ExtraErrorData?: IntegrationConfig<typeof extraErrorDataIntegration>
    HttpClient?: IntegrationConfig<typeof httpClientIntegration>
    ReportingObserver?: IntegrationConfig<typeof reportingObserverIntegration>
    RewriteFrames?: IntegrationConfig<typeof rewriteFramesIntegration>
    SessionTiming?: IntegrationConfig<typeof sessionTimingIntegration>
}

type ClientCoreIntegrations = Pick<CoreIntegrations, 'FunctionToString' | 'InboundFilters' | 'LinkedErrors'>
type ClientIntegrations = ClientCoreIntegrations & BrowserIntegrations

type ServerCoreIntegrations = CoreIntegrations
type ServerIntegrations = ServerCoreIntegrations & NodeProfilingIntegrations & NodeIntegrations

interface LazyConfiguration {
    chunkName?: string
    injectLoadHook?: boolean
    injectMock?: boolean
    mockApiMethods?: boolean | string[]
    webpackPrefetch?: boolean
    webpackPreload?: boolean
}

interface TracingConfiguration extends Pick<Options, 'tracesSampleRate'> {
    browserTracing?: Parameters<typeof browserTracingIntegration>[0]
    vueOptions?: Partial<Parameters<typeof vueIntegration>>[0]
}

interface ModuleConfiguration {
  // Comment out and type with 'any' for now - '@sentry/vue/build/types/types' does not exist
  // clientConfig: Partial<SentryVueOptions> | string
  clientConfig: Record<any, any> | string
  clientIntegrations: ClientIntegrations
  config: Options
  customClientIntegrations: string
  customServerIntegrations: string
  disableClientRelease: boolean
  disableClientSide: boolean
  disabled: boolean
  disableServerRelease: boolean
  disableServerSide: boolean
  dsn: string
  tracing: boolean | TracingConfiguration
  initialize: boolean
  lazy: boolean | LazyConfiguration
  logMockCalls: boolean
  /** See available options at https://docs.sentry.io/platforms/node/sourcemaps/uploading/webpack/ */
  publishRelease: boolean | SentryWebpackPluginOptions
  runtimeConfigKey: string
  serverConfig: NodeOptions | string
  serverIntegrations: ServerIntegrations
  sourceMapStyle: Configuration['devtool']
}

type PartialModuleConfiguration = Partial<ModuleConfiguration>

type ModulePublicRuntimeConfig = Pick<PartialModuleConfiguration, 'config' | 'clientConfig' | 'serverConfig'>

type Sentry = typeof SentryTypes
type NodeSentry = typeof SentryNode

// add type to Vue context
declare module 'vue/types/vue' {
  interface Vue {
    readonly $sentry: Sentry
    $sentryLoad(): Promise<void>
    $sentryReady(): Promise<Sentry>
  }
}

// App Context and NuxtAppOptions
declare module '@nuxt/types' {
  interface Context {
    readonly $sentry: Sentry
    $sentryLoad(): Promise<void>
    $sentryReady(): Promise<Sentry>
  }

  interface NuxtOptions {
    sentry?: PartialModuleConfiguration
  }

  interface NuxtAppOptions {
    readonly $sentry: Sentry
    $sentryLoad(): Promise<void>
    $sentryReady(): Promise<Sentry>
  }
}

declare module '@nuxt/types/config/runtime' {
  interface NuxtRuntimeConfig {
    sentry?: ModulePublicRuntimeConfig
  }
}

// add types for Vuex Store
declare module 'vuex/types' {
  interface Store<S> {
    readonly $sentry: Sentry
    $sentryLoad(): Promise<void>
    $sentryReady(): Promise<Sentry>
  }
}

declare global {
  namespace NodeJS {
    interface Process {
      sentry: NodeSentry
    }
  }
}

type ModuleOptions = PartialModuleConfiguration

declare const _default: unknown;

export { type ModuleOptions, type ModulePublicRuntimeConfig, _default as default };
