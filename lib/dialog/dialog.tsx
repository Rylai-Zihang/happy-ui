import Icon from "../icon/icon";
import React, { Fragment } from "react";
import "./dialog.scss"
import prefix from "../helpers/prefix"

interface Props {
  visible: boolean
}

const dialogPrefix = prefix("dialog")

const Dialog: React.FunctionComponent<Props> = (props) => {
  return (
    props.visible ?
      <Fragment>
        <div className={dialogPrefix("mask")}></div>
        <div className={dialogPrefix()}>
          <div className="happy-ui-dialog-close">
            <Icon name="close"/>
          </div>
          <header className={dialogPrefix("header")}></header>
          <main className={dialogPrefix("main")}>{props.children}</main>
          <footer className={dialogPrefix("footer")}>
            <button>ok</button>
            <button>cancel</button>
          </footer>
        </div>
      </Fragment> :
      null
  )
}

export default  Dialog