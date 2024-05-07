import React from "react";
import ideal_core1 from "../../assets/ideal_core1.jpg";
import ideal_core2 from "../../assets/idea_core2.jpg";
import ideal_core3 from "../../assets/idea_core3.jpg";
import ideal_core4 from "../../assets/idea_core4.jpg";
const CoreValue = () => {
  return (
    <section id="core_value">
      <h5>Ideal Care</h5>
      <h2>
        CORE <span>VALUES</span>
      </h2>

      <div className="container core_container">
        <article className="core_card">
          <div className="core_img_container">
            <img src={ideal_core1} className="core_img" alt="about_img" />
            <div className="core_txt_container">
              <h2 className="core_heading">Entrusted to Standard of Care</h2>
              <h5 className="core_details">
                While insisting on quality and striving to get the basics right
                every time, we earn the trust imposed in us: protection,
                confidentiality.
              </h5>
            </div>
          </div>
        </article>

        <article className="core_card">
          <div className="core_img_container">
            <img src={ideal_core2} className="core_img" alt="about_img" />
            <div className="core_txt_container">
              <h2 className="core_heading">Kindness and Self Respect</h2>
              <h5 className="core_details">
                We value each person as an individual, respect their life
                aspirations and promises, and seek to understand their
                interests, requirements
              </h5>
            </div>
          </div>
        </article>
        <article className="core_card">
          <div className="core_img_container">
            <img src={ideal_core3} className="core_img" alt="about_img" />
            <div className="core_txt_container">
              <h2 className="core_heading">Committed for Residents</h2>
              <h5 className="core_details">
                Care home residents are our priority in everything we do, by
                reaching out to staff, patients,caregivers, families,
                communities.
              </h5>
            </div>
          </div>
        </article>
        <article className="core_card">
          <div className="core_img_container">
            <img src={ideal_core4} className="core_img" alt="about_img" />
            <div className="core_txt_container">
              <h2 className="core_heading">Improvement of Wellbeing</h2>
              <h5 className="core_details">
                Ideal care staff will be working along with the care home
                management to immprove the health and well-being of Residents.
              </h5>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default CoreValue;
