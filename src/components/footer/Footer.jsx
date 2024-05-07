import React ,{ useCallback } from "react";
import { Link } from "react-router-dom";
import { FaInstagramSquare, FaTwitterSquare, FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import "./footer.css"
const Footer = () => {

    const scrollToTop =useCallback(()=>{
        window.scrollTo(0, 0); 
    },[])

  return (
    <footer>
      <Link to="/" className="footer_logo">
        IDEAL CARE <span>SOLUTIONS</span>
      </Link>

      <div className="permalinks">
          <Link to="/home" onClick={scrollToTop}>Home</Link>

          <Link to="/about" onClick={scrollToTop}>About</Link>

          <Link to="/main_servies" onClick={scrollToTop}>Our Services</Link>

          <Link to="/main_work" onClick={scrollToTop}>Work For Us</Link>

          <Link to="/contact" onClick={scrollToTop}>Contact</Link>     
      </div>

      <div className="social_liks">
        <a href="http://facebook.com" target="_blank" rel="noreferrer noopener">
          <FaInstagramSquare />
        </a>
        <a href="http://facebook.com" target="_blank" rel="noreferrer noopener">
          <FaLinkedin />
        </a>
        <a href="http://facebook.com" target="_blank" rel="noreferrer noopener">
          <FaTwitterSquare />
        </a>
        <a href="http://facebook.com" target="_blank" rel="noreferrer noopener">
          <FaFacebook />
        </a>
      </div>
      <div className="conatct_card">
        <div className="conatct_method">
          <a href="tel:+447404436611">
            <FaPhoneAlt className="footer_icon" /> +44 123456789
          </a>
          <a href="tel:+447404436611">
            <FaPhoneAlt className="footer_icon"/> +44 123456789
          </a>
          <a href="tel:+447404436611">
            <FaPhoneAlt className="footer_icon"/> +44 123456789
          </a>
        </div>


        <div className="conatct_method">
          <a href="mailto:bibinbabumj93@gmail.com ">
            <MdOutlineEmail className="footer_icon" /> test@gmail.com
          </a>
          <a href="mailto:bibinbabumj93@gmail.com ">
            <MdOutlineEmail className="footer_icon"/> test@gmail.com
          </a>
          <a href="mailto:bibinbabumj93@gmail.com ">
            <MdOutlineEmail className="footer_icon"/> test@gmail.com
          </a>
        </div>
        <div className="conatct_method">
        <a href="mailto:bibinbabumj93@gmail.com ">
            <IoLocation className="footer_icon"/> RH123PQ,HORSHAM
          </a>
        </div>
      </div>

      <div className="footer_copyright">
        <small>
          {" "}
          &copy; Ideal Care Solutions Ltd. All rights reserved 2024
        </small>
      </div>
    </footer>
  );
};

export default Footer;
