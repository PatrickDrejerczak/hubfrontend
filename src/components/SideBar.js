import React from "react";
import "./SideBar.css";
import { useState } from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Statistic, Row, Col, Card } from "antd";
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import { DesktopOutlined, PieChartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import "./SideBar.css";

import BarChart from "../components/BarChart";
import TotalCompleteAndPending from "../components/PieCharts/TotalCompleteAndPending";
import TinaTestBarChart from "./TinaTestBarChart";

import MostRequestIteam from "./MostRequestIteam";
import { useSelector } from "react-redux";

import TodayRequest from "./TodayRequest";

import DailyDonate from "./TotalDonateToday";

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const state = useSelector((state) => state);
  const todayPosts = state.barchartReducer.todayPosts;
  console.log(todayPosts);
  let sendPercentage = {};
  let receivePercentage = {};

  if (Object.keys(todayPosts).length) {
    let tSend, tReceive, ySend, yReceive;

    todayPosts.todayRequest.forEach((today) => {
      if (today._id === "send") tSend = today.count;
      if (today._id === "receive") tReceive = today.count;
    });

    todayPosts.yesterdayRequest.forEach((yesterday) => {
      if (yesterday._id === "send") ySend = yesterday.count;
      if (yesterday._id === "receive") yReceive = yesterday.count;
    });
    console.log(tSend, ySend);
    console.log(tReceive, yReceive);

    sendPercentage.percent = tSend / ySend;
    if (sendPercentage.percent > 1) {
      sendPercentage.percent = sendPercentage.percent - 1;
      sendPercentage.trend = "increase";
    } else if (sendPercentage.percent < 1) {
      sendPercentage.trend = "descrease";
    } else {
      sendPercentage.trend = "equal";
    }

    receivePercentage.percent = tReceive / yReceive;

    if (receivePercentage.percent > 1) {
      receivePercentage.percent = receivePercentage.percent - 1;
      receivePercentage.trend = "increase";
    } else if (receivePercentage.percent < 1) {
      receivePercentage.trend = "descrease";
    } else {
      receivePercentage.trend = "equal";
    }
  }
  console.log(sendPercentage);
  console.log(receivePercentage);

  const StatisticStatus = ({ value, trend }) => {
    return (
      <Statistic
        title={`${trend}`}
        value={value * 100}
        precision={2}
        valueStyle={
          trend === "increase"
            ? { color: "#3f8600" }
            : trend === "decrease"
            ? { color: "#cf1322" }
            : { color: "#3f8600" }
        }
        prefix={
          trend === "increase" ? (
            <ArrowUpOutlined />
          ) : trend === "decrease" ? (
            <ArrowDownOutlined />
          ) : (
            <MinusOutlined />
          )
        }
        suffix="%"
      />
    );
  };

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
          style={{ padding: 0, backgroundColor: "#edf0f5" }}
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
                  {receivePercentage !== undefined ? (
                    <StatisticStatus
                      value={receivePercentage.percent}
                      trend={receivePercentage.trend}
                    />
                  ) : (
                    <h1>Loading</h1>
                  )}
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  title="Today´s Donations"
                  bordered={false}
                  className="infoCard"
                >
                  <DailyDonate />
                  {sendPercentage !== undefined ? (
                    <StatisticStatus
                      value={sendPercentage.percent}
                      trend={sendPercentage.trend}
                    />
                  ) : (
                    <h1>Loading</h1>
                  )}
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  title="Today´s Most Requested Item"
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
                  <br />
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
