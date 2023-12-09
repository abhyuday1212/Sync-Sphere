import React from 'react';
import { Box, CardActions, CardContent, Paper, Typography, styled, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Container = styled(Box)(({ theme }) => ({
    margin: '50px 100px',
    [theme.breakpoints.down('md')]: {
        margin: 0
    },
}));

const Image = styled('img')({
    width: '100%',
    height: '50vh',
    objectFit: 'cover'
});

const Heading = styled(Typography)`
    font-size: 38px;
    font-weight: 600;
    text-align: center;
    margin: 50px 0 10px 0;
`;

const Author = styled(Box)(({ theme }) => ({
    color: '#878787',
    display: 'flex',
    margin: '20px 0',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    },
}));

const Details = (post) => {
    const url = "https://t4.ftcdn.net/jpg/04/29/64/57/360_F_429645702_EXZw2TFIzZBjegrXvBzg68gzd4aD62kB.jpg";

    return (
        <Container>
            <Paper   sx={{ bgcolor: "#c3c3c3", border: "2px solid black", padding: "4px", borderRadius: "6px" }}>
                <Image src={url} alt="post" />
                <Box style={{ float: 'right' }}>
                    <CardActions>
                        <Link to="/edit">
                            <Button variant="outlined" color="primary">
                                Edit
                            </Button>
                        </Link>
                    </CardActions>
                </Box>
                <Heading>Title</Heading>
                <Author>
                    <Typography>Author: <span style={{ fontWeight: 600 }}>username</span></Typography>
                </Author>

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Transform Delhi: Join Our Tree Plantation Campaign for a Greener Tomorrow!
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Are you passionate about the environment and the well-being of our beautiful city? Do you want to make a positive impact on Delhi's landscape and contribute to a sustainable future? If so, we invite you to be a part of our Tree Plantation Campaign—a transformative initiative aimed at bringing together the community to create a greener, healthier Delhi.
                        
                    </Typography>
                </CardContent>
            </Paper>
        </Container>
    );
}

export default Details;
