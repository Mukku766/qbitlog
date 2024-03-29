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
  Stack,
  Divider,
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
  const [showTryAnotherEmail, setShowTryAnotherEmail] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
    setIsEmailValidState(isEmailValid(value));
  };

  const isEmailValid = (email) => {
    if (email.trim() === "") {
      return true; // Return true if the email field is empty
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleGetOTP = () => {
    if (!isEmailValidState) {
      setShowTryAnotherEmail(true);
    } else {
      console.log(inputs);
      setIsOTPFieldEnabled(true);
      setIsEmailFieldLocked(true);
    }
  };

  const handleTryAnotherEmail = () => {
    setShowTryAnotherEmail(false);
    setIsEmailFieldLocked(false);
    setInputs({ ...inputs, email: "" }); // Clear the email input field
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
          maxWidth: "370px",
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
                autoComplete="off"
                inputProps={{ maxLength: 35 }}
                value={inputs.email}
                onChange={handleInputChange}
                sx={{ color: "#fff" }}
                disabled={isEmailFieldLocked}
              />
              {!isEmailValidState && !showTryAnotherEmail && (
                <Typography sx={{ color: "red" }}>
                  Invalid email format
                </Typography>
              )}
              {showTryAnotherEmail && (
                <Typography
                  sx={{ color: "green", cursor: "pointer" }}
                  onClick={handleTryAnotherEmail}
                >
                  Try with another email
                </Typography>
              )}
            </FormControl>

            <FormControl sx={{ width: "100%", marginBottom: "30px" }}>
              <InputLabel sx={{ color: "#fff" }}>Enter OTP</InputLabel>
              <Stack
                direction="row"
                spacing={2}
                sx={{ justifyContent: "center", marginLeft: 3 }}
                divider={<Divider orientation="vertical" flexItem />}
              >
                <OTPInput
                  value={inputs.otp}
                  onChange={(otp) => setInputs({ ...inputs, otp })}
                  numInputs={4}
                  isInputNum
                  containerStyle={{ marginTop: "60px" }}
                  separator={<span>-</span>}
                  inputStyle={{
                    borderRadius: "10px",
                    border: "1px solid ",
                    padding: "10px",
                    width: "40px",
                    color: "black",
                    marginRight: "27px",
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
                        backgroundColor: isOTPFieldEnabled
                          ? "#858BC5"
                          : " #A0A8D0",
                        borderRadius: "10px",
                        border: "1px solid ",
                        padding: "10px",

                        width: "40px",
                        color: "black",
                        marginRight: "27px",
                      }}
                    />
                  )}
                />
              </Stack>
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
                  backgroundColor:
                    isEmailValid(inputs.email) && inputs.otp.length === 4
                      ? "#858BC5"
                      : "grey",
                }}
                color="primary"
                disabled={
                  !isEmailValid(inputs.email) || inputs.otp.length !== 4
                } // Disable if email is invalid or OTP is not complete
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
    backgroundColor: isEmailValid(inputs.email) ? "#858BC5" : "grey",
  }}
  color="primary"
  disabled={!inputs.email || !isEmailValidState} // Disable if email is empty or invalid
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
