---
import: import Input from "../input"; import Grid from "../../grid/gridItem"; import { useState } from "react";
declare: const [value] = useState("测试第一个");const [mini] = useState("测试mini");const [small] = useState("测试small");const [medium] = useState("测试medium");const [large] = useState("测试large");
---

[[toc]]

## Input

::: demo

默认

```tsx
<div>
  <Input placeholder="一个基础的示例" value={value} />
</div>
```

:::

::: demo

大小

```tsx
<Grid container gap={10}>
  <Grid xs={24}>
    <Input placeholder="一个mini的示例" scale={'mini'} value={mini} />
  </Grid>
  <Grid xs={24}>
    <Input placeholder="一个small的示例" scale={'small'} value={small} />
  </Grid>
  <Grid xs={24}>
    <Input placeholder="一个medium的示例" scale={'medium'} value={medium} />
  </Grid>
  <Grid xs={24}>
    <Input placeholder="一个large的示例" scale={'large'} value={large} />
  </Grid>
</Grid>
```

:::
