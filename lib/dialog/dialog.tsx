import Icon from "../icon/icon";
import React, { Fragment, MouseEventHandler, ReactFragment, ReactNode } from "react";
import "./dialog.scss"
import prefix from "../helpers/prefix"
import ReactDOM from "react-dom";

interface Props {
  visible: boolean,
  onOK?: MouseEventHandler|null,
  onClose: MouseEventHandler,
  title?: String,
  footer?: Array<React.ReactElement>|null,
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

  let buttons:Array<React.ReactElement> = []
  // 不传或者传[]，都使用默认值
  if(props.footer?.length === 0) {
    buttons = [
      <button onClick={onClickOK}>{props.okText}</button>,
      <button onClick={props.onClose}>{props.cancelText}</button>
    ]
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
          {buttons && buttons.length > 0 &&
              <footer className={dialogPrefix('footer')}>
                {buttons && buttons.map((button, index) =>
                  React.cloneElement(button, {key: index})
                )}
              </footer>
          }
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
  maskClosable: true,
  okText: "确定",
  cancelText: "取消",
  footer: []
}

const type = function(content, footer?, confirm?: () => void, cancel?: () => void, ) {
  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false}), div)
    // 卸载div中的组件
    ReactDOM.unmountComponentAtNode(div)
    // 删除div
    div.remove()
  }
  const onConfirm = () => {
    onClose()
    confirm && confirm()
  }
  const onCancel = () => {
    onClose()
    cancel && cancel()
  }
  const component = (
  <Dialog visible={true} footer={footer} onOK={(confirm? onConfirm : null)} onClose={onCancel}>
    {content}
  </Dialog>)
  const div = document.createElement("div")
  document.body.append(div)
  ReactDOM.render(component, div)
  return onClose
}

const alert = (content: string) => {
  type(content, null)
}

const confirm = (content: string, confirm?: () => void, cancel?: () => void) => {
  // todo
  type(content, [], confirm, cancel)
}

const modal = (content: ReactNode|ReactFragment) => {
  return type(content)
}


export { alert, confirm, modal }

export default  Dialog