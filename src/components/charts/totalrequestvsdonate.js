import React from "react";
import { Doughnut } from "react-chartjs-2";
import charity from "../../charity.json";

// function getDonatedItems(name) {
//     let donatedItems = 0
//     charity.map((ticket)=>{
//         if (ticket.ticketType === "donated") {
//             ticket.items.map((item) => {
//                 if (item.itemName === name) {
//                     donatedItems += item.quantity
//                 }
//             })
//         }
//     })
//     return donatedItems
// }

function TicketPieChart() {
  function getTotalTicketOf(name) {
    let totalTickets = 0;
    charity.map((ticket) => {
      if (ticket.ticketType === name) {
        totalTickets += 1;
      }
    });
    return totalTickets;
  }
  const totalReq = getTotalTicketOf("receive");
  const totalDonate = getTotalTicketOf("donate");
  const data = {
    labels: ["Total Receive Tikets", "Total Donate Tickets"],
    datasets: [
      {
        label: "# of Votes",
        data: [totalReq, totalDonate],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <div className="header">
        <h1 className="title">Donations vs. Requests</h1>
        <div className="links"></div>
      </div>
      <Doughnut data={data} />
    </>
  );
}

export default TicketPieChart;
