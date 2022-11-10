const baseConfig = require('@teambit/react/prettier/prettier.config')
module.exports = {
  ...baseConfig,
  singleQuote: true,
  semi: false,
  trailingComma: 'none'
}
