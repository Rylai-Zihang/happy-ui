import { tuple } from "../utils/propTypes";

const justify = tuple(
  'flex-start',
  'center',
  'flex-end',
  'space-between',
  'space-around',
  'space-evenly',
)

const alignContent = tuple(
  'stretch',
  'center',
  'flex-start',
  'flex-end',
  'space-between',
  'space-around',
)

const direction = tuple('row', 'row-reverse', 'column', 'column-reverse')

const wrap = tuple('nowrap', 'wrap', 'wrap-reverse')

const alignItems = tuple('flex-start', 'center', 'flex-end', 'stretch', 'baseline')

export type GridJustify = typeof justify[number]

export type GridAlignContent = typeof alignContent[number]

export type GridDirection = typeof direction[number]

export type GridContainerWrap = typeof wrap[number]

export type GridAlignItems = typeof alignItems[number]
