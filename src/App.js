import React, { useEffect } from "react";
import MainAbout from "./components/about/MainAbout";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainService from "./components/services/MainService";
import WorkMain from "./components/work/WorkMain";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when route changes
  }, [pathname]);
  return [];
};

const App = () => {
  return (
    <Router>
      <ScrollToTop/>
      <Nav />
      <Routes>
      <Route path="/"  element ={<Home/>} />
        <Route path="/home"  element ={<Home/>} />
        <Route path="ideal_care_solution/about"  element={<MainAbout/>} />
        <Route path="/main_servies"  element={<MainService/>} />
        <Route path="/main_work"  element={<WorkMain/>} />
        <Route path="/contact"  element={<Contact/>} />
      </Routes>
      <Footer/>
    </Router>

    // <>
    //
    //   <Home/>
    // </>
  );
};

export default App;
