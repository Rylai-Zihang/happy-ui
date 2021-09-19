import * as React from "react"
import "./icon.scss"
import "./importAll.js"
import prefix from "../helpers/prefix"

interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    const { className, name, ...restProps } = props
    return (
        <svg className={prefix('icon')(className)} {...restProps}>
            <use xlinkHref={`#${name}`}></use>
        </svg >)
}

export default Icon
