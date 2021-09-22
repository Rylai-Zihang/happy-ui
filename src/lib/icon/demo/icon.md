---
import: import Icon from '../icon.tsx'
---

[[toc]]

## Icon 图标

::: demo

这个是图标的描述

```tsx
<Icon name="cat" onMouseEnter={() => console.log("cat-enter")} />
<Icon name="dog" onMouseLeave={() => console.log("dog-leave")} />
```

:::

## API

```ts
interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string
}
```
