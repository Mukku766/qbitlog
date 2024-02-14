import React, { useState } from "react";
import logo from "./logo1.png";
import {
  Button,
  Input,
  FormControl,
  InputLabel,
  Link,
  Container,
  Typography,
  Box,
} from "@mui/material";

const SignupComponent = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    ConfirmPassword: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSignUp = (event) => {
    event.preventDefault();

    console.log(inputs);
  };

  return (
    <Container>
      <div className="logo">
        <img src={logo} alt="Your Logo" width="150vw" height="auto" />
      </div>
      <Box
        sx={{
          // position: "relative",
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
              Sign Up
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
              />
            </FormControl>
            <FormControl
              sx={{ width: "100%", color: "#fff", marginBottom: "30px" }}
            >
              <InputLabel sx={{ color: "#fff" }}>Password</InputLabel>
              <Input
                name="password"
                type="password"
                value={inputs.password}
                onChange={handleInputChange}
                required
                sx={{ color: "#fff" }}
              />
            </FormControl>
            <FormControl
              sx={{ width: "100%", color: "#fff", marginBottom: "30px" }}
            >
              <InputLabel sx={{ color: "#fff" }}>Confirm Password</InputLabel>
              <Input
                name="ConfirmPassword"
                type="password"
                value={inputs.ConfirmPassword}
                onChange={handleInputChange}
                required
                sx={{ color: "#fff" }}
              />
            </FormControl>
            <Button
              onClick={handleSignUp}
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
              Sign Up{" "}
            </Button>

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
                If Already have an account?{" "}
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

export default SignupComponent;
