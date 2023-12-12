import React from "react";
import {
  Box,
  CardActions,
  CardContent,
  Paper,
  Typography,
  styled,
  Button,
  TextareaAutosize,
  Card,
} from "@mui/material";
import { Link } from "react-router-dom";

const Container = styled(Box)(({ theme }) => ({
  margin: "50px 100px",
  [theme.breakpoints.down("md")]: {
    margin: 0,
  },
}));

const Image = styled("img")({
  width: "100%",
  height: "50vh",
  objectFit: "cover",
});

const Heading = styled(Typography)`
  font-size: 38px;
  font-weight: 600;
  text-align: center;
  margin: 50px 0 10px 0;
`;

const Textarea = styled(TextareaAutosize)`
  width: 100%;
  border: 2px solid #d5edff;
  border-radius: 10px;
  margin: 7px 0px;
  padding: 10px 2px;
  padding-left: 8px;
  font-size: 17px;
  font-weight: 350;
  background: #e0eff9;
  resize: none;
  &:focus-visible {
    outline: 2px solid grey;
  }
  ::placeholder {
    opacity: 0.6;
  }
`;

const Author = styled(Box)(({ theme }) => ({
  color: "#878787",
  display: "flex",
  margin: "20px 0",
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));

const Details = (post) => {
  const url =
    "https://t4.ftcdn.net/jpg/04/29/64/57/360_F_429645702_EXZw2TFIzZBjegrXvBzg68gzd4aD62kB.jpg";

  return (
    <Container>
      <Paper
        elevation={24}
        sx={{
          bgcolor: "#eeeeee",
          border: "2px solid black",
          padding: "4px",
          borderRadius: "6px",
        }}
      >
        <Image src={url} alt="post" />
        <Box style={{ float: "right" }}>
          {/* <CardActions>
                        <Link to="/edit">
                            <Button variant="outlined" color="primary">
                                Edit
                            </Button>
                        </Link>
                    </CardActions> */}
        </Box>
        <Heading>Title</Heading>
        <Author>
          <Typography>
            <span style={{ fontWeight: 600 }}>NGO's Name</span>
          </Typography>
        </Author>

        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ bgcolor: "#eeeeee" }}
          >
            Budget:- 14,673
          </Typography>

          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ bgcolor: "#eeeeee", marginTop: 3 }}
          >
            Details :-
          </Typography>
          <div style={{ bgcolor: "#eeeeee" }}>
            <Typography>
              <span style={{ fontWeight: 600 }}>Contact:</span>+91 9896****550
            </Typography>
            <Typography>
              <span style={{ fontWeight: 600 }}>Email:</span>
              apsworks1212@gmail.com
            </Typography>

            <Typography>
              <span style={{ fontWeight: 600 }}>Locatoin:</span> Plot No 1
              Rohini, Plot No 1, CH Bhim Singh Nambardar Marg, Sector 22, PSP
              Area, Delhi, 110086
            </Typography>

            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ marginTop: 3 }}
            >
              Description :-
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Greening Delhi: A Call to Action for a Sustainable Future Are you
              passionate about the environment and the well-being of our
              beautiful city? Do you want to make a positive impact on Delhi's
              landscape and contribute to a sustainable future? If so, we invite
              you to be a part of our Tree Plantation Campaign—a transformative
              initiative aimed at bringing together the community to create a
              greener, healthier Delhi. In recent years, Delhi has faced
              significant environmental challenges, including air pollution,
              deforestation, and the urban heat island effect. These issues not
              only affect the city's residents but also have far-reaching
              consequences on the global climate. Recognizing the urgency of
              addressing these concerns, our Tree Plantation Campaign seeks to
              harness the power of community engagement to foster a positive
              change. The core of our initiative lies in the simple yet
              impactful act of planting trees. Trees are nature's gift to
              humanity, offering a wide range of ecological, social, and
              economic benefits. They act as natural air purifiers, absorbing
              pollutants and releasing oxygen, thereby enhancing air quality.
              Additionally, trees play a crucial role in maintaining
              biodiversity, providing habitat for various species of flora and
              fauna. To make our Tree Plantation Campaign a success, we need
              enthusiastic individuals, community groups, and organizations to
              join hands in this noble endeavor. Planting a tree is not just a
              symbolic gesture; it is a tangible investment in the future of our
              city. By participating in the campaign, you become a steward of
              Delhi's environment, contributing to the creation of green spaces
              that benefit current and future generations. The campaign is
              designed to be inclusive and participatory, encouraging people
              from all walks of life to get involved. Whether you are a student,
              a working professional, a homemaker, or a business owner, your
              contribution matters. We envision a city where every neighborhood
              is adorned with vibrant, leafy canopies—a city where the rustling
              of leaves and the chirping of birds become integral parts of the
              urban soundtrack. Here's how you can actively participate in the
              Tree Plantation Campaign: Community Planting Events: Join us for
              community-driven tree planting events across different
              neighborhoods in Delhi. These events provide an opportunity to
              connect with like-minded individuals, share knowledge about local
              tree species, and collectively contribute to the city's green
              cover. Adopt-a-Tree Program: Consider adopting a tree in your
              locality. As a tree guardian, you will be responsible for its care
              and growth. This not only fosters a sense of ownership but also
              ensures the long-term sustainability of our green spaces.
              Educational Workshops: Attend our informative workshops on tree
              care, environmental conservation, and the importance of
              sustainable living. Knowledge is a powerful tool, and by
              understanding the role trees play in our ecosystem, we can make
              informed choices for a greener future. Spread the Word: Use your
              influence to raise awareness about the Tree Plantation Campaign.
              Share our mission on social media, organize awareness drives in
              your community, and inspire others to join the cause. Corporate
              Partnerships: Encourage your workplace to participate in the
              campaign. Corporate partnerships can significantly amplify the
              impact of the initiative, leading to large-scale tree plantations
              and fostering a culture of environmental responsibility. Our Tree
              Plantation Campaign is not just about planting trees; it's about
              sowing the seeds of a sustainable and resilient Delhi. Together,
              let's transform our city into a model of environmental
              stewardship. Join us in making a positive impact on Delhi's
              landscape and ensuring a healthier, greener future for all. Be a
              part of the change. Embrace the green revolution. Let's make Delhi
              a city of trees, for us and for the generations to come.
            </Typography>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 5,
              }}
            >
              <Link to={"/join"}>
                <Button variant="contained">Join</Button>
              </Link>
            </Typography>
          </div>
        </CardContent>
      </Paper>
    </Container>
  );
};

export default Details;
