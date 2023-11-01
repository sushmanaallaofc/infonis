import React, { useState, useRef, useEffect } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import '../styles/screens/Home.css';
const Home = ({dispatch}) => {

return (
    <>
      <div style={{padding:20}}>
       
       <div className="catContainer mb-4">
        <div className="catHeading">
          Best Places to Eat Across Cities
        </div>
        <div className="catList">
          <div>
          <div className="d-lg-flex">
            <div className="d-flex catMiniList">

              <div className=" catListItem">
                <span>
                Best Restaurants in Bangalore
                </span>
                
              </div>
              <div className=" catListItem">
                <span>

                Best Restaurants in Pune
                </span>
              </div>
            </div>
            <div className="d-flex catMiniList">

              <div className=" catListItem">
                <span>
                Best Restaurants in Mumbai
                </span>
                
              </div>
              <div className=" catListItem">
                <span>
                Best Restaurants in Delhi
                </span>
              </div>
            </div>
              
            </div>
            <div className="d-lg-flex">
            <div className="d-flex catMiniList">

              <div className=" catListItem">
                <span>
                Best Restaurants in Hyderabad
                </span>
                
              </div>
              <div className=" catListItem">
                <span>

                Best Restaurants in Jaipur
                </span>
              </div>
            </div>
            <div className="d-flex catMiniList">

              <div className=" catListItem">
                <span>
                Best Restaurants in Kolkata
                </span>
                
              </div>
              <div className=" catListItem">
                <span>
                Show More
                </span>
              </div>
            </div>
              
            </div>
            <div>

            </div>
          </div>
        </div>
       </div>

       <div className="catContainer">
        <div className="catHeading">
          Best Cuisines Near Me
        </div>
        <div className="catList">
          <div>
          <div className="d-lg-flex">
            <div className="d-flex catMiniList">

              <div className=" catListItem">
                <span>
                Chinese Restaurant Near Me
                </span>
                
              </div>
              <div className=" catListItem">
                <span>

                South Indian Restaurant Near Me
                </span>
              </div>
            </div>
            <div className="d-flex catMiniList">

              <div className=" catListItem">
                <span>
                Indian Restaurant Near Me
                </span>
                
              </div>
              <div className=" catListItem">
                <span>
                Kerala Restaurant Near Me
                </span>
              </div>
            </div>
              
            </div>
            <div className="d-lg-flex">
            <div className="d-flex catMiniList">

              <div className=" catListItem">
                <span>
                Korean Restaurant Near Me
                </span>
                
              </div>
              <div className=" catListItem">
                <span>

                Italian Restaurant Near Me
                </span>
              </div>
            </div>
            <div className="d-flex catMiniList">

              <div className=" catListItem">
                <span>
                North Indian Restaurant Near Me
                </span>
                
              </div>
              <div className=" catListItem">
                <span>
                Show More
                </span>
              </div>
            </div>
              
            </div>
            <div>

            </div>
          </div>
        </div>
       </div>

      </div>
      
    </>
  );
};

export default connect() (Home);
