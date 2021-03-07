/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  alias: {
    "react": "preact/compat",
    "react-dom": "preact/compat"
  },
  mount: {
    "src": "/"
  },
};
