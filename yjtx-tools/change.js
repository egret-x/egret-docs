/**
 * 将TypeScript和EXML编译为JavaScript
 */
const path = require('node:path')
const file = require('./file.js')
const params = require('./params_analyze.js')

function run(opts) {
  const fileList = file.getDirectoryAllListing(path.join('../'))

  for (let i = 0; i < fileList.length; i++) {
    const name = fileList[i]
    if (name.includes('index.md')) {
      // file.copy(name, name.replace("index.md", "README.md"));
      // file.remove(name);
      console.log(name)
    }
  }
}

const option = params.getArgv()
run(option.opts)
