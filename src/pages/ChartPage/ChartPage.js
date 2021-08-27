import React from "react";
import BarChart from "../../components/NewCharts/BarChart";
import DonutChart from "../../components/NewCharts/DonutChart";

const ChartPage = () => {
  return (
    <div>
      <DonutChart />
      <BarChart />
    </div>
  );
};

export default ChartPage;
