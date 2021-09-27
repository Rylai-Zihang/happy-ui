interface ClassToggles {
  [key: string]: boolean
}

interface Options {
  extra: string | undefined
}

const UINAME = "happy-ui"

function prefix(type: (string | undefined)) {
  return (name: (string | ClassToggles), options?: Options) => {
    const nameObject = name instanceof Object ?
      name :
      { [name]: name }

    const result = Object.entries(nameObject)
      .filter(kv => kv[1] !== false)
      .map(kv => kv[0])
      .map(name => {
        return [UINAME, type, name].filter(Boolean).join("-")
      }).concat(options && options.extra || []).join(" ")

    return result
  }
}

export default prefix

function classes(...names: (string | undefined)[]) {
  return names.filter(v => v).join(" ")
}

export { classes }