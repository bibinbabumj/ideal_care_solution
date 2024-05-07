import React from "react";
import idealAboutImg from "../../assets/ideal_about.jpg";

const OurService = () => {
  return (
    <section id="our_services">
      <h5>Our Services</h5>
      <h2>
        IDEAL CARE{" "}
        <span> We Supply the following healthcare professionals</span>
      </h2>

      <div className="container our_services_container">
        <article className="our_services_card_cotainer">
          <div className="our_services_img_container">
            <img
              src={idealAboutImg}
              className="our_services_img"
              alt="our_services_img"
            />
          </div>
          <div className="our_deatils_container">
            <h3>Nurses</h3>
            <h5>
              The United Kingdom has a dometic shortage of qualified nurses. We
              recruit from all over the world to meet this challenge. All our
              candidates are registered with the NMC. RGNs or Registered General
              Nurses refers to any qualified Nurse.
            </h5>
          </div>
        </article>

        <article className="our_services_card_cotainer">
          <div className="our_services_img_container">
            <img
              src={idealAboutImg}
              className="our_services_img"
              alt="our_services_img"
            />
          </div>
          <div className="our_deatils_container">
            <h3>HCAs</h3>
            <h5>
              Our candidates for care workers help vulnerable people who need
              assistance to manage their daily activities to live as
              independently as possible with dignity. We primarily select
              candidates with an innate desire to help people. We recruit
              candidates who have good communication and organisational skills
              and have the aptitude to follow instructions and procedures as
              directed by their seniors.
            </h5>
          </div>
        </article>
      </div>
    </section>
  );
};

export default OurService;
