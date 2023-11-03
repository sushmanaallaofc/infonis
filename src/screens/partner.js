import React, { useState, useRef, useEffect } from "react";
import { connect } from 'react-redux';
import "../styles/screens/Partner.css";
import { Carousel } from "react-bootstrap";
import img1 from '../assets/screens/Ajay Ramani_mobi_1.webp';
import img2 from '../assets/screens/Group 23362_0.webp';
import img3 from '../assets/screens/testimonial-durga-bose-desktop_0.webp';
import { useWindowSize } from 'react-use';
import partnerImg from '../assets/screens/partner-express.webp'
import partnerSeller from '../assets/screens/partner-local.webp';
import partnerSpotlight from '../assets/screens/partner-spotlight_0.webp';
import partnerwarehouse from '../assets/screens/partner-warehouse.webp';
import partnerDeliver from '../assets/screens/partner-deliver.webp';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import partnerYAsh from '../assets/screens/partner-yash.webp';
import partnerVikram from '../assets/screens/partner-vikram.webp';
import partnerKapil from '../assets/screens/partner-kapil_0.webp';
import { TextField, Button, Checkbox, Typography } from "@mui/material";
import styled from "@emotion/styled";
import partnerImage from "../assets/images/partner-form.png";
const MainContainer = styled.div({
  width: "100%",
  backgroundImage: `url(${partnerImage})`,
  backgroundSize: "cover",
  padding: "10px",
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
  flexDirection: "row",
  justifyContent: "center",
  margin: "auto",
  alignItems: "center",
  maxWidth: "980px",
  flex: "1",
});

const SubRow = styled.div({
  margin: "10px",
  flex: "1",
});

