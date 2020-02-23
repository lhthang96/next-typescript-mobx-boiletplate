const { antdRule, resourceRule, sassRule } = require('./rules.webpack');

module.exports = (origConfig, { isServer }) => {
  const config = { ...origConfig };

  config.module.rules.push(sassRule, resourceRule);

  if (isServer) {
    const externals = [...config.externals];

    config.externals = [
      (context, request, callback) => {
        if (request.match(antdRule.test)) return callback();

        if (typeof externals[0] === 'function') {
          externals[0](context, request, callback);
          return null;
        }

        return callback();
      },

      ...(typeof externals[0] === 'function' ? [] : externals),
    ];

    config.module.rules.push(antdRule);
  }

  return config;
}