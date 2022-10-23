const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@components": "./src/Components",
    "@utils": "./src/Utils",
    "@routes": "./src/Routes",
    "@assets":"./src/Assets"
  })(config);

  return config;
};
