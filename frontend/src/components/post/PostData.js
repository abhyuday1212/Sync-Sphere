import React from "react";
import { Link } from "react-router-dom";
import { addElippsis } from "../../utils/frontend-utils";
import DetailView from "../details/DetailView";
import { useEffect, useState } from "react";
import { DataContext } from "../../context/DataProvider";
import { API } from "../../service/Api";
// ----------------------
import { LinearProgress, Paper } from "@mui/material";
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
  height: 33rem;
  & > img,
  & > p {
    padding: 0 5px 5px 5px;
  }
`;

const Image = styled('img')({
    width: "100%",
    aspectRatio: "4/3",
    objectFit: "content",
    borderRadius: "10px 10px 6px 6px",
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

const PostData = ({ post }) => {

    
    const csrnumber = post.csrnumber

    const paperStyle = {
        width: "97%",
        borderRadius: 3,
        height: "450px",
        margin: "5px",
    };
    // ---------------------------------
    // js
    const [csrSymbol, setCsrSymbol] = useState("NOT VERRIFIED ❌")


    useEffect(() => {
        const changeCsrSymbol = async () => {
            console.log('here');
            if (post.csrfile !== "" && post.csrfile !== null && post.csrfile !== undefined) {
                try {
                    
                    const response = await API.checkCsrNumber({ csrnumber: post.csrnumber || '' });
                    const exists = response.data.exists;
                    
                    if (exists) {
                        setCsrSymbol("Verified ✅");
                    } else {
                        setCsrSymbol("NOT VERIFIED ❌");
                    }
                } catch (error) {
                    console.error('Error:', error);
                    // Handle error, e.g., set csrSymbol to an error message
                }
            } else {
                setCsrSymbol("NOT VERIFIED ❌");
            }
        }
        changeCsrSymbol();
    }, [post.csrfile, post.csrnumber]);




    const url = post.picture ? post.picture : 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    //------------------------
    const projectID = post._id;
    const budget = post.budget
    const [Remaining, getRemaining] = useState([]);

    useEffect(() => {
        const fetchRemaining = async () => {

           
          try {
            let response = await API.getTotalDonation({ projectID: projectID || '' });
            if (response.isSuccess) {
              const totalDonation = (response.data.totalDonation);
              getRemaining(budget-totalDonation)
            }
          } catch (error) {
            console.log("Error fetching tota donation for projectID");
          }
          finally {
            
          }
    
          
        }
    
        fetchRemaining();
      }, [projectID]);

      const progress = ((post.budget - Remaining) / post.budget) * 100;
    // ------------------------
    return (
        <>
            <Container>
                <StyledCardContent
                    style={{
                        position: "relative",
                        width: "100%",
                        padding: "6px"
                    }}>
                    <Image
                        src={post.picture || url}
                        component="img"
                    // style={{
                    //     backgroundSize: "cover",
                    //     borderTopLeftRadius: "8px",
                    //     borderTopRightRadius: "8px",


                    // }}
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
                        {addElippsis(post.summary, 130)}
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

                        }}>Email : {post.email}</Text>

                    <Typography
                        style={{
                            position: "absolute",
                            top: "27.2rem"

                        }}
                    >Remainig budget:<CurrencyRupeeOutlinedIcon fontSize="icon" />{Remaining}</Typography>

                    <Typography
                        style={{
                            position: "absolute",
                            top: "28.5rem"

                        }}
                    >CSR Verrified :  {csrSymbol}</Typography>

<div
                        style={{
                            position: "absolute",
                            top: "30rem",
                            width: "100%",
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent:"space-around"
                        }}>
                            
                        <LinearProgress
                            color="success" 
                            style={{
                                width: "85%",
                                height: "1.6vh",
                                borderRadius:'8px'
                            }}
                            type='secondary' variant="determinate" value={progress} />
                        <Typography variant="body2">{progress.toFixed(0)}%</Typography>
                    </div>
                    <CardActions style={{
                        display: "flex",
                        justifyContent: "space-between",
                        position: "absolute",
                        top: "30.8rem",
                        width: "85%",
                        margin: "2px",
                        height: "2rem"
                    }}>

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
                            <Link to={`join/${post._id}`}>
                                Join
                            </Link>
                        </Button>

                        <Link to={`details/${post._id}`}>
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

                    </CardActions>
                </StyledCardContent>
            </Container>
        </>
    )
}
export default PostData;