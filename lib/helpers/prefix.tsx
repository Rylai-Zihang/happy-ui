interface ClassToggles {
  [key: string]: boolean
}

function prefix(type: (string | undefined)) {
  return (name: (string | ClassToggles | undefined)) => {
    if (typeof name === "string" || name === undefined) {
      return ["happy-ui", type, name].filter(Boolean).join("-")
    } else {
      const classes = Object.entries(name).filter(kv => kv[1]).map(kv => kv[0])
      return classes.map(name => {
        console.log({ type, name })
        return ["happy-ui", type, name].filter(Boolean).join("-")
      }).join(" ")
    }
  }
}

export default prefix