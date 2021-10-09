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

禁用

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

加载

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

## Size 大小

::: demo

这个是按钮大小的配置

```tsx
<Grid container gap={10} style={{ width: '500px' }}>
  <Grid xs={4}>
    <Button scale="mini">默认按钮</Button>
  </Grid>
  <Grid xs={5}>
    <Button scale="small">默认按钮</Button>
  </Grid>
  <Grid xs={6}>
    <Button scale="medium">默认按钮</Button>
  </Grid>
  <Grid xs={9}>
    <Button scale="large">默认按钮</Button>
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
