import React from "react";
// import BarChart from "../../components/BarChart";
// import DonePieChart from "../../components/charts/totaldonevspending";
// import TicketPieChart from "../../components/charts/totalrequestvsdonate";
import SideBar from "../../components/BarChart";
import DoughnutChartDonate from "../../components/DonutChartDonated";
import DoughnutChartReceiver from "../../components/DoughnutChartReceiver";

const HomePage = () => {
  return (
    <>
      <SideBar />
      {/* <BarChart />
      <TicketPieChart />
      <DonePieChart /> */}
      <DoughnutChartDonate />
      <DoughnutChartReceiver />
    </>
  );
};

export default HomePage;
