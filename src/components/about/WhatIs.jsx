import React from "react";
import "./about.css";
import idealAboutImg from "../../assets/ideal_about.jpg";
const WhatIs = () => {
  return (
    <section id="about">
      <h5>What is</h5>
      <h2>
        IDEAL CARE <span>SOLUTION ?</span>
      </h2>
      <div className="container what_container">
        <div className="main_ab_content">
          <h5>
            We offer flexible temporary and permanent staffing solutions to
            nursing homes and private sectors that desperately need top quality
            healthcare professionals. Our workforce always exceeds everyone’s
            expectations; hence we are proud of our team, as it consists of
            ebullient, engaged and commiserate individuals. No matter whether
            our clients require nurses or healthcare assistants at any time of
            the day, we will always provide you with excellent temporary
            alternative solutions to meet your needs and requirements. Our
            mission is simple: To increase standards in the provision of care
            and provide one of the most efficient and reliable services in West
            Sussex and surrounding counties.
          </h5>
        </div>

        <div className="main_ab_img_container">
          <img src={idealAboutImg} className="main_ab_img" alt="main_ab_img" />
        </div>
      </div>
    </section>
  );
};
export default WhatIs;
