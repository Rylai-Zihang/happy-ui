---
import log from './log.js'
---

[[toc]]

## 测试

::: demo

描述

```tsx
console.log(log('演示'))
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
```
