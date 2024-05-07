import React from 'react'
import "./contact.css"
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact">
    <h5>Get In Touch</h5>
    <h2>Contact Us</h2>
    <div className="container contact__container">

      <div className="contact_items">
       <article className="contact_card">
       <MdOutlineEmail className="contact_icon" />
       <h4> Email</h4>
       <h5>sample@gmail.com</h5>
            <a href="mailto:sample@gmail.com ">send a Message</a>
       </article>
       <article className="contact_card">
       <FaWhatsappSquare className="contact_icon" />
            <h4> Whatsapp</h4>
            <h5>Whatsapp Message</h5>
            <a href="https://api.whatsapp.com/send?phone=44" target="_blank" rel="noreferrer noopener">send a Message</a>
       </article>
       <article className="contact_card">
       <FaPhoneAlt className="contact_icon" />
       <h4> Mobile</h4>
            <h5>+44 0123456789</h5>
            <a href="tel:+44">Call US</a>
       </article>
      </div>



      <form className="conatct_form">
        <input type="text" name='name' placeholder="Your Full Name" required/>
        <input type="email" name='email' placeholder="Your Email" required/>
        <textarea rows='7' name='message' placeholder="Your Message" required/>
        <button type="submit" className="btn btn-primary submit_btn">Send Message</button>
      </form>
    </div>
  </section>
  )
}

export default Contact
