import prefix from "../helpers/prefix";
import React, { HtmlHTMLAttributes } from "react";

type NewType = HtmlHTMLAttributes<HTMLElement>;

interface Props extends NewType {
}

const layoutPrefix = prefix("layout")

const Aside: React.FunctionComponent<Props> = (props) => {
    const { className, ...otherProps } = props
    return (
        <div className={layoutPrefix("aside", { extra: className })} {...otherProps}>
            {props.children}
        </div>
    )
}

export default Aside