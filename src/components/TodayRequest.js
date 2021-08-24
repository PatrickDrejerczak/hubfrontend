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
  function gettotalTicketOf(name, kindOfItems) {
    let totalDonateTickets = 0;
    const itemsLength = tickets.items;
    tickets.map((ticket) => {
      if (ticket.ticketType === name && ticket.weeksAgo === 0) {
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

  const totalReceive = gettotalTicketOf("receive");

  const TodayRequest = Math.sum(totalReceive);
  console.log("sum", TodayRequest);

  return (
    <div>
      <div className="header">
        <h1 className="title"> {TodayRequest} </h1>
      </div>
    </div>
  );
};

export default TodayRequest;
