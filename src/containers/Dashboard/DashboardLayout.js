import React from "react";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Typography } from "antd";
import Navbar from "../../components/Navbar/Navbar";

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const DashboardLayout = ({ children }) => {
  const [collapsed, setCollapsed] = React.useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
      <Layout>

        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          theme="light"
          collapsedWidth={3}
          style={{
            backgroundColor: "#253C5F",
            minHeight: "100vh",
          }}
        >
          <div className="">
            <img src="assets/img/logo.png" className="  text-center p-1 mb-3" alt height="90px" width="150px"/>

          </div>
          <br />

          <Menu mode="inline" defaultSelectedKeys={["0"]} >
          <Menu.Item key="0" icon={<UserOutlined />} >
              <Link to="/dashboard">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="1" icon={<UserOutlined />} >
              <Link to="/listings-backend">My Listings</Link>
            </Menu.Item>

            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link to="/chats">Chats</Link>
            </Menu.Item>

            <Menu.Item key="3" icon={<UploadOutlined />}>
              <Link to="/payments">Payments</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<UploadOutlined />}>
              <Link to="/settings">Settings</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{ backgroundColor: "white" }}
          >
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: toggle,
              }
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
  );
};

export default DashboardLayout;
