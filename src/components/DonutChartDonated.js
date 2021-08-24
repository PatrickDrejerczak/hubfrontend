import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import ticketActions from "../redux/actions/ticket.action";
import { useDispatch, useSelector } from "react-redux";
const BACKEND_API = process.env.REACT_APP_BACKEND_API;

function DoughnutChartDonate() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ticketActions.getTickets());
  }, [dispatch]);

  const state = useSelector((state) => state);
  const tickets = state.ticketReducer.tickets;
  const loading = state.ticketReducer.loading;
  function gettotalDonateTicketOf(name, kindOfItems) {
    let totalDonateTickets = 0;
    const itemsLength = tickets.items;
    tickets.map((ticket) => {
      if (ticket.ticketType === name && ticket.items) {
        let items = ticket.items;
        items.map((items) => {
          if (items.itemName === kindOfItems) {
            totalDonateTickets += items.quantity;
          }
        });
      }
    });
    return totalDonateTickets;
  }

  const totalDonateRice = gettotalDonateTicketOf("donate", "rice");
  const totalDonateEgg = gettotalDonateTicketOf("donate", "eggs");
  const totalDonatenoodles = gettotalDonateTicketOf("donate", "rice");
  const totalDonateveggies = gettotalDonateTicketOf("donate", "veggies");
  const totalDonatechildrenclothes = gettotalDonateTicketOf(
    "donate",
    "children clothes"
  );
  const totalDonatemask = gettotalDonateTicketOf("donate", "mask");
  const totalDonatefish = gettotalDonateTicketOf("donate", "fish");
  const totalDonateprotectivegear = gettotalDonateTicketOf(
    "donate",
    "protective gear"
  );
  const totalDonateadultclothes = gettotalDonateTicketOf(
    "donate",
    "adult clothes"
  );
  const totalDonatemeat = gettotalDonateTicketOf("donate", "meat");
  console.log("rice", totalDonateRice);
  console.log("egg", totalDonateEgg);
  console.log("totalDonatenoodles", totalDonatenoodles);
  console.log("totalDonateveggies", totalDonateveggies);
  console.log("totalDonatechildrenclothes", totalDonatechildrenclothes);
  console.log("totalDonatemask", totalDonatemask);

  const data = {
    labels: [
      "rice",
      "eggs",
      "noodles",
      "veggies",
      "children clothes",
      "mask",
      "fish",
      "protective gear",
      "adult clothes",
      "meat",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [
          totalDonateRice,
          totalDonateEgg,
          totalDonatenoodles,
          totalDonateveggies,
          totalDonatechildrenclothes,
          totalDonatemask,
          totalDonatefish,
          totalDonateprotectivegear,
          totalDonateadultclothes,
          totalDonatemeat,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(2, 206, 86, 0.2)",
          "rgba(100, 192, 192, 0.2)",
          "rgba(1, 102, 255, 0.2)",
          "rgba(321, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(2, 206, 86, 1)",
          "rgba(100, 192, 192, 1)",
          "rgba(1, 102, 255, 1)",
          "rgba(321, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <div className="header">
        <h1 className="title">Percentages of each item donated</h1>
        <div className="links"></div>
      </div>
      <Doughnut data={data} />
    </>
  );
}

export default DoughnutChartDonate;
