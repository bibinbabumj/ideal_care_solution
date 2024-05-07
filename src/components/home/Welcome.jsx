import React from 'react'
import idealAboutImg from "../../assets/ideal_about.jpg";
const Welcome = () => {
    return (
        <section id="home">
          <h5>Welcome to</h5>
          <h2>
            IDEAL CARE <span>SOLUTIONS</span>
          </h2>
          <div className="container home_container">
            <div className="home_img_container">
              <img src={idealAboutImg} className="about_img" alt="about_img" />
            </div>
            <div className="about_content">
              <h5>
                Ideal Care Solutions Ltd aim is to offer outstanding care for
                people when they need it. In order to back up this principle,
                Ideal care solutions select the best of the best healthcare
                professionals through rigorous recruitment procedures. Drawing on
                our clinical knowledge, compliance, management and leadership
                skills, we are enthusiastic about further enriching the experience
                received for our clients. 
                <br/>
                Exceptional training and support are our
                backbone to offer the highest standards of healthcare. We hire,
                develop and help excellent nurses, health assistants and support
                staff to meet a variety of care needs. Our employees are all vetted,
                permanent staff employed in both institutions and on a one-to-one
                basis. With the highest quality of training and clinical
                supervision, we give excellent service, peace of mind and value for
                money.
              </h5>
            </div>
          </div>
        </section>
      );
}

export default Welcome
