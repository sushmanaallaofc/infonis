import React, { useState } from "react";
import { connect } from "react-redux";
import {
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import blinkitMobile from "../../src/assets/images/blinkit-mobile.png";
import playStore from "../../src/assets/images/playstore.jpg";
import appStore from "../../src/assets/images/appstore.jpg";

const MainDiv = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "60vh",
});

const ChildDiv = styled.div({
  display: "flex",
  flexDirection: "column",
  marginRight: "20px",
});

const FlexContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginBottom: "30px",
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

const MobileScreen = ({ dispatch }) => {
  const [value, setValue] = useState("Email");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");



  const handleClick = (event) => {
    const inputValue = event.target.value;
    console.log(inputValue);
    if (value === "Email" && !validateEmail(email)) {
      setError("Enter a valid email address");
      return;
    } else if (value === "Phone" && !validatePhoneNumber(phoneNumber)) {
      setError("Enter a valid phone number (10 digits)");
      return;
    }
  };
  const validateEmail = (email) => {
    // Email validation logic (can be a regular expression or any other validation method)
    // Return true if the email is valid, false otherwise
    return /\S+@\S+\.\S+/.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    // Phone number validation logic (checking length for 10 digits)
    // Return true if the phone number is valid, false otherwise
    return phoneNumber.length === 10;
  };
  const handleChange = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue)
    if (inputValue == 'Email'){
      setPhoneNumber('');
    }
    else if(inputValue == 'Phone'){
      setEmail('')
    }
  }

  return (
    <div>
      <MainDiv>
        <img
          src={blinkitMobile}
          alt="Description"
          style={{ marginRight: "20px", height: "100%" }}
        />
        <div style={{ margin: "50px" }}>
          <Typography variant="h3" gutterBottom>
            Get the Infinis app now
          </Typography>
          <Typography variant="h5" gutterBottom>
            We will send you a link, open it on your phone to download the app
          </Typography>
          <ChildDiv>
            <FormControl component="fieldset">
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
                style={{ flexDirection: "row" }}
              >
                <FormControlLabel
                  value="Email"
                  control={<Radio />}
                  label="Email"
                />
                <FormControlLabel
                  value="Phone"
                  control={<Radio />}
                  label="Phone"
                />
              </RadioGroup>
            </FormControl>
            <FlexContainer>
              <div>
              <TextField
                id="outlined-multiline-flexible"
                label={value === "Email" ? "Email" : "Phone"}
                multiline
                maxRows={4}
                variant="outlined"
                style={{
                  marginRight: "10px",
                  width: "250px",
                }}
                value={value === "Email" ? email : phoneNumber}
                onChange={(e) => (value === "Email" ? setEmail(e.target.value) : setPhoneNumber(e.target.value))}
              />
              {error && (
                <Typography variant="body2" color="error">
                  {error}
                </Typography>
              )}
              </div>
              
              <StyledButton
                variant="contained"
                color="primary"
                onClick={handleClick}
                style={{ height: "56px" }}
              >
                Share app link
              </StyledButton>
            </FlexContainer>
            
          </ChildDiv>
          <Typography variant="caption" display="block" gutterBottom>
            Download App from
          </Typography>
          <FlexContainer>
            <img
              src={playStore}
              alt="Description"
              style={{ marginRight: "20px", cursor: "pointer", height: '42px'}}
            />
            <img
              src={appStore}
              alt="Description"
              style={{ marginRight: "20px", height: '42px'}}
            />
          </FlexContainer>
        </div>
      </MainDiv>
    </div>
  );
};

export default connect()(MobileScreen);
