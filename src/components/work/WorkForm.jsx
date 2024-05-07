import React from 'react'
import idealAboutImg from "../../assets/ideal_about.jpg";
import "./work.css";
const WorkForm = () => {
  return (
    <section id="join_ideal">
      <h5>Join</h5>
      <h2>
        IDEAL CARE <span>SOLUTION</span>
      </h2>
      <div className="container join_container">
        
        
          <form className='form_conatiner'>
            <input type='text' name="fullname" placeholder='Full Name' required/>
            <input type='email' name="email" placeholder='Email' required/>
            <input type="tel" name="tel" placeholder='+44 1234567890' required/>
            <textarea rows="7" name='message' placeholder='Your Message'/>
            <button type="submit" className="btn btn-primary submit_btn">Send Message</button>
          </form>


          
        

        <div className="why_work_img_container">
          <img src={idealAboutImg} className="why_work_img" alt="join_img" />
        </div>
      </div>
    </section>
  )
}

export default WorkForm
