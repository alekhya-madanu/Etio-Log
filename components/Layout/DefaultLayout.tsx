import { Layout, Breadcrumb } from 'antd';
const { Content, Footer } = Layout;
import Header from "./Header"
import Sider from "./Sider"

// @ts-ignore
export default function layout({ children }) {
  return (
    <Layout>
      <Header/>
      <Content style={{ padding: '0 50px' }}>
        {/* <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
          <Sider/>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <main>{children}</main>
		      </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Etio Log ©2022</Footer>
    </Layout>
    );
}