const MiniContainer = styled.div({
  flex: "1",
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

const Partner = ({dispatch}) => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    cityName: "",
    state: "",
  });
  const [errors, setErrors] = useState({});
  const [isChecked, setIsChecked] = useState(false);

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    // Phone number validation logic (checking length for 10 digits)
    // Return true if the phone number is valid, false otherwise
    return phoneNumber.length === 10;
  };

  const handleCheckboxChange = () => {
    console.log(isChecked);
    setIsChecked(!isChecked);
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Validate each field and update errors object
    if (!formData.name) {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (!formData.phoneNumber || !validatePhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = "Enter valid phone Number";
      valid = false;
    }
    if (!formData.email || !validateEmail(formData.email)) {
      newErrors.email = "Enter a valid email address";
      valid = false;
    }
    if (!formData.cityName) {
      newErrors.cityName = "Enter your city name";
      valid = false;
    }
    if (!formData.state) {
      newErrors.state = "enter your state name";
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
  {'content':"I am working with a world class team that is singularly committed to making quick commerce big in India. Today I am running three 'dark stores' with Blinkit in Mumbai. My orders have grown from ~100 per day to over 3500 orders per day",
    'name':'Ajay Ramani',
     'profession':'store partner',
     'img':img1
},
{'content':'I still remember the day we started our journey with our first store in Chhatarpur. We eventually gained more confidence and belief in each other by adding two more stores in Green Park and Hauz Khas. We hope to keep growing together',
    'name':'Amit Gupts',
     'profession':'store partner',
     'img':img2
},
{'content':'Working in the Blinkit warehouse is a great opportunity in these times. We take safety precautions seriously, get transportation services and also make a good salary every month',
    'name':'Durga Bode',
     'profession':'warehouse partner',
     'img':img3
}
]
const cards = [
  {"image": partnerYAsh},
  {"image": partnerVikram},
  {"image": partnerKapil},
  {"image": partnerYAsh},
  {"image": partnerVikram},
  {"image": partnerKapil}

];
const Article = ({ data }) => {
  const { image, title, subtitle } = data;

  return (
    <div className="snip1584">
      <img src={image} alt={title} />
      {/* <figcaption>
        <h3>{title}</h3>
        <h5>{subtitle}</h5>
      </figcaption> */}
      <a href="#"></a>
    </div>
  );
};
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
const News = ({ data }) => {
  const CustomPrevArrow = (props) => (
    <button {...props} className="custom-prev-arrow">
      {"<"}
    </button>
  );
  const CustomNextArrow = (props) => (
    <button {...props} className="custom-next-arrow">
      {">"}
    </button>
  );
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow:showControls ? 3 : showCards ? 1 : 2 ,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const newsTemplate = data.length > 0 ? (
    data.map((item, index) => (
      <div key={index}>
        <Article data={item} />
      </div>
    ))
  ) : (
    <p>Please add some cards</p>
  );

  return (
    <div className='news'>
      <Slider  {...settings}>{newsTemplate}</Slider>
    </div>
  );
};

  return (
    <>
      <div style={{background:'#F5F5F5'}}>
        <div className="imgFieldItem" style={{background: 'linear-gradient(180deg,#F8CB46 0,#318616 100%)'}}>
      <div className="aboutUs">
        </div>
        <div className="textInImg">
         <div>Shape the future of instant commerce</div>
        </div>
        </div>
        <div className="fieldItem">
        <div className="fieldItemHeader">
        Come build with us
        </div>
        <p style={{fontWeight:400,fontSize:16,color:'#1F1F1F'}}>
        We believe that our tech stack and operational backbone can empower thousands of local entrepreneurs to serve the needs of millions of Indians. Our vision of a marketplace where anyone can open their storefront on Blinkit, will enable us to deliver anything from groceries, to medicines, to beauty and health care products or even electronic items within minutes. For this we are looking for passionate entrepreneurs who want an opportunity to join the instant-commerce revolution in India. If this is exciting partner with us!
        </p>
       
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
                <h3>{item.name}</h3>
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
        Opportunities to grow with Infinis
        </div>
       <div className="card mx-4 mx-lg-0 text-white" style={{background: 'linear-gradient(180deg,#F8CB46 0,#318616 100%)',border:'none' }}>
          <div className="d-lg-flex d-block bgGradient">
          <div className="bgGradientPara1">
          <div className="bgGradientPara1Text">
                  <h3>Partner Store</h3>
                  <div>Run mini-warehouses</div>
                  <div>(partner stores) for Infinis</div>
                  <div>know more</div>
                </div>
               </div>
               <div className="bgGradientImgCont" >
                <img className="bgGradientImg"  src={partnerImg} />
               </div>
              
          </div>
          <div className="bgGradientPara2">
                <div className="bgGradientPara2Text">
                  <h3>Partner Store</h3>
                  <div>Run mini-warehouses</div>
                  <div>(partner stores) for Infinis</div>
                  <div>know more</div>
                </div>
               </div>
       </div>
       
     </div>

     <div className="fieldItem">
        
        <div className="d-lg-flex d-none justify-content-between">
        <div className="card  mr-0 mx-4  mb-4 mb-lg-0 mx-lg-2  text-white" style={{background: 'linear-gradient(180deg,#F8CB46 0,#318616 100%)',border:'none' }}>
               <div className="" >
                <img className="img-fluid"  src={partnerSeller} />
                <div className="">
                <div className="p-4">
                  <h3>Seller</h3>
                  <div>Sell products from your shop from different locations.</div> 
                 
                </div>
               </div>
               </div>          
       </div>
       <div className="card  mr-0 mx-4  mb-4 mb-lg-0 mx-lg-2  text-white" style={{background: 'linear-gradient(180deg,#F8CB46 0,#318616 100%)',border:'none' }}>
               <div className="" >
                <img className="img-fluid"  src={partnerSpotlight} />
                <div className="">
                <div className="p-4">
                  <h3>Spotlight</h3>
                  <div>To increase sales of your brands join our accelerator program</div>
    
                  <div>know more</div>
                </div>
               </div>
               </div>          
       </div>
       <div className="card mr-0 mx-4  mb-4 mb-lg-0 mx-lg-2  text-white" style={{background: 'linear-gradient(180deg,#F8CB46 0,#318616 100%)',border:'none' }}>
               <div className="" >
                <img className="img-fluid"  src={partnerwarehouse} />
                <div className="">
                <div className="p-4">
                  <h3>Warehouse</h3>
                  <div>Pick, pack and sort orders at a Blinkit warehouse</div>
                  
                  <div>know more</div>
                </div>
               </div>
               </div>          
       </div>
       <div className="card mr-0 mx-4  mb-4 mb-lg-0 mx-lg-2  text-white" style={{background: 'linear-gradient(180deg,#F8CB46 0,#318616 100%)',border:'none' }}>
               <div className="" >
                <img className="img-fluid"  src={partnerDeliver} />
                <div className="">
                <div className="p-4">
                  <h3>Deliver</h3>
                  <div>Deliver items from a Blinkit partner store to customers</div>
                  
                  <div>know more</div>
                </div>
               </div>
               </div>          
       </div>
        </div>
      
       
     </div>
     <div className="fieldItem mb-lg-0">
       
       <div className="card mx-4 mx-lg-0 text-white" style={{background: 'linear-gradient(180deg,#F8CB46 0,#318616 100%)',border:'none' }}>
          <div className="d-lg-none d-flex d-block bgGradient">
         
               <div className="bgGradientImgCont" >
                <img className="bgGradientImg"  src={partnerSeller} />
               </div>
              
          </div>
          <div className="bgGradientPara2">
                <div className="bgGradientPara2Text">
                
                  <h5>Seller</h5>
                  <div>Sell products from your shop from different locations in just 4 simple steps
and earn money on every purchase.</div> 
                 
                </div>
               
               </div>
       </div>
       
     </div>
     <div className="fieldItem mb-lg-0">
       
       <div className="card mx-4 mx-lg-0 text-white" style={{background: 'linear-gradient(180deg,#F8CB46 0,#318616 100%)',border:'none' }}>
          <div className="d-lg-none d-flex d-block bgGradient">
          
               <div className="bgGradientImgCont" >
                <img className="bgGradientImg"  src={partnerSpotlight} />
               </div>
              
          </div>
          <div className="bgGradientPara2">
                <div className="bgGradientPara2Text">
                <h5>Spotlight</h5>
                  <div>To increase sales of your brands join our accelerator program</div>
    
                  <div>know more</div>
                </div>
               </div>
       </div>
       
     </div>
     <div className="fieldItem mb-lg-0">
       
       <div className="card mx-4 mx-lg-0 text-white" style={{background: 'linear-gradient(180deg,#F8CB46 0,#318616 100%)',border:'none' }}>
          <div className="d-lg-none d-flex d-block bgGradient">
          
               <div className="bgGradientImgCont" >
                <img className="bgGradientImg"  src={partnerwarehouse} />
               </div>
              
          </div>
          <div className="bgGradientPara2">
                <div className="bgGradientPara2Text">
                <h5>Warehouse</h5>
                  <div>Pick, pack and sort orders at a Blinkit warehouse</div>
                  
                  <div>know more</div>
                </div>
               </div>
       </div>
       
     </div>
     <div className="fieldItem mb-lg-0">
       
       <div className="card mx-4 mx-lg-0 text-white" style={{background: 'linear-gradient(180deg,#F8CB46 0,#318616 100%)',border:'none' }}>
          <div className="d-lg-none d-flex d-block bgGradient">
         
               <div className="bgGradientImgCont" >
                <img className="bgGradientImg"  src={partnerDeliver} />
               </div>
              
          </div>
          <div className="bgGradientPara2">
                <div className="bgGradientPara2Text">
                <h5>Deliver</h5>
                  <div>Deliver items from a Blinkit partner store to customers</div>
                  
                  <div>know more</div>
                </div>
               </div>
       </div>
       
     </div>
     <div className="fieldItem">
        <div className="fieldItemHeader">
       Success Stories
        </div>
        <div className='app'>
    <News data={cards} />
  </div>
       
     </div>
     <MainContainer>
     <div className="fieldItem">
      <div className="row">
        <div className="col-lg-6 col-12" style={{margin:'auto'}}>
          <Typography
            style={{ fontSize: "40px", fontWeight: "700" }}
            variant="h3"
            gutterBottom
          >
            Got a cool brand and want to list it on Infinis?
          </Typography>

          <Typography
            sx={{
              fontSize: "18px",
              "& > span": {
                fontWeight: "bold",
              },
            }}
            variant="subtitle1"
            gutterBottom
          >
            Write to us at <span>sellwithus@infinis.com</span> — you can also
            drop us an email at <span>info@infinis.com</span> to know more about
            us.
          </Typography>
        </div>
        <div className="col-lg-6 col-12">
          <Container>
            <SubRow>
              <TextField
                fullWidth
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
            </SubRow>
            <SubRow>
              <TextField
                fullWidth
                onChange={(e) =>
                  handleInputChange("phoneNumber", e.target.value)
                }
                required
                label="Phone Number"
                variant="outlined"
                value={formData.phoneNumber}
              />
              {errors.phoneNumber && (
                <Typography variant="body2" color="error">
                  {errors.phoneNumber}
                </Typography>
              )}
            </SubRow>
            <SubRow>
              <TextField
                fullWidth
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
            </SubRow>
            <SubRow>
              <TextField
                fullWidth
                required
                label="City Name"
                value={formData.cityName}
                variant="outlined"
                onChange={(e) => handleInputChange("cityName", e.target.value)}
              />
              {errors.cityName && (
                <Typography variant="body2" color="error">
                  {errors.cityName}
                </Typography>
              )}
            </SubRow>
            <SubRow>
              <TextField
                fullWidth
                required
                label="State"
                variant="outlined"
                value={formData.state}
                onChange={(e) => handleInputChange("state", e.target.value)}
              />
              {errors.state && (
                <Typography variant="body2" color="error">
                  {errors.state}
                </Typography>
              )}
            </SubRow>
            <div className="row" style={{ display: "flex", flexDirection: "row",margin:10}}>
              <StyledButton className="col-sm-6 col-12 mb-sm-0 mb-2"
                variant="contained"
                color="primary"
                onClick={handleSignUp}
                style={{ height: "50px" }}
              >
                Contact me
              </StyledButton>
              <CheckboxContainer className="col-sm-6 col-12" style={{ height: "50px" }}>
                <Checkbox style={{ color: "black" }} />
                <span>I'm not a robot</span>
              </CheckboxContainer>
            </div>
          </Container>
        </div>
      </div>
      </div>
    </MainContainer>
      </div>
    </>
  );
};

export default connect() (Partner);
