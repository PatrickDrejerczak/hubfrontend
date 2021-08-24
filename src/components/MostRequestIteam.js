import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import ticketActions from "../redux/actions/ticket.action";
import { useDispatch, useSelector } from "react-redux";
import { Progress } from "antd";
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
  const total =
    totalDonateRice +
    totalDonateEgg +
    totalDonatenoodles +
    totalDonateveggies +
    totalDonatechildrenclothes +
    totalDonatemask +
    totalDonatefish +
    totalDonateprotectivegear +
    totalDonateadultclothes +
    totalDonatemeat;
  const percent = Math.round((MostRequestItem / total) * 100);
  console.log(percent);
  console.log("max", MostRequestItem);
  let MostWanna = "";
  if (totalDonateRice === MostRequestItem) {
    MostWanna = "Rice";
  } else if (totalDonateEgg === MostRequestItem) {
    MostWanna = "Egg";
  } else if (totalDonatenoodles === MostRequestItem) {
    MostWanna = "Noodles";
  } else if (totalDonateveggies === MostRequestItem) {
    MostWanna = "Veg";
  } else if (totalDonatechildrenclothes === MostRequestItem) {
    MostWanna = "Children Clothes";
  } else if (totalDonatemask === MostRequestItem) {
    MostWanna = "Mask";
  } else if (totalDonatefish === MostRequestItem) {
    MostWanna = "Fish";
  } else if (totalDonateprotectivegear === MostRequestItem) {
    MostWanna = "Protect gear";
  } else if (totalDonateadultclothes === MostRequestItem) {
    MostWanna = "Adult Clothes";
  } else if (totalDonatemeat === MostRequestItem) {
    MostWanna = "Meat";
  }
  console.log(MostWanna);

  return (
    <div>
      <div className="header">
        <h1 className="title">
          {MostWanna} - {MostRequestItem} unit request.
        </h1>
      </div>
      <div>
        <Progress percent={percent} size="small" /> of total request
      </div>
      ,
    </div>
  );
};

export default MostRequestIteam;
