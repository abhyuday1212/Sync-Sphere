import React from 'react';
import { CardActions, CardContent, Typography, Button, Paper, Card, CardMedia, Avatar, IconButton, CardHeader } from '@mui/material';
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { useContext } from "react";
import { DataContext } from '../../context/DataProvider';
import { useState, useEffect } from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

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

  // -*-*-*-*-*  Loader -*-*-*-*-*-*-*-*-*-*-*-**
  const [loaderVisible, setCategoriesLoaderVisible] = useState(false);

  const showCategoriesLoader = () => {
    setCategoriesLoaderVisible(true);
  };

  const hideCategoriesLoader = () => {
    setCategoriesLoaderVisible(false);
  };
  // ----------------------------------------
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

    <>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: "100%",
          height: '84.5vh',
          // backgroundColor:"black"
          // background: 'url(https://avatars.githubusercontent.com/u/128721569?s=400&u=09e224af181df700e0f1af9ab888b6355a39e0ff&v=4)',
          // backgroundSize: 'contain',
          // backgroundRepeat: 3,
          // backgroundPosition: 'center',
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


      <div>
        <Typography sx={{ fontSize: 80, display: "flex", alignContent: "center", justifyContent: "center" }}>
          Company Requests
        </Typography>

        <Card style={{ display: "flex", alignContent: "center", justifyContent: "space-evenly" }} >

          <Card sx={{ maxWidth: 350 }}>

            <CardHeader
              avatar={
                <Avatar aria-label="recipe" alt="Bj" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAeFBMVEX////x9fb29/ju8/b7/f3+//3j6u7n7fFXe68AR5sAL5EATp7d5OqsvtQ9aarj6+yltc4OUJoAPpdCbqkAKZHH0+CCmb8AM5OBncBMdasdWKDN2OPp8O+su9QAN5TX3+l0kbySqcYoX6O5yNqPo8VfgLCKobyuv88n9O5jAAABJElEQVRIie2RyZKDIBBAG1k0IsQlRBxX0jH+/x+GaCqpouY6p+EdoLdXiABEIpFI5C8gbxijHvIqUXq0Er/zo/SaC0TBfZcxdi5zWVV1w0FdLmZvXVsO9pKLPel+AjGFsun9PozTuZ+zE0tOS3YM3U8gWnfr9mTVgUhRqSlLvVjbLJMPWGraT+4tdhVXLf4qYjsh2MkOY05FuuamdY2s6nSei1VirqpKSuITHYpmanvRSRxQL7dbpxZ/SyD6vmjdqGz1E7MuM5+Y8FMLc80dh/Pn0liIQogBBUGKKSIIEGY2oZgC2tfv/4ionBlVCaWP/PqwPhptYftALAhJiH/Ar4ilc+iMAiS92raNO1Qb2PBElhywbwX2p+VH7MNjZRCJRCL/gSeoUROGOxNUWwAAAABJRU5ErkJggg==" >
                  R
                </Avatar>
              }

              title="Bajaj Electricals"
              subheader=" 13-April-2024"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Campany Name : Bajaj Electricals
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Country : India
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Mobile No = 9896444964
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Email = bajajelctro@gmail.com
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Donation = 40,000
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Rating = <StarIcon style={{ color: "gold" }} fontSize="small" /> <StarIcon style={{ color: "gold" }} fontSize="small" /><StarIcon style={{ color: "gold" }} fontSize="small" /> <StarHalfIcon style={{ color: "gold" }} fontSize="small" />
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained" color="success" >Accept</Button>
              <Button size="small" variant="contained" color="error" style={{ opacity: "0.9" }}>Reject</Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 350 }}>

            <CardHeader
              avatar={
                <Avatar aria-label="recipe" alt="Bj" src="https://img1.wsimg.com/isteam/ip/b972578b-37a5-4f5d-a852-bfb34f1f4031/logo/G56%20Logo.png/:/rs=h:70,cg:true,m/qt=q:95" >
                  R
                </Avatar>
              }

              title="gopals56"
              subheader=" 21May-2024"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Campany Name : gopals56
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Country : India
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Mobile No = 9896448957
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Email = gopal@gmail.com
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Donation = 5,000
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Rating = <StarIcon style={{ color: "gold" }} fontSize="small" /> <StarIcon style={{ color: "gold" }} fontSize="small" /><StarIcon style={{ color: "gold" }} fontSize="small" /> <StarIcon style={{ color: "gold" }} fontSize="small" />
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained" color="success" >Accept</Button>
              <Button size="small" variant="contained" color="error" style={{ opacity: "0.9" }}>REcject</Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 350 }}>

            <CardHeader
              avatar={
                <Avatar aria-label="recipe" alt="Bj" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAeFBMVEX////x9fb29/ju8/b7/f3+//3j6u7n7fFXe68AR5sAL5EATp7d5OqsvtQ9aarj6+yltc4OUJoAPpdCbqkAKZHH0+CCmb8AM5OBncBMdasdWKDN2OPp8O+su9QAN5TX3+l0kbySqcYoX6O5yNqPo8VfgLCKobyuv88n9O5jAAABJElEQVRIie2RyZKDIBBAG1k0IsQlRBxX0jH+/x+GaCqpouY6p+EdoLdXiABEIpFI5C8gbxijHvIqUXq0Er/zo/SaC0TBfZcxdi5zWVV1w0FdLmZvXVsO9pKLPel+AjGFsun9PozTuZ+zE0tOS3YM3U8gWnfr9mTVgUhRqSlLvVjbLJMPWGraT+4tdhVXLf4qYjsh2MkOY05FuuamdY2s6nSei1VirqpKSuITHYpmanvRSRxQL7dbpxZ/SyD6vmjdqGz1E7MuM5+Y8FMLc80dh/Pn0liIQogBBUGKKSIIEGY2oZgC2tfv/4ionBlVCaWP/PqwPhptYftALAhJiH/Ar4ilc+iMAiS92raNO1Qb2PBElhywbwX2p+VH7MNjZRCJRCL/gSeoUROGOxNUWwAAAABJRU5ErkJggg==" >
                  R
                </Avatar>
              }

              title="Bajaj Electricals"
              subheader=" 13-April-2024"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Campany Name : Bajaj Electricals
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Country : India
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Mobile No = 9896444964
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Email = bajajelctro@gmail.com
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Donation = 40,000
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Rating = <StarIcon style={{ color: "gold" }} fontSize="small" /> <StarIcon style={{ color: "gold" }} fontSize="small" /><StarIcon style={{ color: "gold" }} fontSize="small" /> <StarHalfIcon style={{ color: "gold" }} fontSize="small" />
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained" color="success" >Accept</Button>
              <Button size="small" variant="contained" color="error" style={{ opacity: "0.9" }}>REcject</Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 350 }}>

            <CardHeader
              avatar={
                <Avatar aria-label="recipe" alt="Bj" src="" >
                  T
                </Avatar>
              }

              title="Tata Motors"
              subheader=" 18-April-2024"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Campany Name : Tata Motors
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Country : India
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Mobile No = 76373744964
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Email = TataMotors@tcs.com
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Donation = 40,000
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Rating = <StarIcon style={{ color: "gold" }} fontSize="small" /> <StarIcon style={{ color: "gold" }} fontSize="small" /><StarIcon style={{ color: "gold" }} fontSize="small" /> <StarHalfIcon style={{ color: "gold" }} fontSize="small" />
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained" color="success" >Accept</Button>
              <Button size="small" variant="contained" color="error" style={{ opacity: "0.9" }}>Reject</Button>
            </CardActions>
          </Card>

        </Card>

        <div>
          <Typography sx={{ fontSize: 80, display: "flex", alignContent: "center", justifyContent: "center" }}>
            Project Status
          </Typography>
        </div>

        <Card style={{ display: "flex", alignItems: "flex-start", justifyContent: "flex-start", gap: "10px", marginLeft: "10px" }} >

          <Card sx={{ maxWidth: 350 }}>

            <CardHeader
              avatar={
                <Avatar aria-label="recipe" alt="Bj" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAeFBMVEX////x9fb29/ju8/b7/f3+//3j6u7n7fFXe68AR5sAL5EATp7d5OqsvtQ9aarj6+yltc4OUJoAPpdCbqkAKZHH0+CCmb8AM5OBncBMdasdWKDN2OPp8O+su9QAN5TX3+l0kbySqcYoX6O5yNqPo8VfgLCKobyuv88n9O5jAAABJElEQVRIie2RyZKDIBBAG1k0IsQlRBxX0jH+/x+GaCqpouY6p+EdoLdXiABEIpFI5C8gbxijHvIqUXq0Er/zo/SaC0TBfZcxdi5zWVV1w0FdLmZvXVsO9pKLPel+AjGFsun9PozTuZ+zE0tOS3YM3U8gWnfr9mTVgUhRqSlLvVjbLJMPWGraT+4tdhVXLf4qYjsh2MkOY05FuuamdY2s6nSei1VirqpKSuITHYpmanvRSRxQL7dbpxZ/SyD6vmjdqGz1E7MuM5+Y8FMLc80dh/Pn0liIQogBBUGKKSIIEGY2oZgC2tfv/4ionBlVCaWP/PqwPhptYftALAhJiH/Ar4ilc+iMAiS92raNO1Qb2PBElhywbwX2p+VH7MNjZRCJRCL/gSeoUROGOxNUWwAAAABJRU5ErkJggg==" >
                  R
                </Avatar>
              }

              title="Bajaj Electricals"
              subheader=" 13-April-2024"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Project Name : Plantation Drive
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Date Reddemed($) : 02/01/24
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Location : Delhi, India
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Donated ($): 40,000
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Status: Task1✅ Task2✅
              </Typography>
              <Typography variant="body2" color="text.secondary">

              </Typography>
              <Typography variant="body2" color="text.secondary">
                Rating : <StarIcon style={{ color: "gold" }} fontSize="small" /> <StarIcon style={{ color: "gold" }} fontSize="small" /><StarIcon style={{ color: "gold" }} fontSize="small" /> <StarHalfIcon style={{ color: "gold" }} fontSize="small" />
              </Typography>
            </CardContent>
            <CardActions style={{display:"flex",justifyContent:"center"}}>
              <Button size="small" variant="contained" color="success" >See Details</Button>

            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 350 }}>

            <CardHeader
              avatar={
                <Avatar aria-label="recipe" alt="Bj" src="https://img1.wsimg.com/isteam/ip/b972578b-37a5-4f5d-a852-bfb34f1f4031/logo/G56%20Logo.png/:/rs=h:70,cg:true,m/qt=q:95" >
                  R
                </Avatar>
              }

              title="gopals56"
              subheader=" 21May-2024"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                  Project Name : Educate Kids
              </Typography>
              <Typography variant="body2" color="text.secondary">
                  Date Redeemed : Not Yet
              </Typography>
              <Typography variant="body2" color="text.secondary">
                 Location : UP,India
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Donated ($): 5,000
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Status:  Task Pending
              </Typography>
  
              <Typography variant="body2" color="text.secondary">
                Rating : Task not done yet
                {/* <StarIcon style={{ color: "gold" }} fontSize="small" /> */}
              </Typography>
            </CardContent>
            <CardActions style={{ display: "flex", justifyContent: "center" }}>
              <Button size="small" variant="contained" color="success" >See Details</Button>

            </CardActions>
          </Card>


        </Card>
      </div>

    </>
  );
};

export default Profile;