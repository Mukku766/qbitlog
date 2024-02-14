import React, { useState } from "react";
import logo from "./logo1.png";
import {
  Button,
  FormControl,
  InputLabel,
  Link,
  Container,
  Typography,
  Box,
  Input,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import OTPInput from "react-otp-input";

const ForgotComponent = () => {
  const Navigate = useNavigate();

  const [inputs, setInputs] = useState({
    email: "",
    otp: "",
  });

  const [isOTPFieldEnabled, setIsOTPFieldEnabled] = useState(false);
  const [isEmailFieldLocked, setIsEmailFieldLocked] = useState(false);
  const [isEmailValidState, setIsEmailValidState] = useState(true);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
    setIsEmailValidState(isEmailValid(value));
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleGetOTP = () => {
    console.log(inputs);
    setIsOTPFieldEnabled(true);
    setIsEmailFieldLocked(true);
  };

  const handleConfirmOTP = () => {
    console.log(inputs);
    Navigate("/changepassword");
  };

  return (
    <Container>
      <div className="logo">
        <img src={logo} alt="Your Logo" width="150vw" height="auto" />
      </div>
      <Box
        sx={{
          maxWidth: "400px",
          backgroundColor: "transparent",
          border: "2px solid rgba(255, 255, 255, 0.5)",
          borderRadius: "20px",
          backdropFilter: "blur(10px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem 3rem",
        }}
      >
        <section>
          <form>
            <Typography
              variant="h4"
              sx={{
                color: "#fff",
                textAlign: "center",
                marginBottom: "30px",
                fontWeight: "bold",
              }}
            >
              Forgot Password
            </Typography>

            <FormControl sx={{ width: "100%", marginBottom: "30px" }}>
              <InputLabel sx={{ color: "#fff" }}>Email</InputLabel>
              <Input
                type="email"
                name="email"
                required
                value={inputs.email}
                onChange={handleInputChange}
                sx={{ color: "#fff" }}
                disabled={isEmailFieldLocked}
              />
              {!isEmailValidState && (
                <Typography sx={{ color: "red" }}>
                  Invalid email format
                </Typography>
              )}
            </FormControl>

            <FormControl sx={{ width: "100%", marginBottom: "30px" }}>
              <InputLabel sx={{ color: "#fff" }}>Enter OTP</InputLabel>
              <OTPInput
                value={inputs.otp}
                onChange={(otp) => setInputs({ ...inputs, otp })}
                numInputs={4}
                isInputNum
                containerStyle={{ marginTop: "50px", marginLeft: "12px" }}
                separator={<span>-</span>}
                inputStyle={{
                  borderRadius: "10px",
                  border: "1px solid ",
                  padding: "10px",
                  width: "40px",
                  color: "black",
                  marginRight: "7px",
                  backgroundColor: isOTPFieldEnabled ? "#858BC5" : " #A0A8D0",
                  pointerEvents: isOTPFieldEnabled ? "auto" : "none",
                }}
                focusStyle={{ borderColor: "#858BC5" }}
                hasErrored={false}
                renderInput={(props, index) => (
                  <input
                    {...props}
                    disabled={!isOTPFieldEnabled}
                    style={{
                      backgroundColor: isOTPFieldEnabled ? "#858BC5" : " #A0A8D0",
                      borderRadius: "10px",
                      border: "1px solid ",
                      padding: "10px",
                      width: "40px",
                      color: "black",
                      marginRight: "7px",
                    }}
                  />
                )}
              />
            </FormControl>

            {isOTPFieldEnabled ? (
              <Button
                onClick={handleConfirmOTP}
                variant="contained"
                sx={{
                  width: "100%",
                  height: "40px",
                  borderRadius: "40px",
                  fontSize: "1rem",
                  fontWeight: "600",
                  transition: "background-color 0.4s ease",
                  backgroundColor: "#858BC5",
                }}
                color="primary"
              >
                Confirm OTP
              </Button>
            ) : (
              <Button
                onClick={handleGetOTP}
                variant="contained"
                sx={{
                  width: "100%",
                  height: "40px",
                  borderRadius: "40px",
                  fontSize: "1rem",
                  fontWeight: "600",
                  transition: "background-color 0.4s ease",
                  backgroundColor: isEmailValid(inputs.email)
                    ? "#858BC5"
                    : "grey",
                }}
                color="primary"
                disabled={!isEmailValidState}
              >
                Get OTP
              </Button>
            )}

            <div
              style={{
                fontSize: "0.9rem",
                color: "#fff",
                textAlign: "center",
                margin: "25px 0 10px",
              }}
            >
              <Typography
                variant="p"
                sx={{
                  fontSize: "0.9rem",
                  color: "#fff",
                  textAlign: "center",
                  margin: "25px 0 10px",
                }}
              >
                Remember the password?{" "}
                <Link href="/" color="inherit" underline="hover">
                  Login
                </Link>
              </Typography>
            </div>
          </form>
        </section>
      </Box>
    </Container>
  );
};

export default ForgotComponent;