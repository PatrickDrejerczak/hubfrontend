import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import ticketActions from "../redux/actions/ticket.action";
import { useDispatch, useSelector } from "react-redux";
const BACKEND_API = process.env.REACT_APP_BACKEND_API;
function DoughnutChartReceiver() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ticketActions.getTickets());
  }, [dispatch]);

  const state = useSelector((state) => state);
  const tickets = state.ticketReducer.tickets;
  const loading = state.ticketReducer.loading;
  function gettotalReceiveTicketOf(name, kindOfItems) {
    let totalReceiveTickets = 0;
    const itemsLength = tickets.items;
    tickets.map((ticket) => {
      if (ticket.ticketType === name && ticket.items) {
        let items = ticket.items;
        items.map((items) => {
          if (items.itemName === kindOfItems) {
            totalReceiveTickets += items.quantity;
          }
        });
      }
    });
    return totalReceiveTickets;
  }

  const totalReceiveRice = gettotalReceiveTicketOf("receive", "rice");
  const totalReceiveEgg = gettotalReceiveTicketOf("receive", "eggs");
  const totalReceivenoodles = gettotalReceiveTicketOf("receive", "rice");
  const totalReceiveveggies = gettotalReceiveTicketOf("receive", "veggies");
  const totalReceivechildrenclothes = gettotalReceiveTicketOf(
    "receive",
    "children clothes"
  );
  const totalReceivemask = gettotalReceiveTicketOf("receive", "mask");
  const totalReceivefish = gettotalReceiveTicketOf("receive", "fish");
  const totalReceiveprotectivegear = gettotalReceiveTicketOf(
    "receive",
    "protective gear"
  );
  const totalReceiveadultclothes = gettotalReceiveTicketOf(
    "receive",
    "adult clothes"
  );
  const totalReceivemeat = gettotalReceiveTicketOf("receive", "meat");
  console.log("rice", totalReceiveRice);
  console.log("egg", totalReceiveEgg);
  console.log("totalReceivenoodles", totalReceivenoodles);
  console.log("totalReceiveveggies", totalReceiveveggies);
  console.log("totalReceivechildrenclothes", totalReceivechildrenclothes);
  console.log("totalReceivemask", totalReceivemask);
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
          totalReceiveRice,
          totalReceiveEgg,
          totalReceivenoodles,
          totalReceiveveggies,
          totalReceivechildrenclothes,
          totalReceivemask,
          totalReceivefish,
          totalReceiveprotectivegear,
          totalReceiveadultclothes,
          totalReceivemeat,
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
        <h1 className="title">Percentages of each item received</h1>
        <div className="links"></div>
      </div>
      <Doughnut data={data} />
    </>
  );
}

export default DoughnutChartReceiver;
