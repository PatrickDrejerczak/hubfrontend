import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import ticketActions from "../redux/actions/ticket.action";
import { useDispatch, useSelector } from "react-redux";
const BACKEND_API = process.env.REACT_APP_BACKEND_API;

const DailyDonate = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ticketActions.getTickets());
  }, [dispatch]);

  const state = useSelector((state) => state);
  const tickets = state.ticketReducer.tickets;

  function getTotalTicketOf(name) {
    let totalTickets = 0
    tickets.map((ticket) => {
      if (ticket.ticketType === name) {
        totalTickets += 1
      }
    })
    return totalTickets
  }

  const totalDonate = getTotalTicketOf("donate")
  const DailyDonate = Math.max(
    totalDonate
  );
  console.log("donate", DailyDonate);

  return (
    <div>
      <div className="header">
        <h1 className="title">{DailyDonate} donations </h1>
      </div>
    </div>
  );
};

export default DailyDonate;
