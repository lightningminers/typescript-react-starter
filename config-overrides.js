module.exports = function override(config, env) {
  // do stuff with the webpack config...
  require('react-app-rewire-postcss')(config, {
    plugins: loader => [
      require('postcss-px-to-viewport')({
        viewportWidth: 750,
        unitPrecision: 3,
        viewportUnit: 'vw',
        minPixelValue: 1,
        mediaQuery: false,
        selectorBlackList: ['.ignore']
      })
    ],
  })
  return config;
};