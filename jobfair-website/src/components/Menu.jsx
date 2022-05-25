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
  import { Link } from 'react-router-dom';
  const { Header, Sider, Content } = Layout;
  
  const MenuNavigation = ({component}) => {
    const [collapsed, setCollapsed] = useState(false);
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['2']}
          >
            <Menu.Item key="1">
              <MenuFoldOutlined />
              <span>よくある質問</span>
              <Link to="/fqask" />
            </Menu.Item>
            <Menu.Item key="2">
                <UploadOutlined />
                <span>準備</span>
                <Link to="/todo" />
            </Menu.Item>
            <Menu.Item key="3">
                <UploadOutlined />
                <span>質問解答方法</span>
                <Link to="/post" />
            </Menu.Item>
            <Menu.Item key="4">
                <UploadOutlined />
                <span>サインイン</span>
                <Link to="/" />
            </Menu.Item>
            <Menu.Item key="5">
                <UploadOutlined />
                <span>サインアップ</span>
                <Link to="/signup" />
            </Menu.Item>            
          </Menu>
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
            {component}
          </Content>
        </Layout>
      </Layout>
    );
  };
  
  export default MenuNavigation;