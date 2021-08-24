import React from "react";
import BarChart from "../../components/BarChart";
import DonePieChart from "../../components/PieCharts/TotalDoneAndSpending";
import TicketPieChart from "../../components/PieCharts/TotalRequestAndDonate";

const HomePage = () => {
  return (
    <>
      <BarChart />
      <TicketPieChart />
      <DonePieChart />
    </>
  );
};

export default HomePage;
