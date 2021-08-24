import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import ticketActions from "../redux/actions/ticket.action";
import { useDispatch, useSelector } from "react-redux";
const BACKEND_API = process.env.REACT_APP_BACKEND_API;

const MostRequestIteam = () => {
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

  const totalDonateRice = gettotalTicketOf("donate", "rice");
  const totalDonateEgg = gettotalTicketOf("donate", "eggs");
  const totalDonatenoodles = gettotalTicketOf("donate", "rice");
  const totalDonateveggies = gettotalTicketOf("donate", "veggies");
  const totalDonatechildrenclothes = gettotalTicketOf(
    "donate",
    "children clothes"
  );
  const totalDonatemask = gettotalTicketOf("donate", "mask");
  const totalDonatefish = gettotalTicketOf("donate", "fish");
  const totalDonateprotectivegear = gettotalTicketOf(
    "donate",
    "protective gear"
  );
  const totalDonateadultclothes = gettotalTicketOf("donate", "adult clothes");
  const totalDonatemeat = gettotalTicketOf("donate", "meat");
  const totalReceiveRice = gettotalTicketOf("receive", "rice");
  const totalReceiveEgg = gettotalTicketOf("receive", "eggs");
  const totalReceivenoodles = gettotalTicketOf("receive", "rice");
  const totalReceiveveggies = gettotalTicketOf("receive", "veggies");
  const totalReceivechildrenclothes = gettotalTicketOf(
    "receive",
    "children clothes"
  );
  const totalReceivemask = gettotalTicketOf("receive", "mask");
  const totalReceivefish = gettotalTicketOf("receive", "fish");
  const totalReceiveprotectivegear = gettotalTicketOf(
    "receive",
    "protective gear"
  );
  const totalReceiveadultclothes = gettotalTicketOf("receive", "adult clothes");
  const totalReceivemeat = gettotalTicketOf("receive", "meat");
  const MostRequestItem = Math.max(
    totalDonateRice,
    totalDonateEgg,
    totalDonatenoodles,
    totalDonateveggies,
    totalDonatechildrenclothes,
    totalDonatemask,
    totalDonatefish,
    totalDonateprotectivegear,
    totalDonateadultclothes,
    totalDonatemeat
  );
  console.log("max", MostRequestItem);

  return (
    <div>
      <div className="header">
        <h1 className="title">Meet = {MostRequestItem} unit </h1>
      </div>
    </div>
  );
};

export default MostRequestIteam;
