const path = require('path')
const { readdirSync } = require('fs')

module.exports = function (moduleOptions) {
  const filename = 'nacelle-loox-plugin.js'
  const options = {
    ...this.options.nacelle,
    ...moduleOptions
  }

  const domain = options.shopifyDomain && options.shopifyDomain.split('.').shift()

  // Add Loox script
  this.options.head.script.push({
    src: `https://loox.io/widget/loox.js?shop=${domain}.myshopify.com`,
    defer: true,
    mode: 'client',
    body: true,
    type: 'text/javascript',
    charset: 'utf-8'
  })

  // Copy components
  const componentsDir = path.resolve(__dirname, 'components')

  for (const file of readdirSync(componentsDir)) {
    this.addTemplate({
      src: path.resolve(__dirname, './components', file),
      fileName: path.join('nacelle', 'integrations', file)
    })
  }

  // Add plugin to nuxt
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    fileName: filename,
    options
  })
}

module.exports.meta = require('../package.json')
