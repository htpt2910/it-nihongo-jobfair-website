import React from 'react';
import 'antd/dist/antd.min.css';
import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  
  getItem('面接', 'sub1', <MailOutlined />, [
    getItem('よくある質問', '1', <PieChartOutlined />),
    getItem('準備', '2', <DesktopOutlined />),
    getItem('質問解答方法', '3', <ContainerOutlined /> ,onClick =>{() => this.hide} ),
  ]),
  getItem('日本', 'sub2', <AppstoreOutlined />, [
    getItem('会社で先輩の本当の体験', '9'),
  ]),
];

const NavBar = () => {
  const [collapsed, setCollapsed] = React.useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      style={{
        width: 256, height: 256
      }}
    >
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};

export default NavBar;