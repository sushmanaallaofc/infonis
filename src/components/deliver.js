import React, { useState } from "react";
import { connect } from "react-redux";
import {
  TextField,
  Button,
  Checkbox,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  OutlinedInput,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import styled from "@emotion/styled";
import spotLight from "../assets/images/spotlight.png";
import playStore from "../../src/assets/images/playstore.jpg";
import rider from '../../src/assets/images/rider.png'

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

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
  alignItems: 'center'
});

const Column = styled.div({
  "@media (max-width: 992px)": {
    width: "100%",
  },
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

const Deliver = ({ dispatch }) => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    brandName: "",
  });
  const [errors, setErrors] = useState({});


  const validatePhoneNumber = (phoneNumber) => {
    // Phone number validation logic (checking length for 10 digits)
    // Return true if the phone number is valid, false otherwise
    return phoneNumber.length === 10;
  };
  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (!formData.phoneNumber || !validatePhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = "Enter a valid phoneNumber address";
      valid = false;
    }
    if (!formData.brandName) {
      newErrors.brandName = "Brand name is required";
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
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <MainContainer>
      <Row>
        <Column>
          <div>
            <img
              src={rider}
              alt="Description"
              style={{ width: "450px", marginRight: "20px" }}
            />
            <Typography
              variant="h4"
              style={{ fontSize: "40px", fontWeight: "700", color: "#fff" }}
            >
              Earn upto Rs 50,000 with Infinis Delivery. JOIN NOW!
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ fontSize: "18px", color: "#fff" }}
            >
              JOINING BONUS of upto Rs 4,000 | Upto Rs. 10 lacs medical insurance
            </Typography>
          </div>
        </Column>
        <Column>
          <Container>
            <Typography
              variant="h6"
              style={{ fontSize: "24px", fontWeight: "700" }}
            >
              Become a Infinis rider
            </Typography>
            <Typography variant="subtitle1" style={{ fontSize: "16px" }}>
              To deliver orders for Infinis, please fill this form
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
                  onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                  required
                  label="phoneNumber"
                  variant="outlined"
                  value={formData.phoneNumber}
                />
                {errors.phoneNumber && (
                  <Typography variant="body2" color="error">
                    {errors.phoneNumber}
                  </Typography>
                )}
              </div>
            </SubRow>

            <div>
              <FormControl sx={{ m: 1, minWidth: 120 }}
              fullWidth>
                
                <InputLabel id="demo-simple-select-helper-label">
                  Age
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                
              </FormControl>
              {errors.brandName && (
                <Typography variant="body2" color="error">
                  {errors.brandName}
                </Typography>
              )}
            </div>

            <img
              src={playStore}
              alt="Description"
              style={{ marginRight: "20px", cursor: "pointer", height: "50px", margin: 'auto' }}
            />

            <SubRow>
              <StyledButton
                variant="contained"
                color="primary"
                onClick={handleSignUp}
                style={{ height: "50px" }}
              >
                Join to earn
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

export default connect()(Deliver);
