import React from "react";
import idealAboutImg from "../../assets/ideal_about.jpg";
import "./work.css";
const WhyWork = () => {
  return (
    <section id="why_work">
      <h5>Why Join</h5>
      <h2>
        IDEAL CARE <span>SOLUTION ?</span>
      </h2>

      <div className="container why_work_container">
        <div className="why_work_img_container">
          <img
            src={idealAboutImg}
            className="why_work_img"
            alt="why_work_img"
          />
        </div>
        <div className="why_work_content">
          <h5>
            We continuously provide our staff with thorough and complete
            training on the delivery of excellent services to all our Clients.
            We offer training and progression to all our Healthcare
            Professionals by investing in further developing their current
            skills, this ensures the constant provision of improved services.
            <br />
            <br />
            We are constantly on the look-out for candidates passionate about
            health care:
            <br />
            <br />
            Nurses
            <br />
            Health Care Assistants role.
          </h5>
        </div>
      </div>
    </section>
  );
};

export default WhyWork;
