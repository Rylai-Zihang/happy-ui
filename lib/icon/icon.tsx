import * as React from "react"
import "./icon.scss"
import "./importAll.js"
import classes from "../helpers/classes"

interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    const { className, name, ...restProps } = props
    return (
        <svg className={classes('happyui-icon', className)} {...restProps}>
            <use xlinkHref={`#${name}`}></use>
        </svg >)
}

export default Icon
