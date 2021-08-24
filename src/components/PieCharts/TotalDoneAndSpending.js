import React,{ useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import ticketActions from '../../redux/actions/ticket.action';
import { useDispatch, useSelector } from 'react-redux';


function DonePieChart() {
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(ticketActions.getTickets());
  }, [dispatch]);

  const state = useSelector(state => state)
  const tickets = state.ticketReducer.tickets

    function getTotalTicketOf(name) {
        let totalTickets = 0
        tickets.map((ticket)=>{
            if (ticket.status === name) {
                totalTickets+=1
            }
        })
        return totalTickets
    }
    const totalReq = getTotalTicketOf("pending")
    const totalDonate = getTotalTicketOf("complete")
  const data = {
    labels: ["Total Pending Tickets", "Total Complete Tickets"],
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
        <h1 className="title">Percentages of pending and complete tickets</h1>
        <div className="links"></div>
      </div>
      <Doughnut data={data} />
    </>
  );
}

export default DonePieChart;