module.exports = function(api) {
  api.cache(true)

  const presets = [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: {
          browsers: 'last 2 Chrome versions',
        },
      },
    ],
    '@babel/preset-typescript',
  ]
  const plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
  ]

  return {
    presets,
    plugins,
  }
}
