import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import ticketActions from "../redux/actions/ticket.action";
import { useDispatch, useSelector } from "react-redux";
const BACKEND_API = process.env.REACT_APP_BACKEND_API;

const TodayRequest = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ticketActions.getTickets());
  }, [dispatch]);

  const state = useSelector((state) => state);
  const tickets = state.ticketReducer.tickets;
  const loading = state.ticketReducer.loading;

  function getTotalTicketOf(ticketType) {
    let totalTickets = 0;
    tickets.map((ticket) => {
      if (ticket.ticketType === ticketType) {
        totalTickets += 1;
      }
    });
    return totalTickets;
  }

  const totalTickets = getTotalTicketOf("receive");

  console.log(totalTickets);

  return (
    <div>
      <div className="header">
        <h1 className="title"> {totalTickets} </h1>
      </div>
    </div>
  );
};

export default TodayRequest;
