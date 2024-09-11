/**
 * 将TypeScript和EXML编译为JavaScript
 */
const path = require('node:path')
const file = require('./file.js')
const params = require('./params_analyze.js')

const titleStr = ''

const linkArr = {}

const configNames = {
  DB: 'DragonBones Pro',
}

function run(opts) {
  const content = file.read(path.join('../Wing/update/111/111.md'))

  let start = content.indexOf('# Egret Wing')
  var last = 0
  while (last >= 0) {
    var last = content.indexOf('# Egret Wing', start + 1)

    if (last >= 0) {
      var value = content.substring(start, last)
    }
    else {
      var value = content.substring(start)
    }

    start = last

    let title = value.match(/# Egret Wing \d.\d.\d\d?/)[0]
    if (title) {
      title = title.replace('# Egret Wing ', '')
      title = title.replace(/\./g, '')

      value = value.replace(/# Egret Wing.*/, '')
      file.save(path.join(`../Wing/update/112/update${title}/README.md`), value)

      const icons = value.match(/\([^.)]+\.(png|jpg|gif)\)/g)
      if (icons) {
        for (let i = 0; i < icons.length; i++) {
          const mat = icons[i]
          console.log(title)
          console.log(mat)
          if (mat.match(/\(.*\.(png|jpg|gif)\)/)) {
            const name = icons[i].substring(1, icons[i].length - 1)

            file.copy(path.join(`../Wing/update/111/${name}`), path.join(`../Wing/update/112/update${title}/${name}`))
          }
        }
      }
    }
  }
}

const option = params.getArgv()
run(option.opts)
