import React from "react";
// import BarChart from "../../components/BarChart";
// import DonePieChart from "../../components/charts/totaldonevspending";
// import TicketPieChart from "../../components/charts/totalrequestvsdonate";
import SideBar from "../../components/BarChart";
import DoughnutChartDonate from "../../components/DonutChartDonated";
import DoughnutChartReceiver from "../../components/DoughnutChartReceiver";
import TinaTestBarChart from "../../components/TinaTestBarChart";

const HomePage = () => {
  return (
    <div style={{ width: "50vw" }}>
      <SideBar />
      {/* <BarChart />
      <TicketPieChart />
      <DonePieChart /> */}
      <DoughnutChartDonate />
      <DoughnutChartReceiver />
      <TinaTestBarChart />
    </div>
  );
};

export default HomePage;
