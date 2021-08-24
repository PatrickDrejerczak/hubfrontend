<<<<<<< HEAD:src/components/charts/totalrequestvsdonate.js
import React from "react";
import { Doughnut } from "react-chartjs-2";
import charity from "../../charity.json";
=======
import React,{ useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import ticketActions from '../../redux/actions/ticket.action';
import { useDispatch, useSelector } from 'react-redux';
>>>>>>> d45e12b128eb1f27bf67d4706b9a954c38612655:src/components/PieCharts/TotalRequestAndDonate.js


function TicketPieChart() {
<<<<<<< HEAD:src/components/charts/totalrequestvsdonate.js
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
=======
  const dispatch = useDispatch()

      useEffect(() => {
          dispatch(ticketActions.getTickets());
      }, [dispatch]);
    
      const state = useSelector(state => state)
      const tickets = state.ticketReducer.tickets


    function getTotalTicketOf(name) {
        let totalTickets = 0
        tickets.map((ticket)=>{
            if (ticket.ticketType === name) {
                totalTickets+=1
            }
        })
        return totalTickets
    }
    const totalReq = getTotalTicketOf("receive")
    const totalDonate = getTotalTicketOf("donate")
>>>>>>> d45e12b128eb1f27bf67d4706b9a954c38612655:src/components/PieCharts/TotalRequestAndDonate.js
  const data = {
    labels: ["Total Receiving Tikets", "Total Donating Tickets"],
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
<<<<<<< HEAD:src/components/charts/totalrequestvsdonate.js
        <h1 className="title">Donations vs. Requests</h1>
=======
        <h1 className="title">Percentages of receiving and donating tickets</h1>
>>>>>>> d45e12b128eb1f27bf67d4706b9a954c38612655:src/components/PieCharts/TotalRequestAndDonate.js
        <div className="links"></div>
      </div>
      <Doughnut data={data} />
    </>
  );
}

export default TicketPieChart;
