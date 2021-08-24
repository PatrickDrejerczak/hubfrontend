import React from "react";
import BarChart from "../../components/BarChart";
import DonePieChart from "../../components/PieCharts/TotalDoneAndPending";
import TicketPieChart from "../../components/PieCharts/TotalRequestAndDonate";
import SideBar from "../../components/SideBar";
import DoughnutChartDonate from "../../components/DonutChartDonated";
import DoughnutChartReceiver from "../../components/DoughnutChartReceiver";

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
    </>
  );
};

export default HomePage;
