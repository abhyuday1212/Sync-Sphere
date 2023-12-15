import React from "react";
import { Grid } from "@mui/material";
import Posts from "../post/Posts";
import Categories from "../categories/catagories";

function ProjectsHome() {
  return (
    <>
      <Grid container>
        <Grid item lg={2} sm={2} xs={12}
          style={{

            border: "2px solid grey",
            borderRadius: "14px"
          }}>
          <Categories />
        </Grid>

        <Grid container item lg={10} sm={10} xs={12}>
          <Posts />
        </Grid>
      </Grid>
    </>
  );
}

export default ProjectsHome;
