import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
  import { Layout, Menu } from 'antd';
  import React, { useState } from 'react';
  import 'antd/dist/antd.min.css';
  const { Header, Sider, Content } = Layout;
  
  const MenuNavigation = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'よくある質問',
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: '準備',
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: '質問解答方法',
              },
              {
                key: '4',
                icon: <UploadOutlined />,
                label: 'サインイン',
              },
              {
                key: '5',
                icon: <UploadOutlined />,
                label: 'サインアップ',
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          >
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    );
  };
  
  export default MenuNavigation;