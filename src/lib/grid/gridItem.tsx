import React, { useMemo } from 'react'
import './grid.scss'
import prefix from '../helpers/prefix'
import BREAKPOINTS from './breakpoint'
import {
    GridJustify,
    GridDirection,
    GridAlignItems,
    GridAlignContent,
    GridContainerWrap
} from './gridTypes'

type GridBreakpointsValue = number | boolean

type ItemLayoutValue = {
    grow: number
    width: string
    basis: string
    display: string
}

interface Props {
    container?: boolean,
    gap?: number,
    wrap?: GridContainerWrap,
    xs?: GridBreakpointsValue
    sm?: GridBreakpointsValue
    md?: GridBreakpointsValue
    lg?: GridBreakpointsValue
    justify?: GridJustify
    direction?: GridDirection
    alignItems?: GridAlignItems
    alignContent?: GridAlignContent
    className?: string
}

const defaultProps = {
    container: false,
    gap: 0,
    wrap: "wrap",
    xs: false,
    sm: false,
    md: false,
    lg: false,
    className: '',
}

const gridPrefix = prefix("grid")

const getItemLayout = (val: GridBreakpointsValue | undefined): ItemLayoutValue => {
    const display = (val === 0) ? 'display: none;' : 'display: inherit;'
    if (typeof val === 'number') {
        const width = (100 / 24) * val
        const ratio = (width > 100) ? '100%' : (width < 0) ? '0' : `${width}%`
        return {
            grow: 0,
            display,
            width: ratio,
            basis: ratio,
        }
    }
    // boolean值的意义?
    return {
        grow: 1,
        display,
        width: '100%',
        basis: '0',
    }
}

const Grid: React.FunctionComponent<Props> = (props) => {
    const {
        container,
        xs,
        sm,
        md,
        lg,
        justify,
        direction,
        alignItems,
        alignContent,
        className,
        children,
        wrap,
        gap,
        ...otherProps
    } = props

    const classes = useMemo(() => {
        const aligns: { [key: string]: any } = {
            justify,
            direction,
            alignItems,
            alignContent,
            xs,
            sm,
            md,
            lg,
            container
        }
        const classObj = Object.keys(aligns).reduce((pre, name) => {
            if (aligns[name] !== undefined && aligns[name] !== false) {
                return Object.assign(pre, { [name]: true })
            }
            return pre
        }, {})
        return classObj
    }, [justify, direction, alignItems, alignContent, xs, sm, md, lg])

    const layout = useMemo(
        () => ({
            xs: getItemLayout(xs),
            sm: getItemLayout(sm),
            md: getItemLayout(md),
            lg: getItemLayout(lg)
        }),
        [xs, sm, md, lg],
    )

    console.log({ layout });

    const finalClassName = gridPrefix(classes, { extra: className })
    const classPrefix = "happy-ui-grid-"

    return container ?
        (<div className={finalClassName} {...otherProps}>
            {children}
            <style jsx>{`
                .${classPrefix}container {
                    display: flex;
                    flex-wrap: ${wrap};
                    box-sizing: "border-box";
                    {/* gap: ${gap}px; */}
                }
            `}
            </style>
        </div>) :
        (<div className={`${finalClassName} ${classPrefix}item`} {...otherProps}>
            {children}
            <style jsx>{`
                .${classPrefix}justify {
                    justify-content: ${justify};
                }

                .${classPrefix}direction {
                    flex-direction: ${direction};
                }

                .${classPrefix}alignContent {
                    align-content: ${alignContent};
                }

                .${classPrefix}alignItems {
                    align-items: ${alignItems};
                }

                .happy-ui-grid-xs {
                    flex-grow: ${layout.xs.grow};
                    max-width: ${layout.xs.width};
                    flex-basis: ${layout.xs.basis};
                    ${layout.xs.display}
                }

                @media screen and (max-width: ${BREAKPOINTS.xs.max}) {
                    .${classPrefix}xs {
                        flex-grow: ${layout.xs.grow};
                        max-width: ${layout.xs.width};
                        flex-basis: ${layout.xs.basis};
                        ${layout.xs.display}
                    }
                }

                @media screen and (min-width: ${BREAKPOINTS.sm.min}) {
                    .${classPrefix}sm {
                        flex-grow: ${layout.sm.grow};
                        max-width: ${layout.sm.width};
                        flex-basis: ${layout.sm.basis};
                        ${layout.sm.display}
                    }
                }

                @media screen and (min-width: ${BREAKPOINTS.md.min}) {
                    .${classPrefix}md {
                        flex-grow: ${layout.md.grow};
                        max-width: ${layout.md.width};
                        flex-basis: ${layout.md.basis};
                        ${layout.md.display}
                    }
                }

                @media screen and (min-width: ${BREAKPOINTS.lg.min}) {
                    .${classPrefix}lg {
                        flex-grow: ${layout.lg.grow};
                        max-width: ${layout.lg.width};
                        flex-basis: ${layout.lg.basis};
                        ${layout.lg.display}
                    }
                }
            `}</style>
        </div>)
}

Grid.defaultProps = defaultProps

export default Grid
