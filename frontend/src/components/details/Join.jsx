import styled from "@emotion/styled";
import { Paper } from "@mui/material";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useParams } from "react-router-dom";

import { API } from "../../service/Api";

import { useState, useEffect } from "react";
import CategoriesLoader from "../loader/CategoriesLoader";

const StyledPaper = styled(Paper)`
  display: flex;
  align-items: center;

  &:hover {
    background: #e8e8e8;
    color: crimson;
    // font-weight: 850;
    // letter-spacing: 0.05em;
    // border: 2px solid #00df9a;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

function Join() {
  const { id } = useParams();

  const [post, setPost] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      let response = await API.getPostById(id);
      if (response.isSuccess) {
        setPost(response.data);
      }
    };
    fetchData();
  }, []);

  const [loader, setLoaderVisible] = useState(false);

  useEffect(() => {
    setLoaderVisible(true);
    setTimeout(() => {
      setLoaderVisible(false);
    }, 500);
  }, []);

  return (
    <>
      {loader ? (
        <CategoriesLoader />
      ) : (
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "84.5vh",
            bgcolor: "#f09d7a2e",
            fontSize: 27,
            gap: 4,
          }}
        >
          {/* company */}
          <StyledLink to={`/projects/join/${post._id}/company`}>
            <StyledPaper
              elevation={12}
              sx={{
                bgcolor: "#61bc61",
                width: "25vw",
                height: "20vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Paper
                elevation={8}
                sx={{
                  gap: 10,
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.1)",
                    border: "2px solid rgba(140, 109, 189, 0.245)",
                  },
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="130px"
                    style={{
                      backgroundSize: "cover",
                      borderTopLeftRadius: "8px",
                      borderTopRightRadius: "8px",
                      alt: "image",
                      backgroundImage:
                        'url("data:image/jpeg;base64,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")',
                    }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        fontWeight: 600,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      Join as Company
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <Typography>
                        <strong>.</strong> For Community Development
                      </Typography>
                      <Typography>
                        <strong>.</strong> Boosting Morale and Satisfaction
                      </Typography>
                      <Typography>
                        <strong>.</strong> Long-Term Sustainability Impact
                      </Typography>
                      <Typography>
                        <strong>.</strong> Positive Public Relations and Brand
                        Image
                      </Typography>
                    </Typography>
                  </CardContent>
                  <CardActions style={{ justifyContent: "center" }}>
                    <Link to={`/projects/join/${post._id}/company`}>
                      <Button variant="outlined">Explore</Button>
                    </Link>
                  </CardActions>
                </CardActionArea>
              </Paper>
            </StyledPaper>
          </StyledLink>

          {/* individual */}
          <StyledLink to={`/projects/join/${post._id}/individual`}>
            <StyledPaper
              elevation={12}
              sx={{
                bgcolor: "#61bc61",
                width: "25vw",
                height: "20vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Paper
                elevation={4}
                sx={{
                  gap: 10,
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.1)",
                    border: "2px solid rgba(140, 109, 189, 0.245)",
                  },
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="130px"
                    style={{
                      backgroundImage:
                        "url(https://img.freepik.com/free-photo/people-stacking-hands-together-park_53876-63293.jpg?resize=696%2C460&ssl=1)",
                      backgroundSize: "cover",
                      borderTopLeftRadius: "8px",
                      borderTopRightRadius: "8px",
                      alt: "image",
                    }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        fontWeight: 600,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      Join as Individual
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <Typography>
                        <strong>.</strong>For Personal Fulfillment and Social
                        Impact
                      </Typography>
                      <Typography>
                        <strong>.</strong> Positive Public Relations
                      </Typography>
                      <Typography>
                        <strong>.</strong> Community Connection
                      </Typography>
                      <Typography>
                        <strong>.</strong> Contributing to Long-Term Positive
                        Change
                      </Typography>
                    </Typography>
                  </CardContent>
                  <CardActions style={{ justifyContent: "center" }}>
                    <Link to={`/projects/join/${post._id}/individual`}>
                      <Button variant="outlined">Explore</Button>
                    </Link>
                  </CardActions>
                </CardActionArea>
              </Paper>
            </StyledPaper>
          </StyledLink>

          {/* volunteer */}
          <StyledLink to={`/projects/join/${post._id}/volunteer`}>
            <StyledPaper
              elevation={12}
              sx={{
                bgcolor: "#61bc61",
                width: "25vw",
                height: "20vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Paper
                elevation={12}
                sx={{
                  gap: 10,
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.1)",
                    border: "2px solid rgba(140, 109, 189, 0.245)",
                  },
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="130px"
                    style={{
                      backgroundImage:
                        'url("data:image/jpeg;base64,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")',
                      backgroundSize: "cover",
                      borderTopLeftRadius: "8px",
                      borderTopRightRadius: "8px",
                      alt: "image",
                    }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        fontWeight: 600,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      Join as volunteer
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <Typography>
                        <strong>.</strong>Personal Growth and Skill Development
                      </Typography>
                      <Typography>
                        <strong>.</strong> Building a Positive Personal Brand
                      </Typography>
                      <Typography>
                        <strong>.</strong> Community Connection
                      </Typography>
                      <Typography>
                        <strong>.</strong> Meaningful Connection and Community
                        Engagement
                      </Typography>
                    </Typography>
                  </CardContent>
                  <CardActions style={{ justifyContent: "center" }}>
                    <Link to={`/projects/join/${post._id}/volunteer`}>
                      <Button variant="outlined">Explore</Button>
                    </Link>
                  </CardActions>
                </CardActionArea>
              </Paper>
            </StyledPaper>
          </StyledLink>
        </Card>
      )}
    </>
  );
}

export default Join;
