import React from "react";
import { useEffect, useState } from "react";
import { API } from "../../service/Api";
import { Link } from "react-router-dom";

// ----------------------
import { Fab, Grid, Paper } from "@mui/material";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';


function Posts() {
  const containerStyle = {
    height: "83.7vh",
    border: "2px solid rgb(176 174 174)",
    // backgroundColor: "green",
    overflow: "auto",
    borderRadius: "14px",
    margin: "2px 0",
    padding: "10px",
  };

  const paperStyle = {
    maxWidth: 345,
    borderRadius: 3,
    // backgroundColor: "red",
    height: "fit-content",
    // padding: "6px",
    margin: "7px",
  };

  // js

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.getAllPosts();
        console.log('API Response:', response);

        if (response.isSuccess) {
          setPosts(response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);



  return (
    <>
      {posts && posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id}>
            <Grid container style={containerStyle}>
              <Paper elevation={4} sx={{ ...paperStyle, gap: 20 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="130px"
                    style={{
                      backgroundImage:
                        'url("https://t4.ftcdn.net/jpg/04/29/64/57/360_F_429645702_EXZw2TFIzZBjegrXvBzg68gzd4aD62kB.jpg")',
                      backgroundSize: "cover",
                      borderTopLeftRadius: "8px",
                      borderTopRightRadius: "8px",
                      alt: "Fetching your uploaded Image from Database",
                    }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {post.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {post.summary}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Category : {post.categories}
                    </Typography>
                  </CardContent>

                  <CardActions style={{ justifyContent: "space-between" }}>
                    <Typography>{post.budget}</Typography>
                    <Typography>20+Joined</Typography>
                  </CardActions>
                  <CardActions style={{ justifyContent: "space-between" }}>
                    <Link to={"/join"}>
                      <Button
                        size="small"
                        sx={{
                          gap: 10,
                          transition: "transform 0.3s ease-in-out",
                          "&:hover": {
                            transform: "scale(1.2)",
                            border: "2px solid rgba(140, 109, 189, 0.245)",
                          },
                        }}
                      >
                        Join
                      </Button>
                    </Link>
                    <Link to={"/details"}>
                      <Button
                        size="small"
                        sx={{
                          gap: 10,
                          transition: "transform 0.3s ease-in-out",
                          "&:hover": {
                            transform: "scale(1.2)",
                            border: "2px solid rgba(140, 109, 189, 0.245)",
                          },
                        }}
                      >
                        See Details
                      </Button>
                    </Link>

                    <AvatarGroup
                      renderSurplus={(surplus) => <span>+{surplus.toString()[0]}k</span>}
                      total={4251}
                    >
                      <Avatar style={{ background: 'purple' }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

                    </AvatarGroup>

                  </CardActions>
                </CardActionArea>
              </Paper>
            </Grid>

          </div>
        ))
      ) : (
        <Box style={{ color: '878787', margin: '30px 30px', fontsize: 18 }}>No Data Available to display</Box>
      )}



    </>
  );
}

export default Posts;
