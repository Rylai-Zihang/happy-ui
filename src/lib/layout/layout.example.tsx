import React from 'react';
import Layout from './layout';
import Aside from './aside';
import Content from './content';
import Footer from './footer';
import Header from './header';
import "./layout.example.scss"

const LayoutExample: React.FunctionComponent = () => {
    return (
        <div style={{ width: 500 }}>
            <div>
                <h1>第一个例子</h1>
                <Layout style={{ height: 300 }} className="example">
                    <Header className="example-header" style={{ color: "white" }}>header</Header>
                    <Content className="example-content" style={{ color: "white" }}>content</Content>
                    <Footer className="example-footer" style={{ color: "white" }}>footer</Footer>
                </Layout>
            </div>
            <div>
                <h1>第二个例子</h1>
                <Layout style={{ height: 300 }} className="example">
                    <Header className="example-header" style={{ color: "white" }}>header</Header>
                    <Layout>
                        <Aside className="example-aside" style={{ color: "white" }}>aside</Aside>
                        <Content className="example-content" style={{ color: "white" }}>content</Content>
                    </Layout>
                    <Footer className="example-footer" style={{ color: "white" }}>footer</Footer>
                </Layout>
            </div>
            <div>
                <h1>第三个例子</h1>
                <Layout style={{ height: 300 }}>
                    <Aside className="example-aside" style={{ color: "white" }}>aside</Aside>
                    <Layout className="example">
                        <Header className="example-header" style={{ color: "white" }}>header</Header>
                        <Aside className="example-aside" style={{ color: "white" }}>aside</Aside>
                        <Content className="example-content" style={{ color: "white" }}>content</Content>
                    </Layout>
                </Layout>
            </div>
        </div>
    );
};

export default LayoutExample