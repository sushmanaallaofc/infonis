import React, { useState, useRef, useEffect } from "react";
import { connect } from 'react-redux';
import '../styles/screens/Delivery.css';
import deliveryCardImg1 from '../assets/screens/deliver-icon-earnings.webp';
import deliveryCardImg2 from '../assets/screens/deliver-icon-two-weeks-payout.webp';
import deliveryCardImg3 from '../assets/screens/deliver-icon-flexible-schedule.webp';
import deliveryCardImg4 from '../assets/screens/icon-two-weeks-payout.webp';
import { Carousel } from "react-bootstrap";
import img1 from '../assets/screens/Group 23335.webp';
import img2 from '../assets/screens/Group 23343.webp';
import img3 from '../assets/screens/Group 23344.webp';
import { useWindowSize } from 'react-use';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextField, Button, Checkbox, Typography } from "@mui/material";
import styled from "@emotion/styled";
import spotLight from "../assets/images/spotlight.png";

import { faAngleDown, faAngleUp, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Delivery = ({dispatch}) => {
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
    question: "Who are Blinkit delivery partners?",
    answer: "They are independent contractors who partner with Blinkit to pick up grocery items ordered by consumers on the Blinkit app and deliver those items to the convenience of the consumers doorstep. They use their own 2-wheelers to make these deliveries and pick their own schedule.",
    isVisible: false,
  },
  {
    question: "What are the work timings?",
    answer: "The working hours are flexible and you have an option to choose your own slots. We are happy to share more information at the time of your interview.",
        isVisible: false,
  },
  {
    question: "When will I start getting the orders to deliver?",
    answer: "Once you submit all the required documents and your registration is complete with us, our team will run a background verification check. On successful clearance of the same and completion of the onboarding and delivery training module, you will be eligible to start working and delivering orders with us.",
    isVisible: false,
  },
  {
    question: "What is the mode of payment?",
    answer: "The earnings you make will be transferred into your bank account on a weekly basis.",
    isVisible: false,
  },
  {
    question: "Is there any joining fees to get on-board as a Blinkit delivery partner?",
    answer: "Yes, a one-time joining fee is applicable during the on-boarding process. This is collected for various training and support purposes. More details will be shared at the time of your interview.",
    isVisible: false,
  },
  {
    question: "How much can I earn?",
    answer: "We follow the ‘per packet model’, wherein, your earnings will be based on every delivery you make. Plus, you also get additional incentives based on the weight you carry and the distance you cover.",
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
const data=[
  {'content':"My favourite part of the day is seeing our customers smile while receiving their orders from me",
    'name':'Alok Yadav',
     'img':img1
},
{'content':"I've taken up several jobs in my life but of all the places I've worked so far, I am the happiest working at Infinis",
    'name':'Husain Rizvi',
     'img':img2
},
{'content':'If you are sincere and a hard worker who understands the importance of time, you will witness a lot of growth at Blinkit',
    'name':'Manish Singh',
     'img':img3
}
]
const { width } = useWindowSize();
  const [showControls, setShowControls] = useState(false);
  const [showCards, setShowCards] = useState(false);
  useEffect(() => {
    if (width >= 992) {
      setShowControls(true);
    } else {
      setShowControls(false);
    }
    if(width < 768){
      setShowCards(true)
    }
    else{
      setShowCards(false)
    }
  }, [width]);
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
        Join India's most loved quick commerce platform
        </div>
        <p style={{fontWeight:400,fontSize:16,color:'#1F1F1F'}}>
        Become a delivery partner on your own schedule and get best in class pay, among other other benefits. We are looking for dedicated people who take pride in serving fellow Indians.        </p>
        <div className="d-lg-flex justify-content-between">
           <div className=" card mr-lg-3 fieldItemImg mb-4 mb-lg-0">
            <div className=" card-body mr-2 ">
              <div className="paraCardImgCont">
             <img className="paraCardImg" src={deliveryCardImg1}/>
              </div>
              <div className="paraCardTitle">
                  Monthly earnings
              </div>
              <div className="paraCardContent">
                <div >
                  <div style={{textAlign:'center'}} >
                  Earn upto ₹50,000 with incentives and other benefits
                  </div>
                </div>
                
                  
              </div>
            </div>
           </div>
           <div className=" card mr-lg-3 fieldItemImg mb-4 mb-lg-0">
            <div className=" card-body mr-2 ">
            <div className="paraCardImgCont">
             <img className="paraCardImg" src={deliveryCardImg2}/>
              </div>
              <div className="paraCardTitle">
              Weekly payout
              </div>
              <div className="paraCardContent">
                <div >
                  <div style={{textAlign:'center'}}>
                  Payment made every 7 days
                                    </div>
                </div>
              </div>
            </div>
           </div>
           <div className=" card mr-lg-3 fieldItemImg mb-4 mb-lg-0">
            <div className=" card-body mr-2 ">
            <div className="paraCardImgCont">
             <img className="paraCardImg" src={deliveryCardImg3}/>
              </div>
              <div className="paraCardTitle">
              Flexible schedule
              </div>
              <div className="paraCardContent">
             
                <div >
                  <div style={{textAlign:'center'}}>
                  Be your own boss; choose your work hours (4, 8 or 10 hours)
                                  </div>
                  
                 </div>
              </div>
            </div>
           </div>
           <div className=" card mr-lg-3 fieldItemImg mb-4 mb-lg-0">
            <div className=" card-body mr-2 ">
            <div className="paraCardImgCont">
             <img className="paraCardImg" src={deliveryCardImg4}/>
              </div>
              <div className="paraCardTitle">
              Insurance coverage
              </div>
              <div className="paraCardContent">
             
                <div >
                  <div style={{textAlign:'center'}}>
                  Deliver safe with our accidental and medical insurance
                                  </div>
                  
                 </div>
              </div>
            </div>
           </div>
           
        </div>
     </div>
     <div className="fieldItem">
        <div className="fieldItemHeader">
        Partner testimonials
        </div>
        <Carousel controls={showControls}  indicators={showControls ? false : true} data-bs-theme={showControls ? 'dark' :'light'} interval={showControls ? 10000 : 4000} slide={false}>
          {
            data.map((item)=>(
              <Carousel.Item>
                 <div className="card  text-white" style={{position:'relative',width:showControls?'80%':'98%',margin:'0 auto',background:"#707477"}}>
      <div className="card-body" >
      
                <div className="paraOnCard">
                <p >{item.content}</p>
                <h5>{item.name}</h5>
                </div>
                <img  src={item.img} class="img-fluid" />
      </div>
    </div>
              
            </Carousel.Item>
            ))
          }
    </Carousel>
        
       
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
          <FAQAnswer isVisible={faq.isVisible}>
          <div className="d-flex">
              <FontAwesomeIcon icon={faCheckCircle} color="green" style={{marginRight:10}}/>
                  <div >
                  {faq.answer}
                  </div>
                </div>
          </FAQAnswer>
        </FAQItem>
      ))}
    
    </FAQWrapper>
     </div>
    </>
  );
};

export default connect() (Delivery);
