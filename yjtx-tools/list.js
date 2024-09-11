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
  const array = []

  for (var i = 1; i <= 10; i++) {
    array.push({
      filename: `/Wing/update/update30${i}/`,
      text: `Egret Wing 3.0.${i}`,
      des: `Egret Wing 3.0.${i}`,
      in_use: true,
    })
  }

  for (var i = 0; i <= 6; i++) {
    array.push({
      filename: `/Wing/update/update31${i}/`,
      text: `Egret Wing 3.1.${i}`,
      des: `Egret Wing 3.1.${i}`,
      in_use: true,
    })
  }

  array.reverse()

  file.save('art.json', JSON.stringify(array, null, '  '))
}

const option = params.getArgv()
run(option.opts)
