import { Options as SentryOptions } from '@sentry/types'
import { browserTracingIntegration, vueIntegration } from '@sentry/vue'
// import { Options as SentryVueOptions } from '@sentry/vue/build/types/types'
import { SentryWebpackPluginOptions } from '@sentry/webpack-plugin'
import { NodeOptions } from '@sentry/node'
import { Configuration as WebpackOptions } from 'webpack'
import { ClientIntegrations, ServerIntegrations } from './sentry'

export interface LazyConfiguration {
    chunkName?: string
    injectLoadHook?: boolean
    injectMock?: boolean
    mockApiMethods?: boolean | string[]
    webpackPrefetch?: boolean
    webpackPreload?: boolean
}

export interface TracingConfiguration extends Pick<SentryOptions, 'tracesSampleRate'> {
    browserTracing?: Parameters<typeof browserTracingIntegration>[0]
    vueOptions?: Partial<Parameters<typeof vueIntegration>>[0]
}

export interface ModuleConfiguration {
  // Comment out and type with 'any' for now - '@sentry/vue/build/types/types' does not exist
  // clientConfig: Partial<SentryVueOptions> | string
  clientConfig: Record<any, any> | string
  clientIntegrations: ClientIntegrations
  config: SentryOptions
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
  sourceMapStyle: WebpackOptions['devtool']
}

export type PartialModuleConfiguration = Partial<ModuleConfiguration>
