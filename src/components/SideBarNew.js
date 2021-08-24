import React from "react";
import "./SideBar.css";
import { useState } from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Statistic, Row, Col, Card } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { DesktopOutlined, PieChartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import "./SideBar.css";
import ProgressiveTotalCompleteAndPending from "./LineChart/ProgressiveTotalCompleteTickets";
import ProgressiveItemProvided from "./LineChart/ProgressiveItemProvided";

import MostRequestIteam from "./MostRequestIteam";

import TodayRequest from "./TodayRequest";

import DailyDonate from "./TotalDonateToday";

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

const SideBarNew = () => {
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
            <Link to="/">Overview</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            <Link to="/progress">Progress</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ padding: 0, backgroundColor: "#001538" }}
        />
        <Content style={{ margin: "0 16px" }}>
         
          <div className="site-card-wrapper">
            <Row gutter={16}>
              <Col span={24}>
                <Card>
                  <ProgressiveTotalCompleteAndPending />
                </Card>
              </Col>
            </Row>
          </div>
          <div className="site-card-wrapper">
            <Row gutter={16}>
              <Col span={24}>
                <Card>
                  <ProgressiveItemProvided />
                </Card>
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default SideBarNew;
