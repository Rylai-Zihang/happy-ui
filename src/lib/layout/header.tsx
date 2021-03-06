import prefix from "../helpers/prefix";
import React, { HtmlHTMLAttributes } from "react";

interface Props extends HtmlHTMLAttributes<HTMLElement> {
}

const layoutPrefix = prefix("layout")

const Header: React.FunctionComponent<Props> = (props) => {
    const { className, ...otherProps } = props
    return (
        <div className={layoutPrefix("header", { extra: className })} {...otherProps}>
            {props.children}
        </div>
    )
}

export default Header