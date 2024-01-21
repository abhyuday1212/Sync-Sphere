import React from 'react';
import { Container, Card, CardActions, CardContent, Typography, Button, Paper } from '@mui/material';
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { useContext } from "react";
import { DataContext } from '../../context/DataProvider';
import { useState, useEffect } from 'react';

const StyledPaper = styled(Paper)`
  display: flex;
  align-items: center;
  
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:hover {   
    color: #000;
    font-wight:700;
  }
`;
const StyledButton = styled(Button)`
  text-decoration: none;
  background-color: #d14b4b;
  color:#000;
  boder:2px solid black
  &:hover {
      background-color: #ffffff;
    color: #d14b4b;
    text-size:25;
    border:2px solid #534

  }
`;
const StyledPassButton = styled(Button)`
  text-decoration: none;
  background-color: grey;
  border:2px solid black;
  color:#000;
  &:hover {   
    text-size:22;
    background-color: white;
    bg-color: white;
    color: crimson;
    border-color: black;  
  }
`;

const initialUser = {
  name: '',
  username: ''
};

// const initialPass = {
//   password: ''
// };

const Profile = () => {

  const [user, setUser] = useState(initialUser);

  // const [userpassword, setpassword] = useState(initialPass)

  const { account } = useContext(DataContext);

  // const [loading, setLoading] = useState(true);

  user.name = account.name
  user.username = account.username

  // const handlePassResponse = async () => {
  //   try {
  //     const response = await API.userDetails();
  //     console.log("API Response:", response);

  //     console.log("Decrypted Password:", response.data.password);
  //     userpassword.password = response.data.password

  //   } catch (error) {
  //     console.error("Error fetching decrypted password:", error);
  //   }
  // };



  return (


    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        height: '84.5vh',
        background: 'url(https://avatars.githubusercontent.com/u/128721569?s=400&u=09e224af181df700e0f1af9ab888b6355a39e0ff&v=4)',
        backgroundSize: 'contain',
        backgroundRepeat: 3,
        backgroundPosition: 'center',
      }}
    >
      <CardContent >
        <StyledPaper
          elevation={24}
          sx={{
            width: "30vw",
            height: "50vh",
            backgroundColor: "rgba(255, 228,228, 0.8)",
            marginTop: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around'
          }}
        >
          <CardActions>

            <div style={{
              display: "flex",
              justifyContent: "center"

            }}>
              <Typography variant="h5" color="text.secondary">
                Account Details :
              </Typography>
            </div>
          </CardActions>
          <CardActions>
            <div style={{
              display: "flex",
              justifyContent: "center"
            }}>

              <Typography gutterBottom variant="h5">
                Name :
              </Typography>
              <Typography variant="h5" color="text.secondary">
                &nbsp;{user.name}
              </Typography>
            </div>
          </CardActions>
          <CardActions>
            <div style={{
              display: "flex",
              justifyContent: "center"
            }}>

              <Typography gutterBottom variant="h5">
                UserName :
              </Typography>
              <Typography variant="h5" color="text.secondary">
                &nbsp;{user.username}
              </Typography>
            </div>
          </CardActions>
          
          {/* <CardActions>

            <div style={{
              display: "flex",
              justifyContent: "center"

            }}>
              <StyledPassButton gutterBottom variant="h5" onClick={() => handlePassResponse()}>
                View Password
              </StyledPassButton>
              <Typography variant="h5" color="text.secondary">
                {user.password}
              </Typography>
            </div>
          </CardActions> */}


          <CardActions >
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",

            }}>
              {/* <Button variant="contained" color="success" onClick={handleNavigate()}>
                Switch Account
              </Button> */}
              <StyledLink to="/login">
                <StyledButton variant="outlined" color="error">
                  Logout
                </StyledButton>
              </StyledLink>
            </div>
          </CardActions>

        </StyledPaper>
      </CardContent>
    </div >
  );
};

export default Profile;