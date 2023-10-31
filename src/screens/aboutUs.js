import React, { useState, useRef, useEffect } from "react";
import { connect } from 'react-redux';
import AboutUsImg from '../assets/screens/about-us_hero.jpg';
import '../styles/screens/AboutUs.css';
import Img from '../assets/screens/our_mission_1.png';
import publishImg from '../assets/screens/publish_0.svg';
import authorImg from '../assets/screens/authors_0.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
const AboutUs = ({dispatch}) => {

  return (
    <>
     <div>
      About Us
     </div>
    </>
  );
};

export default connect() (AboutUs);
