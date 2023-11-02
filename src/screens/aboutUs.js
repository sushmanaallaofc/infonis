import React, { useState, useRef, useEffect } from "react";
import { connect } from 'react-redux';
import '../styles/screens/AboutUs.css';
import spotlightImg1 from '../assets/screens/spotlight-desktop-banner1.webp';
import spotlightImg2 from '../assets/screens/spotlight-desktop-banner2.webp';
import spotlightImg3 from '../assets/screens/spotlight-desktop-banner3.webp';
import spotlightCardImg1 from '../assets/screens/spotlight-icon01.webp';
import spotlightCardImg2 from '../assets/screens/spotlight-icon02.webp';
import spotlightCardImg3 from '../assets/screens/spotlight-icon03.webp';
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp, faArrowAltCircleDown, faArrowDown, faArrowRight, faCheckCircle, faPlayCircle, faTicketSimple, faUpDown, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";const AboutUs = ({dispatch}) => {
  const FAQWrapper = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
`;

const FAQQuestion = styled.h3`
  font-size: 18px;
`;

const FAQItem = styled.div`
 border-bottom:1px solid #EEEEEE;
  padding-top: 20px;
  padding-bottom:20px;
  cursor: pointer;
`;

const FAQAnswer = styled.p`
  font-size: 16px;
  display: ${(props) => (props.isVisible ? "block" : "none")};
  transition: all 0.2s ease-in-out;
`;



const DropdownSymbol = ({ isVisible }) => {
  return (
    <span>
      {isVisible ? <FontAwesomeIcon icon={faAngleUp} /> :  <FontAwesomeIcon icon={faAngleDown} />}
    </span>
  );
};
const [faqs, setFaqs] = React.useState([
  {
    question: "Can brands that already sell on Blinkit switch over to Blinkit spotlight?",
    answer: "Yes, please reach out to your point of contact at Blinkit. They will put you in touch with our Blinkit spotlight team. Each brand will be evaluated by the Blinkit spotlight team to identify eligibility of the transition.",
    isVisible: false,
  },
  {
    question: "Do I need to pay a fee to be a part of the program?",
    answer: "No, there is no fee to participate in the Blinkit spotlight program.",
    isVisible: false,
  },
  {
    question: "Can I choose the locations to operate in?",
    answer: "Yes, you can choose the locations to operate in. However, the Blinkit spotlight team will need to approve your selection.",
    isVisible: false,
  },
  {
    question: "Does Blinkit spotlight guarantee an increase in sales?",
    answer: "Blinkit spotlight can help you to increase your sales, but there is no guarantee. The success of your program will depend on a number of factors, including the quality of your products and services, your marketing efforts, and the overall demand for your products and services.",
    isVisible: false,
  },
]);

const toggleAnswer = (faqIndex) => {
  const updatedFaqs = [...faqs];

  // Close all other answers
  updatedFaqs.forEach((faq, index) => {
    if (index !== faqIndex) {
      faq.isVisible = false;
    }
  });

  // Toggle the visibility of the current answer
  updatedFaqs[faqIndex].isVisible = !updatedFaqs[faqIndex].isVisible;

  setFaqs(updatedFaqs);
};
  return (
    <>
    <div className="fieldItem">
        <div className="fieldItemHeader">
        Join India's most loved grocery shopping platform
        </div>
        <p style={{fontWeight:400,fontSize:16,color:'#1F1F1F'}}>
        At Blinkit, we know what it takes for young brands to attract and connect with customers across segments. In addition, we have the ability to help nurture brands with logistics support that can take them to the next level
        </p>
        <div className="d-flex justify-content-between">
           <div className="fieldItemImg">
            <div className="paragraphCard">
              <div className="paraCardImgCont">
             <img className="paraCardImg" src={spotlightCardImg1}/>
              </div>
              <div className="paraCardTitle">
                  Grow your business
              </div>
              <div className="paraCardContent">
                <div className="d-flex">
              <FontAwesomeIcon icon={faCheckCircle} color="green" style={{marginRight:10}}/>
                  <div >
                  targeted placement on marketing assets
                  </div>
                </div>
                <div className="d-flex">
              <FontAwesomeIcon icon={faCheckCircle} color="green" style={{marginRight:10}}/>
                  <div >
                  ability to reach a larger geography with Blinkit footprint
                  </div>
                </div>
                  
              </div>
            </div>
           </div>
           <div className="fieldItemImg">
            <div className="paragraphCard">
            <div className="paraCardImgCont">
             <img className="paraCardImg" src={spotlightCardImg2}/>
              </div>
              <div className="paraCardTitle">
                  Guidance from experts
              </div>
              <div className="paraCardContent">
              <div className="d-flex">
              <FontAwesomeIcon icon={faCheckCircle} color="green" style={{marginRight:10}}/>
                  <div >
                  data backed insights on how to improve product quality and packaging
                  </div>
                </div>
                <div className="d-flex">
              <FontAwesomeIcon icon={faCheckCircle} color="green" style={{marginRight:10}}/>
                  <div >
                  opportunities to co-create products with Blinkit
                  </div>
                </div>
              </div>
            </div>
           </div>
           <div className="fieldItemImg">
            <div className="paragraphCard">
            <div className="paraCardImgCont">
             <img className="paraCardImg" src={spotlightCardImg3}/>
              </div>
              <div className="paraCardTitle">
                  How we support you
              </div>
              <div className="paraCardContent">
              <div className="d-flex">
              <FontAwesomeIcon icon={faCheckCircle} color="green" style={{marginRight:10}}/>
                  <div >
                  a Infinis team will guide you from onboarding                       </div>
                </div>
                <div className="d-flex">
              <FontAwesomeIcon icon={faCheckCircle} color="green" style={{marginRight:10}}/>
                  <div >
                  we will get you cost efficiencies across marketing, supply chain and sourcing                  
                </div>
                  
                 </div>
              </div>
            </div>
           </div>
           
        </div>
     </div>
     <div className="fieldItem">
        <div className="fieldItemHeader">
          Some of the brands featured on spotlight
        </div>
        <div className="d-flex justify-content-between">
           <div className="fieldItemImg">
            <img className="img-responsive"  src={spotlightImg1} />
           </div>
           <div className="fieldItemImg">
            <img className="img-responsive" src={spotlightImg2} />
           </div>
           <div className="fieldItemImg">
            <img className="img-responsive" src={spotlightImg3} />
           </div>
        </div>
     </div>
     <div className="fieldItem">
        <div className="fieldItemHeader">
          Frequently asked questions
        </div>
        <FAQWrapper>

      {faqs.map((faq, index) => (
        <FAQItem key={faq.question} onClick={() => toggleAnswer(index)}>
          <div className="d-flex justify-content-between">
          <FAQQuestion>{faq.question}</FAQQuestion>
          <DropdownSymbol isVisible={faq.isVisible} />
          </div>
          <FAQAnswer isVisible={faq.isVisible}>{faq.answer}</FAQAnswer>
        </FAQItem>
      ))}
    </FAQWrapper>
     </div>
    </>
  );
};

export default connect() (AboutUs);
