import { IntegrationFn } from '@sentry/types'
import {
  breadcrumbsIntegration,
  browserApiErrorsIntegration,
  globalHandlersIntegration,
  httpContextIntegration,
  replayIntegration,
} from '@sentry/browser'
import {
  functionToStringIntegration,
  inboundFiltersIntegration,
  linkedErrorsIntegration,
  requestDataIntegration,
} from '@sentry/core'
import {
  captureConsoleIntegration,
  contextLinesIntegration as vueContextLinesIntegration,
  debugIntegration,
  dedupeIntegration,
  extraErrorDataIntegration,
  httpClientIntegration,
  reportingObserverIntegration,
  rewriteFramesIntegration,
  sessionTimingIntegration,
} from '@sentry/vue'
import {
  anrIntegration,
  consoleIntegration,
  contextLinesIntegration,
  expressIntegration,
  graphqlIntegration,
  hapiIntegration,
  httpIntegration,
  localVariablesIntegration,
  modulesIntegration,
  mongoIntegration,
  mysqlIntegration,
  nativeNodeFetchIntegration,
  nodeContextIntegration,
  onUncaughtExceptionIntegration,
  onUnhandledRejectionIntegration,
  postgresIntegration,
  prismaIntegration,
  spotlightIntegration,
} from '@sentry/node'

type IntegrationConfig<T extends IntegrationFn> = Parameters<T>[0] | Record<string, never> | false

export type BrowserIntegrations = {
    Breadcrumbs?: IntegrationConfig<typeof breadcrumbsIntegration>
    GlobalHandlers?: IntegrationConfig<typeof globalHandlersIntegration>
    HttpContext?: IntegrationConfig<typeof httpContextIntegration>
    Replay?: IntegrationConfig<typeof replayIntegration>
    TryCatch?: IntegrationConfig<typeof browserApiErrorsIntegration>
    CaptureConsole?: IntegrationConfig<typeof captureConsoleIntegration>
    ContextLines?: IntegrationConfig<typeof vueContextLinesIntegration>
    Debug?: IntegrationConfig<typeof debugIntegration>
    Dedupe?: IntegrationConfig<typeof dedupeIntegration>
    ExtraErrorData?: IntegrationConfig<typeof extraErrorDataIntegration>
    HttpClient?: IntegrationConfig<typeof httpClientIntegration>
    ReportingObserver?: IntegrationConfig<typeof reportingObserverIntegration>
    RewriteFrames?: IntegrationConfig<typeof rewriteFramesIntegration>
    SessionTiming?: IntegrationConfig<typeof sessionTimingIntegration>
}

export type CoreIntegrations = {
    FunctionToString?: IntegrationConfig<typeof functionToStringIntegration>
    InboundFilters?: IntegrationConfig<typeof inboundFiltersIntegration>
    LinkedErrors?: IntegrationConfig<typeof linkedErrorsIntegration>
    RequestData?: IntegrationConfig<typeof requestDataIntegration>
}

export type NodeProfilingIntegrations = {
    ProfilingIntegration?: IntegrationConfig<IntegrationFn> // Dummy type since we don't want to depend on `@sentry/profiling-node`
}

export type NodeIntegrations = {
    Anr?: IntegrationConfig<typeof anrIntegration>
    // Apollo?: IntegrationConfig<typeof Integrations.Apollo>
    Console?: IntegrationConfig<typeof consoleIntegration>
    Context?: IntegrationConfig<typeof nodeContextIntegration>
    ContextLines?: IntegrationConfig<typeof contextLinesIntegration>
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

export type ClientCoreIntegrations = Pick<CoreIntegrations, 'FunctionToString' | 'InboundFilters' | 'LinkedErrors'>
export type ClientIntegrations = ClientCoreIntegrations & BrowserIntegrations

export type ServerCoreIntegrations = CoreIntegrations
export type ServerIntegrations = ServerCoreIntegrations & NodeProfilingIntegrations & NodeIntegrations

export type AllIntegrations = ClientIntegrations & ServerIntegrations
