import React from "react";
import { useState } from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb, Row, Col, Card } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

import "./SideBar.css"

import BarChart from "../components/BarChart";
import TicketPieChart from "../components/PieCharts/TotalCompleteAndPending";
import TinaTestBarChart from "./TinaTestBarChart";
import ProgressiveTotalCompleteAndPending from "./BarChart/ProgressiveTotalCompleteTickets";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={() => setCollapsed(!collapsed)}
      >
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-card-wrapper">
            <Row gutter={16}>
              <Col span={8}>
                <Card title="Card title" bordered={false}>
                  Card content
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Card title" bordered={false}>
                  Card content
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Card title" bordered={false}>
                  Card content
                </Card>
              </Col>
            </Row>
          </div>
          <br />
          <div className="site-card-wrapper">
            <Row gutter={16}>
              <Col span={16}>
                <Card>
                  <BarChart />
                </Card>
              </Col>
              <Col span={8}>
                <Card>
                  <TicketPieChart />
                </Card>
              </Col>
            </Row>
          </div>
          <br />
          <div className="site-card-wrapper">
            <Row gutter={16}>
              <Col span={24}>
                <Card>
                  <TinaTestBarChart />
                </Card>
              </Col>
            </Row>
          </div>
          <div className="site-card-wrapper">
            <Row gutter={16}>
              <Col span={24}>
                <Card>
                  <ProgressiveTotalCompleteAndPending />
                </Card>
              </Col>
            </Row>
          </div>
          ,
          {/* <DonePieChart />
          <DoughnutChartDonate />
          <DoughnutChartReceiver /> */}
        </Content>
      </Layout>
    </Layout>
  );
};

export default SideBar;
