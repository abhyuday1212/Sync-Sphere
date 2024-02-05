import * as React from "react";
import { styled } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState, useContext } from "react";
// ==================================
import { API } from "../../service/Api";
import { DataContext } from "../../context/DataProvider";
import { useNavigate } from 'react-router-dom';
// ===================================

const Text = styled(Typography)`
  color: #878787;
  font-size: 12px;
`;

const Error = styled(Typography)`
  font-size: 12px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
  display:flex;
  justify-content: flex-start;
  align-items: center;
`;

const Success = styled(Typography)`
  font-size: 12px;
  color: green;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
  display:flex;
  justify-content: flex-start;
  align-items: center;
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
const loginInitialValues = {
  username: "",
  password: "",
};

const signupInitialValues = {
  name: "",
  username: "",
  password: "",
};

const usernameInitialValues = {
  username: ""
};
// =====js==========================

const Login = ({ isUserAuthenticated }) => {
  const [account, toggleAccount] = useState("login");
  const [login, setLogin] = useState(loginInitialValues);
  const [signup, setSignup] = useState(signupInitialValues);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const { setAccount } = useContext(DataContext)

  const [username, setUsername] = useState(usernameInitialValues)



  const toggleSignUp = () => {
    account === "signup" ? toggleAccount("login") : toggleAccount("signup");
  };

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };


  async function handleUsername(e) {
    const updatedUsername = { ...username, [e.target.name]: e.target.value };
    setUsername(updatedUsername);
    console.log(updatedUsername);

    try {
      let response = await API.checkUsername(updatedUsername);

      if (response.data.isSuccess === true) {
        setSuccess("Username available...");
        setError("");

        setTimeout(() => {
          setSuccess("");
        }, 3000);

      } else {
        setSuccess("");
        setError("Username unavailable...");
      }
    } catch (error) {
      console.error('Error checking username:', error);
    }
  }



  const signupUser = async () => {
    if (!signup.username || !signup.name || !signup.password) {
      setError("Please fill all the details...");
      return;
    }

    let response = await API.userSignup(signup);
    if (response.isSuccess) {
      setError("");
      setSignup(signupInitialValues);

      toggleAccount("login");
    } else {
      setError("Something went wrong ! Please try again later");
    }
  };

  const loginUser = async () => {
    console.log("Login Request Body:", login);


    if (!login.username || !login.password) {
      setError("Username and password are required");
      return;
    }

    try {
      let response = await API.userLogin(login);

      if (response.isSuccess) {
        setError('');

        sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
        sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);

        setAccount({ username: response.data.username, name: response.data.name });
        isUserAuthenticated(true);
        navigate('/');
      }
    } catch (error) {
      console.error("Error in loginUser API call:", error);
      setError("Something went wrong during login. Please try again later.");
    }

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (account === "login") {
      loginUser();
    } else {
      signupUser();
    }
  };


  // ============================
  return (
    <Container component="main" display="flex" alignItems="center" justifyContent="center">
      <CssBaseline />
      <Box
        sx={{
          width: "fitContent",
          marginTop: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "5rem"
        }}
      >
        {account === "login" ? (
          <div >
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
                label="Enter username"
                key={"username"}
                autoComplete="username"
                autoFocus
                onChange={(e) => onValueChange(e)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Enter Password"
                type="password"
                key={"password"}
                id="password"
                autoComplete="current-password"
                onChange={(e) => onValueChange(e)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <div>
                {error && <Error>{error}</Error>}

                <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}
                  onClick={() => loginUser()}>
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
        ) : (
          // ----------------------------------------
          <form onSubmit={handleSubmit}>
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
                autoFocus
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                variant="standard"
                required
                fullWidth
                name="username"
                label="Username"
                onChange={(e) => {
                  handleUsername(e)
                  onInputChange(e)
                }}
              />
              <TextField
                variant="standard"
                required
                fullWidth
                name="password"
                label="Enter Password"
                onChange={(e) => onInputChange(e)}
              />

              {error && <Error>{error}</Error>}
              {success && <Success>{success}</Success>}
              <SignupButton
                onClick={() => signupUser()}
                onSubmit={handleSubmit}
              >
                Signup
              </SignupButton>
              <Text style={{ textAlign: "center" }}>OR</Text>
              <LoginButton variant="contained" onClick={() => toggleSignUp()}>
                Already have an account
              </LoginButton>
            </Wrapper>
          </form>
        )}
      </Box>
    </Container>
  );
};

export default Login; 