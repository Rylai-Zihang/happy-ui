---
import: import { Layout, Aside, Content, Footer, Header } from '../layout.tsx';import "./layout.example.scss"
---

[[toc]]

## Layout 布局

::: demo

布局一

```tsx
<div>
  <Layout style={{ height: 300 }} className="example">
    <Header className="example-header" style={{ color: 'white' }}>
      header
    </Header>
    <Content className="example-content" style={{ color: 'white' }}>
      content
    </Content>
    <Footer className="example-footer" style={{ color: 'white' }}>
      footer
    </Footer>
  </Layout>
</div>
```

:::

::: demo

布局二

```tsx
<div>
  <Layout style={{ height: 300 }} className="example">
    <Header className="example-header" style={{ color: 'white' }}>
      header
    </Header>
    <Layout>
      <Aside className="example-aside" style={{ color: 'white' }}>
        aside
      </Aside>
      <Content className="example-content" style={{ color: 'white' }}>
        content
      </Content>
    </Layout>
    <Footer className="example-footer" style={{ color: 'white' }}>
      footer
    </Footer>
  </Layout>
</div>
```

:::

::: demo

布局三

```tsx
<div>
  <Layout style={{ height: 300 }} className="example">
    <Header className="example-header" style={{ color: 'white' }}>
      header
    </Header>
    <Layout>
      <Content className="example-content" style={{ color: 'white' }}>
        content
      </Content>
      <Aside className="example-aside" style={{ color: 'white' }}>
        aside
      </Aside>
    </Layout>
    <Footer className="example-footer" style={{ color: 'white' }}>
      footer
    </Footer>
  </Layout>
</div>
```

:::

::: demo

布局四

```tsx
<div>
  <Layout className="example" style={{ height: 300 }}>
    <Aside className="example-aside" style={{ color: 'white' }}>
      aside
    </Aside>
    <Layout>
      <Header className="example-header" style={{ color: 'white' }}>
        header
      </Header>
      <Aside className="example-aside" style={{ color: 'white' }}>
        aside
      </Aside>
      <Content className="example-content" style={{ color: 'white' }}>
        content
      </Content>
    </Layout>
  </Layout>
</div>
```

:::

## API

```ts
interface Props extends HtmlHTMLAttributes<HTMLElement> {
  children: ReactElement | Array<ReactElement>
}
```
