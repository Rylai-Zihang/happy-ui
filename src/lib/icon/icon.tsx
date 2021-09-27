import * as React from "react"
import "./icon.scss"
import "../helpers/importAll"
import prefix from "../helpers/prefix"

interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
    extra?: string
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    const { className, name, extra, ...restProps } = props
    return (
        <svg className={prefix('icon')("", { "extra": className })} {...restProps}>
            <use xlinkHref={`#${name}`}></use>
        </svg >)
}

export default Icon
