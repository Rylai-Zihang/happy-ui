import Icon from "../icon/icon";
import React, { Fragment } from "react";
import "./dialog.scss"
import prefix from "../helpers/prefix"
import ReactDOM from "react-dom";

interface Props {
  visible: boolean,
  onOK?: React.MouseEventHandler | null,
  onClose: React.MouseEventHandler,
  title?: String,
  footer?: React.ReactNode | null,
  okText?: String
  cancelText?: String,
  maskClosable?: boolean
}

const dialogPrefix = prefix("dialog")

const Dialog: React.FunctionComponent<Props> = (props) => {
  const onClickMask = (e) => {
    if(props.maskClosable) {
      props.onClose(e)
    }
  }
  const onClickOK = (e) => {
    if(props.onOK) {
      props.onOK(e)
    } else {
      props.onClose(e)
    }
  }

  const returnElement = (
    props.visible ?
      <Fragment>
        <div className={dialogPrefix("mask")} onClick={onClickMask}></div>
        <div className={dialogPrefix()}>
          <div className="happy-ui-dialog-close">
            <Icon name="close" onClick={props.onClose}/>
          </div>
          <header className={dialogPrefix("header")}>
            {props.title}
          </header>
          <main className={dialogPrefix("main")}>{props.children}</main>
          <footer className={dialogPrefix("footer")}>
            {props.footer?
              props.footer:
              (
                <Fragment>
                  <button onClick={onClickOK}>{props.okText}</button>
                  <button onClick={props.onClose}>{props.cancelText}</button>
                </Fragment>
              )
            }
          </footer>
        </div>
      </Fragment> :
      null
  )

  // portal: 将子节点渲染到父组件外的DOM节点
  // 为了解决父元素zIndex小 导致dialog被遮住的问题
  return ReactDOM.createPortal(returnElement, document.body)
}

Dialog.defaultProps = {
  title: "标题",
  onOK: null,
  maskClosable: true,
  okText: "确定",
  cancelText: "取消",
  footer: null
}

export default  Dialog