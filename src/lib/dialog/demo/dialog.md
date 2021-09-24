---
import: import Dialog, { alert, confirm, modal } from "../dialog"; import { useState } from "react";
declare: const [visible, setVisible] = useState(false);
  const openModal = () => {
  const closeModal = modal(<div><h1>modal</h1><button onClick={() => closeModal()}>关闭</button></div>)}
---

[[toc]]

## Dialog 弹框

::: demo

普通弹框

```tsx
<div>
  <Dialog
    visible={visible}
    onClose={() => {
      setVisible(false)
    }}
  >
    我是一个dialog
  </Dialog>
  <div>
    <button
      onClick={() => {
        alert('1')
      }}
    >
      测试提醒功能
    </button>
  </div>
</div>
```

:::

## confirm

::: demo

有 confirm 功能的弹框

```tsx
<div>
  <button
    onClick={() => {
      confirm(
        '你要吃饭吗',
        () => {
          console.log('吃')
        },
        () => {
          console.log('不吃')
        }
      )
    }}
  >
    测试confirm功能
  </button>
</div>
```

:::

## 模态框

::: demo

模态框

```tsx
<div>
  <button onClick={openModal}>test modal</button>
</div>
```

:::

## API

```ts
interface Props {
  visible: boolean
  onOK?: MouseEventHandler | null
  onClose: MouseEventHandler
  title?: String
  footer?: Array<React.ReactElement> | null
  okText?: String
  cancelText?: String
  maskClosable?: boolean
}

Dialog.defaultProps = {
  title: '标题',
  maskClosable: true,
  okText: '确定',
  cancelText: '取消',
  footer: []
}
```
