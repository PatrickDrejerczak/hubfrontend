import React from "react";
import BarChart from "../../components/BarChart";
import DonePieChart from "../../components/PieCharts/totaldonevspending";
import TicketPieChart from "../../components/PieCharts/totalrequestvsdonate";

const HomePage = () => {
    return (
        <>
            <BarChart />
            <TicketPieChart />
            <DonePieChart/>
        </>
    );
};

export default HomePage;