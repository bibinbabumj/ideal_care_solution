import React from "react";
import "./home.css";
import Welcome from "./Welcome";
import CoreValue from "./CoreValue";
import  JobAlert  from "./JobAlert"

export const Home = () => {
  return (
    <div className="main_home">
      <Welcome />
      <CoreValue />
      <JobAlert />
    </div>
  );
}

export default Home
