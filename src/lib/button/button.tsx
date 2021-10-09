import React, { ButtonHTMLAttributes } from 'react'
import css from 'styled-jsx/css'
import prefix from '../helpers/prefix'
import Icon from '../icon/icon'
import { FormElementSize, fontSizeMap, scaleMap, paddingMap } from '../utils/sizeMaps'
import './button.scss'

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    disabled?: boolean
    loading?: boolean
    ghost?: boolean
    icon?: string
    backgroundColor?: string
    color?: string
    className?: string
    category?: 'default' | 'text' | 'primary' | 'success' | 'warning' | 'danger'
    iconDirection?: 'left' | 'right'
    scale?: FormElementSize;
    onClick?: () => void
    children?: React.ReactNode
}

const buttonPrefix = prefix("button")

const Button: React.FunctionComponent<Props> = (props) => {
    const {
        ghost,
        disabled,
        loading,
        children,
        icon,
        backgroundColor,
        className,
        iconDirection,
        category,
        scale,
        onClick,
        ...restProps
    } = props

    const finalIcon = loading ? 'loading' : (icon ? icon : '')
    const finalIconElement = finalIcon ? <Icon className="happy-ui-button-icon" name={finalIcon}></Icon> : ""
    const defaultScale = scale || "small"
    const categoryClass = category || "primary"

    const heightRatio = scaleMap[defaultScale]
    const fontSizeRatio = fontSizeMap[defaultScale]
    const paddingRatio = paddingMap[defaultScale]
    const { className: resolveClassName, styles } = css.resolve`
        --happy-ui-button-height: calc(${heightRatio} * 16px);
        --happy-ui-button-size: calc(${fontSizeRatio} * 16px);
        --happy-ui-button-padding: calc(${paddingRatio} * 16px);
        height: var(--happy-ui-button-height);
        font-size: var(--happy-ui-button-size);
        padding: 0 var(--happy-ui-button-padding);
        border-radius: calc(${fontSizeRatio} * 6px);
        background-color: calc(${backgroundColor});
    `

    const content = (iconDirection === 'left') ? (
        <div className="happy-ui-button-container">
            {finalIconElement}
            {children}
        </div>
    ) : (
        <div>
            {children}
            {finalIconElement}
        </div>
    )

    return (
        <button
            className={buttonPrefix({
                "": true,
                "loading": loading || false,
                "disabled": disabled || false,
                [categoryClass]: true,
                [categoryClass + "-ghost"]: ghost || false,
            }, { extra: `${className} ${resolveClassName}` })}
            disabled={disabled || loading}
            onClick={onClick}
            {...restProps}>
            {
                content
            }
            {styles}
        </button>
    )
}


Button.defaultProps = {
    disabled: false,
    loading: false,
    ghost: false,
    backgroundColor: "#a09fdd",
    color: "#fff",
    category: "default",
    iconDirection: "left",
    scale: "small" as FormElementSize
}

export default Button