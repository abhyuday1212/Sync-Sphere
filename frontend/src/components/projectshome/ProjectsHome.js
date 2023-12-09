import React from "react";


import { Grid } from "@mui/material";

import Post from "../post/post";
import Categories from "../categories/catagories";
import Footer from "../footer/footer";

function ProjectsHome() {
  return (
    <>
    

      <Grid container>
        <Grid item lg={2} sm={2} xs={12}>
          <Categories />
        </Grid>
        <Grid  item lg={10} sm={10} xs={12}>
          <Post  />
          
        </Grid>
      </Grid>

      <Footer />
    </>
  );
}

export default ProjectsHome;
