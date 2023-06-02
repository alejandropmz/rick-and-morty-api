import React from "react";
import rickmortyGif from "../assets/gif.gif";

export const NoPeople = ({ message }) => {
  return (
    <div className="not__found">
      <h1>{message}</h1>
      <img src={rickmortyGif} alt="" />
    </div>
  );
};
