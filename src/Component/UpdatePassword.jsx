import React, { useState } from "react";
import {
  Button,
  Input,
  FormControl,
  InputLabel,
  Link,
  Container,
  Typography,
  Box,
  TextField,
} from "@mui/material";

const UpdatePassword = () => {
  const [inputs, setInputs] = useState({
    NewPassword: "",
    ConfirmPassword: "",
  });

  const [isPasswordMatch, setIsPasswordMatch] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });

    // Check if passwords match
    setIsPasswordMatch(inputs.NewPassword === value);
  };

  const UpdatePassword = (event) => {
    event.preventDefault();

    console.log(inputs);
    // Add logic to update password
  };

  return (
    <Container>
      
      <Box
        sx={{
          maxWidth: "400px",
          backgroundColor: "transparent",
          borderRadius: "20px",
          backdropFilter: "blur(12px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem 3rem",
        }}
      >
        <section>
          <form>
            
          <Typography color={'#858BC5'} sx={{ my: 1 }}>
          New Password            </Typography>
            <FormControl sx={{ width: "100%", marginBottom: "30px" }}>
              <TextField
                type="password"
                name="NewPassword"
                required
                variant="standard"

                autoComplete="off"
                inputProps={{ maxLength: 35 }}
                value={inputs.NewPassword}
                onChange={handleInputChange}
                sx={{ color: "#fff" }}
                InputProps={{ style: { color: "white" } }}

              />
            </FormControl>
            <Typography color={'#858BC5'} sx={{ my: 1 }}>
            Confirm Password          </Typography>
            <FormControl sx={{ width: "100%", marginBottom: "30px" }}>
              <TextField
                type="password"
                name="ConfirmPassword"
                required
                variant="standard"
                autoComplete="off"
                inputProps={{ maxLength: 35 }}
                value={inputs.ConfirmPassword}
                onChange={handleInputChange}
                sx={{ color: "#fff" }}
                InputProps={{ style: { color: "white" } }}

              />
              {!isPasswordMatch && inputs.ConfirmPassword && (
                <Typography sx={{ color: "red" }}>
                  Passwords do not match
                </Typography>
              )}
            </FormControl>

            <Button
              onClick={UpdatePassword}
              variant="contained"
              sx={{
                width: "100%",
                height: "40px",
                borderRadius: "30px",
                fontSize: "1rem",
                fontWeight: "600",
                
                transition: "background-color 0.4s ease",
                backgroundColor: isPasswordMatch ? "#858BC5" : "grey",
              }}
             
              disabled={!isPasswordMatch}
            >
              Confirm
            </Button>
          </form>
        </section>
      </Box>
    </Container>
  );
};

export default UpdatePassword;
