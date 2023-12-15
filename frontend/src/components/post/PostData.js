import React from "react";
import { Link } from "react-router-dom";
import { addElippsis } from "../../utils/frontend-utils";
// ----------------------
import { Paper } from "@mui/material";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import styled from "@emotion/styled";
import Box from "@mui/material/Box";


// --------------------------
const Container = styled(Box)`
  border: 1px solid #d3cede;
  border-radius: 10px;
  margin: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 32rem;
  & > img,
  & > p {
    padding: 0 5px 5px 5px;
  }
`;

const Image = styled("img")({
    width: "100%",
    objectFit: "cover",
    borderRadius: "10px 10px 0 0",
    height: "200px",
});

const Text = styled(Typography)`
    color: #878787
    font-size: 12px;
`;
const Heading = styled(Typography)`
  font-size: 18px;
  font-weight: 600;
`;

const Details = styled(Typography)`
  font-size: 14px;
  word-break: break-word;
`;

const StyledCardContent = styled(CardContent)`
  positon:relative;
  bottom:0;
  padding: 5px 3px 0px 2px;
  margin: 0px 2px 0px 2px;
  height:300px;
`;



// --------------------------

function PostData({ post }) {
    const paperStyle = {
        width: "97%",
        borderRadius: 3,
        // backgroundColor: "red",
        height: "450px",
        // padding: "6px",
        margin: "5px",
    };

    // ---------------------------------
    // js
    const url = post.picture ? post.picture : 'url("https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")';

    // ------------------------
    return (
        <>
            <Container>
                <StyledCardContent
                    style={{
                        position: "relative",
                        width: "100%",
                        padding:"6px"
                    }}>
                    <Image
                        component="img"
                        height="200px"
                        position="absolute"
                        top="0"
                        style={{
                            backgroundImage: url,
                            backgroundSize: "cover",
                            borderTopLeftRadius: "8px",
                            borderTopRightRadius: "8px",


                        }}
                    />

                    <Typography gutterBottom variant="h5" component="div"
                        style={{
                            position: "absolute",
                            top: "13.3rem"

                        }}
                    >

                        {addElippsis(post.title, 18)}
                    </Typography>

                    <Details variant="body2" color="text.secondary"
                        style={{
                            position: "absolute",
                            top: "16rem"

                        }}>
                        {addElippsis(post.summary, 165)}
                    </Details>

                    <Typography
                        style={{
                            position: "absolute",
                            top: "21.4rem"

                        }}>
                        Author : {post.username}
                    </Typography>

                    <Text variant="body2" color="text.secondary"
                        style={{
                            position: "absolute",
                            top: "23rem"

                        }}>
                        Category : {post.categories}
                    </Text>

                    <Typography
                        style={{
                            position: "absolute",
                            top: "24.3rem"

                        }}
                    >Project Budget:<CurrencyRupeeOutlinedIcon fontSize="icon" />{post.budget}</Typography>

                    <Text variant="body2" color="text.secondary"
                        style={{
                            position: "absolute",
                            top: "25.9rem"

                        }}>People Joined : 0</Text>

                    <Typography
                        style={{
                            position: "absolute",
                            top: "27.2rem"

                        }}
                    >CSR Verrified : ✅</Typography>



                    <CardActions style={{
                        display: "flex",
                        justifyContent: "space-between",
                        position: "absolute",
                        top: "28.9rem",
                        width: "85%",
                        margin: "2px",
                        height: "2.2rem"
                    }}>
                        <Link to={"/join"}>
                            <Button
                                size="small"
                                sx={{
                                    gap: 10,
                                    transition: "transform 0.3s ease-in-out",
                                    "&:hover": {
                                        transform: "scale(1)",
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
                                        transform: "scale(1)",
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
                </StyledCardContent>
            </Container>
        </>
    )
}
export default PostData;