// import React, { useState, useRef, useEffect } from "react";
import { connect } from 'react-redux';
import "../styles/screens/contactUS.css"
import attherate from "../assets/components/atarate.png"
import address from "../assets/components/address.png"
import GoogleMapReact from 'google-map-react';

const ContactUs = ({dispatch}) => {
 

  return (
    <div style={{background:'#F5F5F5',padding:10}}>
      Contact Us
    </div>
  );
};

export default connect() (ContactUs);
