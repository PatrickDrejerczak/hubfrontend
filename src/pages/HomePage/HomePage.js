import React from "react";
import BarChart from "../../components/BarChart";
import DonePieChart from "../../components/PieCharts/TotalCompleteAndPending";
import TicketPieChart from "../../components/PieCharts/TotalRequestAndDonate";
import SideBar from "../../components/SideBar";
import DoughnutChartDonate from "../../components/DonutChartDonated";
import DoughnutChartReceiver from "../../components/DoughnutChartReceiver";
import ProgressiveTotalCompleteAndPending from '../../components/BarChart/ProgressiveTotalCompleteAndPending'
const HomePage = () => {
  return (
    <>
      <BarChart />
      <TicketPieChart />
      <DonePieChart />
      <SideBar />
      <BarChart />
      <TicketPieChart />
      <DonePieChart /> 
      <DoughnutChartDonate />
      <DoughnutChartReceiver />
      <ProgressiveTotalCompleteAndPending />
    </>
  );
};

export default HomePage;
