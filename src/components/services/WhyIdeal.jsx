import React from "react";
import idealAboutImg from "../../assets/ideal_about.jpg";
import "./services.css";
const WhyIdeal = () => {
  return (
    <section id="why_ideal">
      <h5>Why</h5>
      <h2>
        IDEAL CARE <span>SOLUTION ?</span>
      </h2>
      <div className="container why_container">
        <div className="why_img_container">
          <img src={idealAboutImg} className="why_img" alt="why_img" />
        </div>
        <div className="why_content">
          <h5>
            We are the recruitment agency you can depend on if you are looking
            to urgently cover staffing requirements for: staff absences, annual
            leave, maternity leave, day to day staff shortages, last minute
            cover.
            <br />
            We provide staffing services to a wide range of organisations in the
            public and private sector including nursing/care homes, hospitals.
            We supply candidates for nursing, support worker, care worker
            vacancies on Ad Hoc, Temp-to-Perm, Permanent basis.
            <br />
            Healthcare staffing and recruitment means more than just filling a
            position. Frontline Care can connect you to a large and diverse pool
            of healthcare candidates with in-depth experience.
            <br />
            <br />
            We provide health care staffing services to a wide range of
            institutions including supply of registered nurses and health care
            workers to care homes, nursing homes and residential homes. We are
            dedicated to the recruitment of temporary, fixed term and permanent
            staff for health care organisations and placing them in the right
            role.
          </h5>
        </div>
      </div>
    </section>
  );
};

export default WhyIdeal;
