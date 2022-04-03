import type { NextPage } from 'next'
import { useEffect } from 'react'
import '../node_modules/antd/dist/antd.css';
import { supabase } from '../lib/initSupabase'
import React, { useState } from 'react';
import Login from "../components/Login";
import HomeForm from "../components/HomeForm"
import ViewData from "../components/ViewData"

import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

const Home: NextPage = () => {
const [state, setState] = useState({collapsed: false})
//   let state = {
//     collapsed: false,
//   };

  const toggle = () => {
    setState({
      collapsed: !state.collapsed,
    });
  };


    return (
      <Layout>
                  <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
          </Header>
        <Sider trigger={null} collapsible collapsed={state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">

          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <HomeForm/>
            <ViewData/>
          </Content>
        </Layout>
      </Layout>
    );

}

export default Home
