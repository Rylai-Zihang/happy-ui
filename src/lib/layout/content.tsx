import prefix from "../helpers/prefix";
import React, { HtmlHTMLAttributes } from "react";

interface Props extends HtmlHTMLAttributes<HTMLElement> {
}

const layoutPrefix = prefix("layout")

const Content: React.FunctionComponent<Props> = (props) => {
    const { className, ...otherProps } = props
    return (
        <div className={layoutPrefix("content", { extra: className })} {...otherProps}>
            {props.children}
        </div>
    )
}

export default Content