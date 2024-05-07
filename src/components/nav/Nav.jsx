import React, { useCallback, useState } from "react";
import { FaHome } from "react-icons/fa";
import "./nav.css";
import { Link } from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { IoIosInformationCircle } from "react-icons/io";
import { FaHandsHelping } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { BiSolidContact } from "react-icons/bi";




export const Nav = () => {
const [active, setActive] = useState("/");
const [isOpen,setIsOpen]=useState(false)


  //const [navName,setNavName]=useState("")

  const onStatusChange = useCallback(
    (status) => {
      setActive(status);
      //setNavName(name)
    },
    [setActive]
  );


  const togglemenu = useCallback(() => {
    setIsOpen(!isOpen)
    },
    [isOpen]
  );





  return (
    <nav className="nav-container">
      <a href="/" className="ideal_logo">
        IDEAL CARE SOLUTION
      </a>
{/* nav_menu  {navMob==="nav_menu"? "nav_menu":"nav_mobile" */}
      {/* <div className={!isOpen?"mob_menu":""}>  */}
      <div className={!isOpen?"nav_menu nav_active":"nav_menu"}> 
        <Link to="ideal_care_solution/home" className={active==="/home" ? "active":""}  onClick={() => onStatusChange("/home")}>
        <FaHome className="nav_icon" />
          Home
        </Link>

        <Link to="ideal_care_solution/about" className={active==="/about" ? "active":""}  onClick={() => onStatusChange("/about")}>
        <IoIosInformationCircle className="nav_icon" />
        About
        </Link>

        <Link to="ideal_care_solution/main_servies" className={active==="/main_servies" ? "active":""}  onClick={() => onStatusChange("/main_servies")}>
        <FaHandsHelping className="nav_icon" />
        Our Services
        </Link>


        <Link to="ideal_care_solution/main_work" className={active==="/main_work" ? "active":""}  onClick={() => onStatusChange("/main_work")}>
        <GrUserWorker className="nav_icon" />
        Work For Us
        </Link>

        <Link to="ideal_care_solution/contact" className={active==="/contact" ? "active":""}  onClick={() => onStatusChange("/contact")}>
        <BiSolidContact className="nav_icon" />
        Contact
        </Link>
      </div>

      <div className="mob_menu" onClick={togglemenu}>
      {!isOpen?<CiMenuBurger className="open"/> :<IoMdClose className="close"/>}

      </div>
    </nav>
  );
}

export default Nav
