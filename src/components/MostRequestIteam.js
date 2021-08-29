import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import ticketActions from "../redux/actions/ticket.action";
import { useDispatch, useSelector } from "react-redux";
import { Progress } from "antd";
import barchartActions from "../redux/actions/barchart.action";

const MostRequestIteam = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(barchartActions.getTodayPost());
  }, [dispatch]);

  const state = useSelector((state) => state);
  const tickets = state.ticketReducer.tickets;
  const loading = state.ticketReducer.loading;
  const itemChart = state.barchartReducer.itemChart;

  const MostRequestItem = "fdf";
  const MostWanna = "dd";
  itemChart?.receive?.sort((a, b) => b.count - a.count);
  const total = itemChart?.receive?.reduce(
    (total, current) => total + current.count,
    0
  );
  console.log(total);
  let percent;
  if (total) percent = Math.ceil((itemChart?.receive[0].count / total) * 100);
  console.log(percent);
  return (
    <div>
      <div className="header">
        <p className="title">
          <span style={{ color: "red", fontSize: "20px", fontWeight: " bold" }}>
            {Object.keys(itemChart).length && itemChart.receive[0]._id}{" "}
          </span>
          - {Object.keys(itemChart).length && itemChart.receive[0].count} units
          requested.
        </p>
      </div>
      <div>
        <Progress percent={percent} size="small" /> of total requests
      </div>
      ,
    </div>
  );
};

export default MostRequestIteam;
