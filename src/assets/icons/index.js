const files = require.context('.', false, /\.svg$/)
const modules = {}
files.keys().forEach((key) => {
  if (key === './index.js') return
  const data = files(key)
  data.symbol = data.symbol.replace(/^[^#]*/g, '')
  data.view = data.view.replace(/^[^#]*/g, '')

  modules[key.replace(/(\.\/|\.svg)/g, '')] = data
})

export default modules
