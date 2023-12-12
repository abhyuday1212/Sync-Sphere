import React from 'react';
import { Container, Card, CardActions, CardContent, Typography, Button, Paper } from '@mui/material';
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
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
    scale: 1.1;
  }
`;
const StyledButton = styled(Button)`
  text-decoration: none;
  color:#000;
  &:hover {   
    text-size:22;
    color: red;
    border-color: #A9B388;
    
    scale: 1.4;
  }
`;
const Profile = () => {
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
              <Typography gutterBottom variant="h5">
                Name:
              </Typography>
              <Typography variant="h5" color="text.secondary">
                Name of user
              </Typography>
            </div>
          </CardActions>
          <CardActions>
            <div style={{
              display: "flex",
              justifyContent: "center"
            }}>
              <Typography gutterBottom variant="h5">
                UserName:
              </Typography>
              <Typography variant="h5" color="text.secondary">
                plalnt@pacho.com
              </Typography>
            </div>
          </CardActions>
          <CardActions>

            <div style={{
              display: "flex",
              justifyContent: "center"

            }}>
              <Typography gutterBottom variant="h5">
                Password:
              </Typography>
              <Typography variant="h5" color="text.secondary">
                *********
              </Typography>
            </div>
          </CardActions>


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