import React, { HtmlHTMLAttributes, ReactElement } from "react";
import prefix from "../helpers/prefix"
import Header from './header'
import Content from "./content";
import Aside from "./aside";
import Footer from "./footer";
import "./layout.scss"

interface Props extends HtmlHTMLAttributes<HTMLElement> {
    children: ReactElement | Array<ReactElement>
}

const layoutPrefix = prefix("layout")

const Layout: React.FunctionComponent<Props> = (props) => {
    const { className, ...otherProps } = props
    // 使用reduce函数式
    const children = (props.children as Array<ReactElement>)
    // 不使用children.length: 可能会使hasAside变为0
    const hasAside = ("length" in children) &&
        children.reduce((result, node) => {
            return (node.type === Aside) || result
        }, false)

    const finalClassName = layoutPrefix({ "": true, "has-aside": hasAside }, { extra: className })
    return (
        <div className={finalClassName} {...otherProps}>
            {props.children}
        </div>
    )
}

export default Layout

export {
    Layout,
    Header,
    Aside,
    Content,
    Footer
}