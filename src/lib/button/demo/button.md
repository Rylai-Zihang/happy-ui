---
import: import Button from "../button"; import Grid from "../../grid/gridItem";
---

[[toc]]

## Button 按钮

<br/>

::: demo

这个是按钮的描述

```tsx
<Grid container gap={10} style={{ width: '500px' }}>
  <Grid xs={6}>
    <Button>默认按钮</Button>
  </Grid>
  <Grid xs={6}>
    <Button category="primary">主要按钮</Button>
  </Grid>
  <Grid xs={6}>
    <Button category="warning">主要按钮</Button>
  </Grid>
  <Grid xs={6}>
    <Button category="danger">主要按钮</Button>
  </Grid>
</Grid>
```

:::

## Disabled 禁用

::: demo

这个是按钮的描述

```tsx
<Grid container gap={10} style={{ width: '500px' }}>
  <Grid xs={6}>
    <Button disabled>默认按钮</Button>
  </Grid>
  <Grid xs={6}>
    <Button category="primary" disabled>
      主要按钮
    </Button>
  </Grid>
  <Grid xs={6}>
    <Button category="warning" disabled>
      主要按钮
    </Button>
  </Grid>
  <Grid xs={6}>
    <Button category="danger" disabled>
      主要按钮
    </Button>
  </Grid>
</Grid>
```

:::

## Loading 加载

::: demo

这个是按钮的描述

```tsx
<Grid container gap={10} style={{ width: '500px' }}>
  <Grid xs={6}>
    <Button loading>默认按钮</Button>
  </Grid>
  <Grid xs={6}>
    <Button category="primary" loading>
      主要按钮
    </Button>
  </Grid>
  <Grid xs={6}>
    <Button category="warning" loading>
      主要按钮
    </Button>
  </Grid>
  <Grid xs={6}>
    <Button category="danger" loading>
      主要按钮
    </Button>
  </Grid>
</Grid>
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
  category?: 'default' | 'text' | 'primary' | 'success' | 'warning' | 'danger'
  iconDirection?: 'left' | 'right'
  size?: 'small' | 'middle' | 'large'
  onClick?: () => void
  children?: React.ReactNode
}
```
