import React, { useState, useEffect } from "react";
import logo from "./logo1.png";
import {
  Button,
  Input,
  FormControl,
  InputLabel,
  Checkbox,
  Link,
  Container,
  Typography,
  Box,
} from "@mui/material";

const LoginComponent = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    rememberMe: true,
    isEmailValid: true, 
  });

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isBothFieldsFilled =
      inputs.email.trim() !== "" && inputs.password.trim() !== "";
    setIsFormValid(isBothFieldsFilled && inputs.isEmailValid);
  }, [inputs.email, inputs.password, inputs.isEmailValid]);

  const isEmailValid = (email) => {
    if (email.trim() === "") {
      return true;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const isEmailField = name === "email";

    setInputs({
      ...inputs,
      [name]: value,
      isEmailValid: isEmailField ? isEmailValid(value) : inputs.isEmailValid,
    });
  };

  const handleRememberMeChange = (event) => {
    const { name, checked } = event.target;
    setInputs({
      ...inputs,
      [name]: checked,
    });
  };

  const handleLogin = (event) => {
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
              Login
            </Typography>

            <FormControl sx={{ width: "100%", marginBottom: "30px" }}>
              <InputLabel sx={{ color: "#fff" }}>Email</InputLabel>
              <Input
                type="email"
                autoComplete="off"
                name="email"
                required
                inputProps={{ maxLength: 35 }}
                value={inputs.email}
                onChange={handleInputChange}
                sx={{ color: "#fff" }}
              />
              {!inputs.isEmailValid && (
                <Typography sx={{ color: "red" }}>
                  Invalid email format
                </Typography>
              )}
            </FormControl>

            <FormControl
              sx={{ width: "100%", color: "#fff", marginBottom: "30px" }}
            >
              <InputLabel sx={{ color: "#fff" }}>Password</InputLabel>
              <Input
                name="password"
                type="password"
                autoComplete="off"
                value={inputs.password}
                onChange={handleInputChange}
                required
                inputProps={{ maxLength: 35 }}
                sx={{ color: "#fff" }}
              />
            </FormControl>

            <div
              className="forget"
              style={{
                marginBottom: "55px",
                fontSize: "0.85rem",
                color: "#fff",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <label style={{ display: "flex", alignItems: "center" }}>
                <Checkbox
                  color="secondary"
                  name="rememberMe"
                  checked={inputs.rememberMe}
                  onChange={handleRememberMeChange}
                  sx={{
                    "&.Mui-checked": {
                      color: "#858BC5",
                    },
                  }}
                />
                Remember Me
              </label>
              <Link
                href="/forgot"
                color="inherit"
                alignSelf="center"
                underline="hover"
              >
                Forget Password
              </Link>
            </div>
            <Button
              onClick={handleLogin}
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
              disabled={!isFormValid} 
            >
              Log in
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
                Don't have an account?{" "}
                <Link href="/register" color="inherit" underline="hover">
                  Sign Up
                </Link>
              </Typography>
            </div>
          </form>
        </section>
      </Box>
    </Container>
  );
};

export default LoginComponent;
