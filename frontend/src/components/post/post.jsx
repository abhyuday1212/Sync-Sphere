import React from "react";
import { Fab, Grid, Paper } from "@mui/material";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function Post() {
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

  return (
    <Grid container style={containerStyle}>
      
      <Paper elevation={4} sx={{ ...paperStyle, gap: 10 }}>
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
              alt: "image",
            }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Tree Plantation
            </Typography>
            <Typography variant="body2" color="text.secondary">
              "Green Delhi, Clean Delhi! Join us in a tree plantation drive.
              Let's breathe life into our city. Be a part!"
            </Typography>
          </CardContent>

          <CardActions style={{ justifyContent: "space-between" }}>
            <Typography>Budget:-$49</Typography>
            <Typography>Volenters:-10</Typography>
          </CardActions>
          <CardActions style={{ justifyContent: "space-between" }}>
            <Link to={"/join"}>
              <Button size="small">Join</Button>
            </Link>
            <Link to={"/details"}>
              <Button size="small">Learn More</Button>
            </Link>
            <Fab size="small" color="secondary" aria-label="add">
              Ak
            </Fab>
          </CardActions>
        </CardActionArea>
      </Paper>

    </Grid>
  );
}

export default Post;
