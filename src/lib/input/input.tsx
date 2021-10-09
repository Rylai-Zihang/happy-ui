import * as React from "react"
import { useState } from "react"
import "../helpers/importAll"
import prefix from "../helpers/prefix"
import { InputHTMLAttributes } from "react"
import { FormElementSize, scaleMap, fontSizeMap } from "../utils/sizeMaps"
import css from "styled-jsx/css"
import "./input.scss"

const inputPrefix = prefix('input')

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    className?: string,
    extra?: string;
    prefix?: string;
    suffix?: string;
    scale?: FormElementSize;
}

const defaultProps = {
    scale: "small" as FormElementSize
}

const Input: React.FunctionComponent<Props> = (props) => {
    const { className, scale, extra, ...restProps } = props
    const defaultScale = scale || "small"
    const heightRatio = scaleMap[defaultScale]
    const fontSizeRatio = fontSizeMap[defaultScale]
    const { className: resolveClassName, styles } = css.resolve`
        --happy-ui-input-height: calc(${heightRatio} * 16px);
        --happy-ui-input-size: calc(${fontSizeRatio} * 16px);
        height: var(--happy-ui-input-height);
        fontSize: var(--happy-ui-input-size);
    `
    const [hover, setHover] = useState(false)
    const onBlur = () => {
        setHover(false)
    }
    const onFocus = () => {
        setHover(true)
    }
    return (
        <div className={inputPrefix({ "": true }, { extra: className })}>
            <div className={inputPrefix('container', { extra: resolveClassName })}>
                <div className={inputPrefix({ "wrapper": true, "hover": hover })}>
                    <input {...restProps} onBlur={onBlur} onFocus={onFocus}></input>
                </div>
            </div>
            {styles}
        </div>
    )
}

Input.defaultProps = defaultProps
export default Input
