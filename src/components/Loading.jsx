import React from "react";
import loading from "../assets/loadingrick.webp";

export const Loading = () => {
  return (
    <div className="loading">
      <img src={loading} alt="loading-api" />
      <h1>Loading people...</h1>
    </div>
  );
};
