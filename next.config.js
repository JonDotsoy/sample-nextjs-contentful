const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');

module.exports = withTypescript(
  withSass({
    publicRuntimeConfig: {
      contentful: {
        space: '6ryxe22eim9l',
        accessToken: '7d92a7a0582c2d5a46f6a47e53172c5b22710147e07a340076898c4009e96421',
        environment: 'master',
      }
    },
    webpack(config, options) {
      // Further custom configuration here
      return config;
    },
  }),
);