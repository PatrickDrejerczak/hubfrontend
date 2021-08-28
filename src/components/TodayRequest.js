import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import ticketActions from "../redux/actions/ticket.action";
import { useDispatch, useSelector } from "react-redux";
import barchartActions from "../redux/actions/barchart.action";

const TodayRequest = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(barchartActions.getTodayPost());
  }, [dispatch]);

  const state = useSelector((state) => state);
  const todayPosts = state.barchartReducer.todayPosts;

  console.log("today", todayPosts);
  let totalReceivePost;
  if (Object.keys(todayPosts).length) {
    totalReceivePost = todayPosts.todayRequest.filter(
      (request) => request._id === "receive"
    );
  }
  console.log(totalReceivePost);
  return (
    <div>
      <div className="header">
        <h1 className="title" style={{ fontSize: 23 }}>
          {" "}
          {totalReceivePost !== undefined && totalReceivePost[0]?.count}{" "}
          requests{" "}
        </h1>
      </div>
    </div>
  );
};

export default TodayRequest;
