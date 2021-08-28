import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";

const DailyDonate = () => {
  const state = useSelector((state) => state);
  const todayPosts = state.barchartReducer.todayPosts;

  let totalReceivePost;
  if (Object.keys(todayPosts).length) {
    totalReceivePost = todayPosts.todayRequest.filter(
      (request) => request._id === "send"
    );
  }
  console.log(totalReceivePost);
  return (
    <div>
      <div className="header">
        <h1 className="title" style={{ fontSize: 23 }}>
          {totalReceivePost !== undefined && totalReceivePost[0]?.count}{" "}
          donations{" "}
        </h1>
      </div>
    </div>
  );
};

export default DailyDonate;
