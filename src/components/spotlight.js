import React, { useState } from "react";
import { connect } from "react-redux";
import { TextField, Button, Checkbox, Typography } from "@mui/material";
import styled from "@emotion/styled";
import spotLight from "../assets/images/spotlight.png";

const MainContainer = styled.div({
  width: "100%",
  background: "linear-gradient(180deg,#F8CB46 0,#318616 100%)",
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

const Spotlight = ({ dispatch }) => {
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
    <MainContainer>
      <Row>
        <Column>
          <div>
            <img
              src={spotLight}
              alt="Description"
              style={{ maxWidth: "450px", marginRight: "20px" }}
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
        </Column>
        <Column>
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
            <SubRow>
              <div>
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
              <div>
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
            </SubRow>
            <SubRow>
              <div>
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
              <div>
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
            </SubRow>
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
            <SubRow>
              <StyledButton
                variant="contained"
                color="primary"
                onClick={handleSignUp}
                style={{ height: "50px" }}
              >
                Signup to See More
              </StyledButton>
              <CheckboxContainer style={{ height: "50px" }}>
                <Checkbox style={{ color: "black" }} />
                <span>I'm not a robot</span>
              </CheckboxContainer>
            </SubRow>
          </Container>
        </Column>
      </Row>
    </MainContainer>
  );
};

export default connect()(Spotlight);
