import { classes } from "../prefix"
import prefix from "../prefix"

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
})

describe('prefix', () => {
  it('接受字符串或对象', () => {
    expect(prefix('layout')('')).toEqual('happy-ui-layout')
    expect(prefix('layout')('x')).toEqual('happy-ui-layout-x')
    expect(prefix('layout')({ 'x': true, 'y': false })).toEqual('happy-ui-layout-x')
    expect(prefix('layout')({ 'x': true, 'y': true })).toEqual('happy-ui-layout-x happy-ui-layout-y')
    expect(prefix('layout')({ 'x': true, 'y': true }, { extra: 'active' })).toEqual('happy-ui-layout-x happy-ui-layout-y active')
  })
})
