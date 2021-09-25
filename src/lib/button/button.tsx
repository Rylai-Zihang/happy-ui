import React from 'react'
import prefix from '../helpers/prefix'
import Icon from '../icon/icon'
import './button.scss'

export interface Props {
    disabled?: boolean
    loading?: boolean
    ghost?: boolean
    icon?: string
    backgroundColor?: string
    color?: string
    className?: string
    type?: 'default' | 'text' | 'primary' | 'success' | 'warning' | 'danger'
    iconDirection?: 'left' | 'right'
    size?: 'small' | 'middle' | 'large'
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
        // backgroundColor,
        // color,
        className,
        iconDirection,
        type,
        size,
        onClick
    } = props

    const finalIcon = loading ? 'loading' : (icon ? icon : '')
    const finalIconElement = finalIcon ? <Icon className="happy-ui-button-icon" name={finalIcon}></Icon> : ""
    const sizeClass = (size || "middle")
    const typeClass = (type || "primary")

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
                [sizeClass]: true,
                [typeClass]: true,
                [typeClass + "-ghost"]: ghost || false,
            }, { extra: className })}
            disabled={disabled || loading}
            onClick={onClick}>
            {
                content
            }
        </button>
    )
}


Button.defaultProps = {
    disabled: false,
    loading: false,
    ghost: false,
    backgroundColor: "#a09fdd",
    color: "#fff",
    type: "default",
    iconDirection: "left",
    size: "middle"
}

export default Button