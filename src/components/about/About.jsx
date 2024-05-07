import React from "react";
import idealAboutImg from "../../assets/ideal_about.jpg";
import './about.css'
const About = () => {
  return (
    <section id="about">
      <h5>About Us</h5>
      <h2>
        Best Reliable Solution For <span>Healthcare Staffing</span>
      </h2>
      <div className="container about_container">
        <div className="main_ab_img_container">
          <img src={idealAboutImg} className="main_ab_img" alt="main_ab_img" />
        </div>
        <div className="main_ab_content">
          <h5>
            Ideal Care Solutions Ltd aim is to offer outstanding care for
            people when they need it. In order to back up this principle,
            Ideal care solutions select the best of the best healthcare
            professionals through rigorous recruitment procedures. Drawing on
            our clinical knowledge, compliance, management and leadership
            skills, we are enthusiastic about further enriching the experience
            received for our clients. Exceptional training and support are our
            backbone to offer the highest standards of healthcare. We hire,
            develop and help excellent nurses, health assistants and support
            staff to meet a variety of care needs. Our employees are all vetted,
            permanent staff employed in both institutions and on a one-to-one
            basis. With the highest quality of training and clinical
            supervision, we give excellent service, peace of mind and value for
            money.
            <br />
            We are committed to our environment as well; hence we proclaim the
            mantra “Go Green, save Nature”. We have pledged to reduce 95% of the
            normal paperwork involved in the recruitment industry by
            incorporating advanced employee management software and easy to use
            IOS and Android apps for staff. The advanced software will cut
            physical time sheets, staff can give availability through app, staff
            can book shifts in advance according to their convenience and many
            other features.
          </h5>
        </div>
      </div>
    </section>
  );
};
export default About;
