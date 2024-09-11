const params = require('../core/params_analyze.js')
const file = require('../core/file.js')

function addQuotes(str) {
  return `"${str}"`
}

function getOption(type) {
  if (params.getArgv().opts[type]) {
    return params.getArgv().opts[type][0]
  }
  return null
}

function getExampleRootPath() {
  return getOption('-examples-path') || getOption('--examples')
}

function getOutputPath() {
  return getOption('--output')
}

function getSourcePath() {
  return getOption('--path')
}

function getLanguage() {
  return getOption('--language') || 'zh_cn'
}

function getType() {
  return getOption('--type') || null
}

function clone(frame) {
  let result
  if (Array.isArray(frame)) {
    result = []
  }
  else if (frame instanceof Object) {
    result = {}
  }
  else {
    return frame
  }

  for (const key in frame) {
    if (Array.isArray(frame[key])) {
      result[key] = clone(frame[key])
    }
    else if (frame[key] instanceof Object) { //
      result[key] = clone(frame[key])
    }
    else {
      result[key] = frame[key]
    }
  }
  return result
}

function getApiParserRoot() {
  return file.getDirectory(process.argv[1])
}

function getDependence() {
  const dependencePathStr = getOption(['--dependence'])
  if (dependencePathStr) {
    return dependencePathStr.split(',')
  }
  return []
}
exports.getDependence = getDependence

function isInDependence(filename) {
  const dependenceList = getDependence()

  if (filename) {
    for (let i = 0; i < dependenceList.length; i++) {
      const tempPath = file.escapePath(dependenceList[i])
      if (filename.includes(tempPath)) {
        return true
      }
    }
  }

  return false
}
exports.isInDependence = isInDependence

exports.clone = clone
exports.getApiParserRoot = getApiParserRoot

exports.getOption = getOption
exports.addQuotes = addQuotes
exports.getExampleRootPath = getExampleRootPath
exports.getOutputPath = getOutputPath
exports.getLanguage = getLanguage
exports.getSourcePath = getSourcePath
exports.getType = getType
