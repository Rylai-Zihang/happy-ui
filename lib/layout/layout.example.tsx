import React from 'react';
import Layout from './layout';
import Aside from './aside';
import Content from './content';
import Footer from './footer';
import Header from './header';

const LayoutExample: React.FunctionComponent = () => {
    return (
        <div style={{ width: 500 }}>
            <div>
                <h1>第一个例子</h1>
                <Layout style={{ height: 300 }}>
                    <Header style={{ color: "white" }}>header</Header>
                    <Content style={{ color: "white" }}>content</Content>
                    <Footer style={{ color: "white" }}>footer</Footer>
                </Layout>
            </div>
            <div>
                <h1>第二个例子</h1>
                <Layout style={{ height: 300 }}>
                    <Header style={{ color: "white" }}>header</Header>
                    <Layout>
                        <Aside style={{ color: "white" }}>aside</Aside>
                        <Content style={{ color: "white" }}>content</Content>
                    </Layout>
                    <Footer style={{ color: "white" }}>footer</Footer>
                </Layout>
            </div>
            <div>
                <h1>第三个例子</h1>
                <Layout style={{ height: 300 }}>
                    <Aside style={{ color: "white" }}>aside</Aside>
                    <Layout>
                        <Header style={{ color: "white" }}>header</Header>
                        <Aside style={{ color: "white" }}>aside</Aside>
                        <Content style={{ color: "white" }}>content</Content>
                    </Layout>
                </Layout>
            </div>
        </div>
    );
};

export default LayoutExample