import React, { useState, useRef, useEffect } from "react";
import { connect } from 'react-redux';
import '../styles/screens/SpotLight.css';
import spotlightImg1 from '../assets/screens/spotlight-desktop-banner1.webp';
import spotlightImg2 from '../assets/screens/spotlight-desktop-banner2.webp';
import spotlightImg3 from '../assets/screens/spotlight-desktop-banner3.webp';
import spotlightCardImg1 from '../assets/screens/spotlight-icon01.webp';
import spotlightCardImg2 from '../assets/screens/spotlight-icon02.webp';
import spotlightCardImg3 from '../assets/screens/spotlight-icon03.webp';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextField, Button, Checkbox, Typography } from "@mui/material";
import styled from "@emotion/styled";
import spotLight from "../assets/images/spotlight.png";

import { faAngleDown, faAngleUp, faArrowAltCircleDown, faArrowDown, faArrowRight, faCheckCircle, faPlayCircle, faTicketSimple, faUpDown, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const SpotLight = ({dispatch}) => {
  const MainContainer = styled.div({
    width: "100%",
    background: "linear-gradient(180deg,#F8CB46 0,#318616 100%)",
    padding: "10px",
    marginBottom:"45px"
  });
  
  const Container = styled.div({
    display: "flex",
    flexDirection: "column",
    background: "white",
    padding: "32px",
    borderRadius: "10px",
  });
  
  const Row = styled.div({
    display: "flex",
    margin: "auto",
    maxWidth: "980px",
    width: "100%",
  });
  
  const Column = styled.div({
    flex: "1",
    margin: "0 10px",
  });
  
  const SubRow = styled.div({
    display: "flex",
    flexDirection: "row",
  
    flex: 1,
    margin: "10px",
  });
  const StyledButton = styled(Button)({
    width: "200px",
    marginRight: "10px",
    backgroundColor: "#171515",
    transition: "background-color 0.5s ease, box-shadow 0.5s ease",
    textTransform: "lowercase",
  
    "&:hover": {
      backgroundColor: "#000",
      color: "#fff",
      boxShadow: "0 0 15px rgba(0, 0, 0, 0.7)",
    },
  });
  
  const CheckboxContainer = styled.label({
    display: "flex",
    alignItems: "center",
    border: "1px solid #000",
    padding: "8px",
    borderRadius: "5px",
    flex: "1",
    cursor: "pointer",
  });
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
const [formData, setFormData] = useState({
  name: "",
  email: "",
  brandName: "",
  location: "",
  inception: "",
  marketPlace: "",
});
const [errors, setErrors] = useState({});

const validateEmail = (email) => {
  return /\S+@\S+\.\S+/.test(email);
};

const validateForm = () => {
  let valid = true;
  const newErrors = {};

  if (!formData.name) {
    newErrors.name = "Name is required";
    valid = false;
  }
  if (!formData.email || !validateEmail(formData.email)) {
    newErrors.email = "Enter a valid email address";
    valid = false;
  }
  if (!formData.brandName) {
    newErrors.brandName = "Brand name is required";
    valid = false;
  }
  if (!formData.inception) {
    newErrors.inception = "Enter year of inception";
    valid = false;
  }
  if (!formData.location) {
    newErrors.location = "Tell us about your brand and locations present in";
    valid = false;
  }
  if (!formData.marketPlace) {
    newErrors.marketPlace =
      "Details of other marketplaces operating on (if any) are required";
    valid = false;
  }

  setErrors(newErrors);
  return valid;
};

const handleSignUp = () => {
  if (validateForm()) {
    console.log("Form submitted successfully!");
  } else {
    console.log("Form validation failed. Please check the errors.");
  }
};

const handleInputChange = (fieldName, value) => {
  setFormData((prevData) => ({
    ...prevData,
    [fieldName]: value,
  }));
};
  return (
    <>
    <MainContainer>
    <div className="fieldItem">
       
       
      <div className="row">
        <div className="col-lg-6">
          <div>
            <img
            className="img-fluid"
              src={spotLight}
              alt="Description"
              
            />
            <Typography
              variant="h4"
              style={{ fontSize: "40px", fontWeight: "700", color: "#fff" }}
            >
              Spotlight
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ fontSize: "18px", color: "#fff" }}
            >
              Join a growing list of entrepreneurs and emerging brands to
              showcase your products on Infinis
            </Typography>
          </div>
        </div>
        <div  className="col-lg-6">
          <Container>
            <Typography
              variant="h6"
              style={{ fontSize: "24px", fontWeight: "700" }}
            >
              Highlight your products on Infinis
            </Typography>
            <Typography variant="subtitle1" style={{ fontSize: "16px" }}>
              To apply for this program, please fill this form
            </Typography>
            <div className="row " style={{marginLeft:1,marginBottom:10}}>
              <div className="col-sm-6 mb-sm-0 mb-2">
                <TextField
                  required
                  label="Name"
                  variant="outlined"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
                {errors.name && (
                  <Typography variant="body2" color="error">
                    {errors.name}
                  </Typography>
                )}
              </div>
              <div className="col-sm-6 mb-sm-0 mb-2">
                <TextField
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  label="Email"
                  variant="outlined"
                  value={formData.email}
                />
                {errors.email && (
                  <Typography variant="body2" color="error">
                    {errors.email}
                  </Typography>
                )}
              </div>
            </div>
            <div className="row " style={{marginLeft:1}}>
              <div className="col-sm-6 mb-sm-0 mb-2">
                <TextField
                  label="Name of the Brand"
                  variant="outlined"
                  value={formData.brandName}
                  onChange={(e) =>
                    handleInputChange("brandName", e.target.value)
                  }
                />
                {errors.brandName && (
                  <Typography variant="body2" color="error">
                    {errors.brandName}
                  </Typography>
                )}
              </div>
              <div className="col-sm-6  mb-sm-0 mb-2">
                <TextField
                  id="outlined-number"
                  label="Year of Inception"
                  type="number"
                  value={formData.inception}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(e) =>
                    handleInputChange("inception", e.target.value)
                  }
                />
                {errors.inception && (
                  <Typography variant="body2" color="error">
                    {errors.inception}
                  </Typography>
                )}
              </div>
            </div>
            <TextField
              id="outlined-multiline-flexible"
              label="Tell us about your brand and locations present in"
              multiline
              maxRows={4}
              value={formData.location}
              style={{ margin: "10px" }}
              onChange={(e) => handleInputChange("location", e.target.value)}
            />
            {errors.location && (
              <Typography variant="body2" color="error">
                {errors.location}
              </Typography>
            )}
            <TextField
              required
              id="outlined-multiline-flexible"
              label="Details of other marketplaces operating on (if any)"
              multiline
              maxRows={4}
              value={formData.marketPlace}
              style={{ margin: "10px" }}
              onChange={(e) => handleInputChange("marketPlace", e.target.value)}
            />
            {errors.marketPlace && (
              <Typography variant="body2" color="error">
                {errors.marketPlace}
              </Typography>
            )}
            <div className="row" style={{margin:10}}>
              <StyledButton className="col-md-6 mb-md-0 mb-2"
                variant="contained"
                color="primary"
                onClick={handleSignUp}
                style={{ height: "50px" }}
              >
                Signup to See More
              </StyledButton>
              <CheckboxContainer className="col-md-6" style={{ height: "50px" }}>
                <Checkbox style={{ color: "black" }} />
                <span>I'm not a robot</span>
              </CheckboxContainer>
            </div>
          </Container>
        </div>
      </div>
     </div>
    </MainContainer>
    <div className="fieldItem">
        <div className="fieldItemHeader">
        Join India's most loved grocery shopping platform
        </div>
        <p style={{fontWeight:400,fontSize:16,color:'#1F1F1F'}}>
        At Blinkit, we know what it takes for young brands to attract and connect with customers across segments. In addition, we have the ability to help nurture brands with logistics support that can take them to the next level
        </p>
        <div className="d-lg-flex justify-content-between">
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

export default connect() (SpotLight);
