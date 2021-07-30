import classes from "../classes"

describe('classes', () => {
  it('接受一个参数', () => {
    const result = classes("a")
    expect(result).toEqual("a")
  })
  it('接受两个参数', () => {
    const result = classes("a", "b")
    expect(result).toEqual("a b")
  })
  it('接受三个参数', () => {
    const result = classes("a", "b", "c")
    expect(result).toEqual("a b c")
  })
  it('接受有undefined的参数', () => {
    const result = classes("a", undefined, "c")
    expect(result).toEqual("a c")
  })
  it('接受falsy参数', () => {
    const result = classes("a", "", null, "c")
    expect(result).toEqual("a c")
  })
})
