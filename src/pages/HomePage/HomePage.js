import React from "react";
import BarChart from "../../components/BarChart";
import DonePieChart from "../../components/charts/totaldonevspending";
import TicketPieChart from "../../components/charts/totalrequestvsdonate";
import SideBar from "../../components/SideBar";

const HomePage = () => {
  return (
    <>
      <SideBar />
      <BarChart />
      <TicketPieChart />
      <DonePieChart />
    </>
  );
};

export default HomePage;
