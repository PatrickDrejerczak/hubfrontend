import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import ticketActions from "../redux/actions/ticket.action";
import barchartActions from "../redux/actions/barchart.action";
import { useDispatch, useSelector } from "react-redux";
const BACKEND_API = process.env.REACT_APP_BACKEND_API;

const TinaTestBarChart = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const tickets = state.ticketReducer.tickets;
  const loading = state.ticketReducer.loading;
  const items = state.barchartReducer.itemChart;

  useEffect(() => {
    dispatch(ticketActions.getTickets());
    dispatch(barchartActions.getItemChart());
  }, [dispatch]);

  // const totalDonateRice = gettotalTicketOf("donate", "rice");
  // const totalDonateEgg = gettotalTicketOf("donate", "eggs");
  // const totalDonatenoodles = gettotalTicketOf("donate", "rice");

  let labels = [];
  let totalSend = [];
  let totalReceive = [];
  let data;

  if (Object.keys(items).length) {
    items.receive.forEach((r) => {
      labels.push(r._id);
      totalReceive.push(r.count);
    });
    totalSend = items.send.map((s) => s.count);

    data = {
      labels: labels,
      datasets: [
        {
          backgroundColor: `rgba(2, 99, 135, 1)`,
          data: totalSend,
          label: "Total Donated  ",
        },
        {
          backgroundColor: `rgba(210, 99, 132, 1)`,
          data: totalReceive,
          label: "Total Requested",
        },
      ],
    };
  }
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
        <h1 className="title">Goods requested vs. Goods donated</h1>
      </div>
      {Object.keys(items).length === 0 ? (
        <h1>loading</h1>
      ) : (
        <Bar data={data} options={options} />
      )}
    </div>
  );
};

export default TinaTestBarChart;
