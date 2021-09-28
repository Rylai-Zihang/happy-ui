---
import: import Grid from "../gridItem"; import "./grid.example.scss"
---

[[toc]]

## Grid

::: demo

默认

```tsx
<Grid container gap={10}>
  <Grid xs={4}>
    <div className={'item-box'} style={{ backgroundColor: '#C7E6E9' }} />
  </Grid>
  <Grid xs={8}>
    <div className={'item-box'} style={{ backgroundColor: '#9BC5B7' }} />
  </Grid>
  <Grid xs={12}>
    <div className={'item-box'} style={{ backgroundColor: '#C9EBCB' }} />
  </Grid>
</Grid>
```

:::

::: demo

自适应填充宽度

```tsx
<Grid container gap={10}>
  <Grid xs>
    <div className={'item-box'} style={{ backgroundColor: '#C7E6E9' }} />
  </Grid>
  <Grid xs={18}>
    <div className={'item-box'} style={{ backgroundColor: '#9BC5B7' }} />
  </Grid>
  <Grid xs>
    <div className={'item-box'} style={{ backgroundColor: '#C9EBCB' }} />
  </Grid>
</Grid>
```

:::

::: demo

流式布局

```tsx
<Grid container gap={10}>
  <Grid xs={24}>
    <div className={'item-box'} style={{ backgroundColor: '#C7E6E9' }} />
  </Grid>
  <Grid xs={12}>
    <div className={'item-box'} style={{ backgroundColor: '#9BC5B7' }} />
  </Grid>
  <Grid xs={12}>
    <div className={'item-box'} style={{ backgroundColor: '#C9EBCB' }} />
  </Grid>
  <Grid xs={6}>
    <div className={'item-box'} style={{ backgroundColor: '#C7E6E9' }} />
  </Grid>
  <Grid xs={6}>
    <div className={'item-box'} style={{ backgroundColor: '#9BC5B7' }} />
  </Grid>
  <Grid xs={6}>
    <div className={'item-box'} style={{ backgroundColor: '#C9EBCB' }} />
  </Grid>
  <Grid xs={6}>
    <div className={'item-box'} style={{ backgroundColor: '#B3EEE3' }} />
  </Grid>
</Grid>
```

:::

::: demo

响应式布局

```tsx
<Grid container gap={10}>
  <Grid xs={24} md={8}>
    <div className={'item-box'} style={{ backgroundColor: '#C7E6E9' }} />
  </Grid>
  <Grid xs={24} md={8}>
    <div className={'item-box'} style={{ backgroundColor: '#9BC5B7' }} />
  </Grid>
  <Grid xs={24} md={8}>
    <div className={'item-box'} style={{ backgroundColor: '#C9EBCB' }} />
  </Grid>
</Grid>
```

:::

## API

```ts
interface Props {
  container?: boolean
  gap?: number
  wrap?: GridContainerWrap
  xs?: GridBreakpointsValue
  sm?: GridBreakpointsValue
  md?: GridBreakpointsValue
  lg?: GridBreakpointsValue
  justify?: GridJustify
  direction?: GridDirection
  alignItems?: GridAlignItems
  alignContent?: GridAlignContent
  className?: string
}

const defaultProps = {
  container: false,
  gap: 0,
  wrap: 'wrap' as GridContainerWrap,
  xs: false,
  sm: false,
  md: false,
  lg: false,
  className: ''
}
```
