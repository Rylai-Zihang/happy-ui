interface ClassToggles {
  [key: string]: boolean
}

interface Options {
  extra: string | undefined
}

function prefix(type: (string | undefined)) {
  return (name: (string | ClassToggles | undefined), options?: Options) => {
    if (typeof name === "string" || name === undefined) {
      return ["happy-ui", type, name].filter(Boolean).join("-")
    } else {
      const classes = Object.entries(name).filter(kv => kv[1]).map(kv => kv[0])
      return classes.map(name => {
        return ["happy-ui", type, name].filter(Boolean).join("-")
      }).concat(options && options.extra || []).join(" ")
    }
  }
}

export default prefix

function classes(...names: (string | undefined)[]) {
  return names.filter(v => v).join(" ")
}

export { classes }