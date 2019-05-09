const sass = require('node-sass')

sass.render({
  file: 'index.scss',
  importer: () => {},
},
  () => console.log('done')
)

console.log('exit')
process.exit()
