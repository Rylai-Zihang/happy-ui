import { tuple } from "./propTypes";

const size = tuple('mini', 'small', 'medium', 'large')

type SizeMap = {
    [k in FormElementSize]: number
}
export type FormElementSize = typeof size[number]

const scaleMap: SizeMap = {
    "mini": 1.6,
    "small": 1.875,
    "medium": 2.25,
    "large": 2.625
}

const fontSizeMap: SizeMap = {
    "mini": 2 / 3,
    "small": 4 / 5,
    "medium": 1,
    "large": 6 / 5
}

const paddingMap: SizeMap = {
    "mini": 2 / 3,
    "small": 4 / 5,
    "medium": 1,
    "large": 6 / 5
}

export { scaleMap, fontSizeMap, paddingMap }