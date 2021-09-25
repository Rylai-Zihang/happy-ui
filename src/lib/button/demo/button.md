---
import: import Button from "../button"
---

[[toc]]

## Button 按钮

<br/>

::: demo

这个是按钮的描述

```tsx
    <Button>默认按钮</Button>
    <Button type="primary">主要按钮</Button>
    <Button type="warning">主要按钮</Button>
    <Button type="danger">主要按钮</Button>
```

:::

## Disabled 禁用

::: demo

这个是按钮的描述

```tsx
<Button disabled>默认按钮</Button>
<Button type="primary" disabled>主要按钮</Button>
<Button type="warning" disabled>主要按钮</Button>
<Button type="danger" disabled>主要按钮</Button>
```

:::

## Loading 加载

::: demo

这个是按钮的描述

```tsx
<Button loading>默认按钮</Button>
<Button type="primary" loading>主要按钮</Button>
<Button type="warning" loading>主要按钮</Button>
<Button type="danger" loading>主要按钮</Button>
```

:::

## API

```ts
export interface Props {
  disabled?: boolean
  loading?: boolean
  ghost?: boolean
  icon?: string
  backgroundColor?: string
  color?: string
  className?: string
  type?: 'default' | 'text' | 'primary' | 'success' | 'warning' | 'danger'
  iconDirection?: 'left' | 'right'
  size?: 'small' | 'middle' | 'large'
  onClick?: () => void
  children?: React.ReactNode
}
```
