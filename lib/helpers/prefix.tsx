function prefix(type: (string | undefined)) {
  return (name?: (string | undefined)) => {
    return ["happy-ui", type, name].filter(Boolean).join("-")
  }
}

export default prefix