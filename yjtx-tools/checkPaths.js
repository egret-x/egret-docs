/**
 * 将TypeScript和EXML编译为JavaScript
 */
const path = require('node:path')
const file = require('./file.js')
const params = require('./params_analyze.js')

let titleStr = ''

const linkArr = {}

const configNames = {
  DB: 'DragonBones Pro',
}

function run(opts) {
  titleStr += '# 目录' + '\n\n'

  const titlesInfo = JSON.parse(file.read(path.join('../config/index.json')))

  const titleList = []
  for (var i = 0; i < titlesInfo.length; i++) {
    for (let j = 0; j < titlesInfo[i].children.length; j++) {
      const title = titlesInfo[i].children[j]
      if (title.in_use == 'true') {
        titleList.push({ name: title.des, url: title.filename })
      }
    }
  }

  for (var i = 0; i < titleList.length; i++) {
    const fileName = titleList[i].name
    titleStr += `## ${fileName}\n\n`

    // console.log(titleList[i]['url'])
    ans(JSON.parse(file.read(path.join('../config/', titleList[i].url))), [fileName])
  }
}

function ans(configList, parentList) {
  for (let i = 0; i < configList.length; i++) {
    const config = configList[i]

    if (config.in_use == false) {
      continue
    }

    if (config.children) {
      titleStr += '##'
      for (let ii = 0; ii < parentList.length; ii++) {
        titleStr += '##'
      }
      titleStr += ` ${config.text}\n\n`

      ans(config.children, parentList.concat(config.text))
    }
    else {
      const url = `${config.filename.substring(1)}README.md`

      titleStr += `* [${config.text}](${url})\n\n`
      const filep = `${path.join(`../${config.filename.substring(1)}`)}README.md`
      const fileContent = file.read(filep)

      // console.log(filep)
      if (!file.exists(filep)) {
        console.log(filep)
      }
    }
  }
}

function addLink(link, parentList, mdName, mdUrl) {
  let arr = linkArr
  for (let i = 0; i < parentList.length; i++) {
    if (arr[parentList[i]] == null) {
      arr[parentList[i]] = {}
    }
    arr = arr[parentList[i]]
  }

  if (arr[mdName] == null) {
    arr[mdName] = { url: mdUrl, list: [] }
  }

  arr[mdName].list.push(link)
}

const option = params.getArgv()
run(option.opts)
