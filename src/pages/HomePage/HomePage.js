import React from "react";
import BarChart from "../../components/BarChart";
import DoughnutChart from "../../components/DonutChart";
import DoughnutChartReceiver from "../../components/DoughnutChartReceiver";

const HomePage = () => {
  return (
    <div style={{ width: "50vw" }}>
      <BarChart />
      <DoughnutChart />
      <DoughnutChartReceiver />
    </div>
  );
};

export default HomePage;
