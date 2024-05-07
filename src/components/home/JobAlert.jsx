import React from "react";
import ideal_core4 from "../../assets/idea_core4.jpg";
import "./job_alert.css"
import { TiVendorAndroid } from "react-icons/ti";
import { FaApple } from "react-icons/fa";


 const JobAlert = () => {
  return (
    <section className="job_alert">
      <h5>Job Alert</h5>
      <h2>
        IDEAL CARE <span>MOBILE APP</span>
      </h2>
      <div className="container job_alert_container">
        <div className="mob_img_container">
          <img src={ideal_core4} alt="mob_img"className="mob_img"/>
        </div>
        <div className="job_details_container">
          <h2>Receive Job Alerts  <span>From Our Mobile App</span></h2>
          <h5>Staff have the opportunity to manage their work-life through our own compay App</h5>
          <div className="app_button">
            <a className="btn" href="_blank"> <TiVendorAndroid className="job_icon"/>Download</a>
            <a className="btn btn-primary" href="_blank"><FaApple className="job_icon"/>Download</a>
          </div>

        </div>

      </div>
    </section>
  );
}

 export default JobAlert
