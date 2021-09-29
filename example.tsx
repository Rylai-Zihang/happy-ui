import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, NavLink } from 'react-router-dom'
import IconDemo from './src/lib/icon/demo/icon.md'
import ButtonDemo from './src/lib/button/demo/button.md'
import DialogDemo from './src/lib/dialog/demo/dialog.md'
import LayoutDemo from './src/lib/layout/demo/layout.md'
import GridDemo from './src/lib/grid/demo/grid.md'
import InputDemo from './src/lib/input/demo/input.md'
import FormDemo from './src/lib/form/form.example'
// import FormDemo from './src/lib/form/demo/form.md'

import { Layout, Header, Aside, Content, Footer } from './src/lib/layout/layout'
import "./example.scss"
import logo from './logo.png'

ReactDOM.render(
  <Router>
    <Layout className="site-page">
      <Header className="site-header">
        <div className="logo-container">
          <img src={logo} width="50" height="50" alt="" />
          <span>happy-UI</span>
        </div>
      </Header>
      <Layout>
        <Aside className="site-aside">
          <h2>组件</h2>
          <ul>
            <li>
              <NavLink to="/icon">Icon</NavLink>
            </li>
            <li>
              <NavLink to="/button">Button</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">Dialog</NavLink>
            </li>
            <li>
              <NavLink to="/layout">Layout</NavLink>
            </li>
            <li>
              <NavLink to="/grid">Grid</NavLink>
            </li>
            <li>
              <NavLink to="/form">Form</NavLink>
            </li>
            <li>
              <NavLink to="/input">Input</NavLink>
            </li>
          </ul>
        </Aside>
        <Content className="site-main">
          <Route path="/icon" component={IconDemo} />
          <Route path="/button" component={ButtonDemo} />
          <Route path="/dialog" component={DialogDemo} />
          <Route path="/layout" component={LayoutDemo} />
          <Route path="/grid" component={GridDemo} />
          <Route path="/input" component={InputDemo} />
          <Route path="/form" component={FormDemo} />
        </Content>
      </Layout>
      <Footer className="site-footer">
      </Footer>
    </Layout>
  </Router>
  , document.querySelector('#root'))