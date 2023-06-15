import webpack, { type RuleSetRule } from 'webpack'
import { type BuildPaths } from '../build/types/config'
import path from 'path'
import { buildCssLoaders } from '../build/loaders/buildCssLoaders'

export default ({ config }: { config: webpack.Configuration }): typeof config => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  }
  config.resolve?.modules?.push(paths.src)
  config.resolve?.extensions?.push('.ts', '.tsx')
  // @ts-expect-error sdfdf
  config.module!.rules = config.module!.rules!.map((rule: RuleSetRule) => {
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    if (rule.test?.toString().includes('svg')) {
      return { ...rule, exclude: /\.svg$/i }
    }

    return rule
  })

  config.module?.rules?.push({
    test: /\.svg$/,
    use: ['@svgr/webpack']
  })
  config.plugins?.push(new webpack.DefinePlugin({
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify(''),
    __PROJECT__: JSON.stringify('storybook')
  }))
  config.module?.rules?.push(buildCssLoaders(true))
  return config
}
