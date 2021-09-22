---
import: import Dialog from '../dialog.tsx'
---

[[toc]]

## Dialog 弹框

::: demo

弹框的描述

```tsx
// demo
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
