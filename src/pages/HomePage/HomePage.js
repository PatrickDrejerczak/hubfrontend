import React from "react";
import BarChart from "../../components/BarChart";
import DonePieChart from "../../components/charts/totaldonevspending";
import TicketPieChart from "../../components/charts/totalrequestvsdonate";

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