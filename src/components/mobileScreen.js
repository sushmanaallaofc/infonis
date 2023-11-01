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
import playStore from "../../src/assets/images/playstore.png";
import appStore from "../../src/assets/images/appstore.png";

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

const MobileScreen = ({ dispatch }) => {
  const [value, setValue] = useState("Email");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

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
            Get the Infonis app now
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
              <TextField
                id="outlined-multiline-flexible"
                label={value}
                multiline
                maxRows={4}
                variant="outlined"
                style={{
                  marginRight: "10px",
                  width: "250px",
                  height: "48px",
                }}
              />
              <Button
                variant="contained"
                href="#contained-buttons"
                style={{ height: "48px" }}
                image= {playStore}
              >
                Share app link
              </Button>
            </FlexContainer>
          </ChildDiv>
          <Typography variant="caption" display="block" gutterBottom>
            Download App from
          </Typography>
          <FlexContainer>
            <img
              src={playStore}
              alt="Description"
              style={{ marginRight: "20px", cursor: 'pointer' }}
            />
            <img
              src={appStore}
              alt="Description"
              style={{ marginRight: "20px",  }}
            />
          </FlexContainer>
        </div>
      </MainDiv>
    </div>
  );
};

export default connect()(MobileScreen);
