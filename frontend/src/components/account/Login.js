import * as React from "react";
import { styled } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
// ===================================

const Text = styled(Typography)`
  color: #878787;
  font-size: 12px;
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;
const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  width: 100%;
  border-radius: 2px;
`;

const SignupButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  width: 100%;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;
const Wrapper = styled(Box)`
  padding: 0px 35px;
  margin:0 0
  left: 0;
  width: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  overflow: auto;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;
// =====js==========================

const Login = () => {
  const [account, toggleAccount] = useState("login");

  const toggleSignUp = () => {
    account === "signup" ? toggleAccount("login") : toggleAccount("signup");
  };

  // ============================
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {account === "login" ? (
          <div>
            <div>
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                name="username"
                label="username"
                autoComplete="username"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <div className="">
                <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                  Sign In
                </Button>

                <Text style={{ textAlign: "center" }}>OR</Text>

                <Button
                  fullWidth
                  variant="contained"
                  style={{
                    backgroundColor: "#ff9757cf",
                    color: "black",
                  }}
                  sx={{ mt: 3, mb: 2 }}
                  onClick={() => toggleSignUp()}
                >
                  Create Account
                </Button>
              </div>
            </div>
          </div>
          // ----------------------------------------
        ) : (
          <div>
            <Wrapper>
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign UP
              </Typography>
              <TextField
                variant="standard"
                required
                fullWidth
                name="name"
                label="Name"
                autoComplete="name"
                autoFocus
              />
              <TextField
                variant="standard"
                required
                fullWidth
                name="username"
                label="Username"
                autoComplete="username"
                autoFocus
              />
              <TextField
                variant="standard"
                required
                fullWidth
                // onChange={(e) => onInputChange(e)}
                name="password"
                label="Enter Password"
                autoComplete="username"
                autoFocus
              />

              <SignupButton>Signup</SignupButton>
              <Text style={{ textAlign: "center" }}>OR</Text>
              <LoginButton variant="contained" onClick={() => toggleSignUp()}>
                Already have an account
              </LoginButton>
            </Wrapper>
          </div>
        )}
      </Box>
    </Container>
  );
};

export default Login;
