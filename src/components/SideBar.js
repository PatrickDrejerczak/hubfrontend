import React from "react";
import "./SideBar.css";
import { useState } from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Statistic, Row, Col, Card } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

import "./SideBar.css";

import BarChart from "../components/BarChart";
import TotalCompleteAndPending from "../components/PieCharts/TotalCompleteAndPending";
import TinaTestBarChart from "./TinaTestBarChart";
import ProgressiveTotalCompleteAndPending from "./LineChart/ProgressiveTotalCompleteTickets";
import ProgressiveItemProvided from "./LineChart/ProgressiveItemProvided"
import MostRequestIteam from "./MostRequestIteam";

import TodayRequest from "./TodayRequest";

import DailyDonate from "./TotalDonateToday";

const { Header, Content, Sider } = Layout;
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
              <Col span={8}>
                <Card
                  title="Today´s Requests"
                  bordered={false}
                  className="infoCard"
                >
                  <TodayRequest />
                  <Statistic
                    title="Increase of"
                    value={11.28}
                    precision={2}
                    valueStyle={{ color: "#3f8600" }}
                    prefix={<ArrowUpOutlined />}
                    suffix="%"
                  />
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  title="Today´s Donations"
                  bordered={false}
                  className="infoCard"
                >
                  <DailyDonate />
                  <Statistic
                    title="Decrease of"
                    value={9.3}
                    precision={2}
                    valueStyle={{ color: "#cf1322" }}
                    prefix={<ArrowDownOutlined />}
                    suffix="%"
                  />
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  title="Most requested item today"
                  bordered={false}
                  className="infoCard"
                >
                  <MostRequestIteam />
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
                  <TotalCompleteAndPending />
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
        </Content>
      </Layout>
    </Layout>
  );
};

export default SideBar;
