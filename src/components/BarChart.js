import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import ticketActions from "../redux/actions/ticket.action";
import { useDispatch, useSelector } from "react-redux";
const BACKEND_API = process.env.REACT_APP_BACKEND_API;

const VerticalBar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ticketActions.getTickets());
  }, [dispatch]);

  const state = useSelector((state) => state);
  const tickets = state.ticketReducer.tickets;

  const loading = state.ticketReducer.loading;

  function getTotalTicketOf(name, weeksAgo) {
    let totalTickets = 0;
    tickets.map((ticket) => {
      if (ticket.ticketType === name && ticket.weeksAgo === weeksAgo) {
        totalTickets += 1;
      }
    });
    return totalTickets;
  }
  const totalReqLatest = getTotalTicketOf("receive", 0);
  const totalReqOneWeek = getTotalTicketOf("receive", 1);
  const totalReqTwoWeek = getTotalTicketOf("receive", 2);
  const totalReqThreeWeek = getTotalTicketOf("receive", 3);

  const totalDonateLatest = getTotalTicketOf("donate", 0);
  const totalDonateOneWeek = getTotalTicketOf("donate", 1);
  const totalDonateTwoWeek = getTotalTicketOf("donate", 2);
  const totalDonateThreeWeek = getTotalTicketOf("donate", 3);

  const data = {
    labels: ["Three week ago", "Two week ago", "One week ago", "Latest"],

    datasets: [
      {
        backgroundColor: `rgba(220, 99, 135, 0.2)`,
        data: [
          totalReqThreeWeek,
          totalReqTwoWeek,
          totalReqOneWeek,
          totalReqLatest,
        ],
        label: "Total Requests",
      },
      {
        backgroundColor: `rgba(255, 99, 132, 1)`,
        data: [
          totalDonateThreeWeek,
          totalDonateTwoWeek,
          totalDonateOneWeek,
          totalDonateLatest,
        ],
        label: "Total Donations",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div>
      <div className="header">
        <h1 className="title">Weekly Ticket Trend</h1>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default VerticalBar;
