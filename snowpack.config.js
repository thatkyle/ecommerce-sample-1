/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  alias: {
    'react': 'preact/compat',
    'react-dom': 'preact/compat'
  },
  mount: {
    'src': '/'
  },
  'plugins': [
    [
      '@snowpack/plugin-webpack',
      {
        'sourceMap': true,
        'manifest': true,
      },
    ],
    "@prefresh/snowpack",
  ],
};
