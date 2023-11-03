import React, { useState } from "react";
import { connect } from "react-redux";
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

const Partnership = ({ dispatch }) => {
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
  return (
    <MainContainer>
      <Row>
        <MiniContainer>
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
        </MiniContainer>
        <MiniContainer>
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
            <SubRow style={{ display: "flex", flexDirection: "row" }}>
              <StyledButton
                variant="contained"
                color="primary"
                onClick={handleSignUp}
                style={{ height: "50px" }}
              >
                Contact me
              </StyledButton>
              <CheckboxContainer style={{ height: "50px" }}>
                <Checkbox style={{ color: "black" }} />
                <span>I'm not a robot</span>
              </CheckboxContainer>
            </SubRow>
          </Container>
        </MiniContainer>
      </Row>
    </MainContainer>
  );
};

export default connect()(Partnership);
