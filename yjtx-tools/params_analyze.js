let argv
getArgv = function () {
  if (argv) {
    return argv
  }
  const arr = process.argv.slice(2)
  const args = []
  let i = 0; const li = arr.length
  for (; i < li; i++) {
    var itemi = arr[i]
    if (itemi.search(/-(\w*)/) == 0)
      break
    args.push(itemi)
  }

  const opts = {}
  let values4Opt = []
  let name = null
  for (; i < li; i++) {
    var itemi = arr[i]
    if (itemi.search(/-(\w*)/) == 0) {
      if (!name) {
        name = itemi
      }
      else {
        opts[name] = values4Opt
        name = itemi
        values4Opt = []
      }
    }
    else {
      values4Opt.push(itemi)
    }
  }

  if (name)
    opts[name] = values4Opt

  argv = {
    name: arr[0],
    currDir: process.cwd(),
    args,
    opts,
  }

  return argv
}

exports.getArgv = getArgv
