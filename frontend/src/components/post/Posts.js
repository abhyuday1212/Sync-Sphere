import React from "react";
import { useEffect, useState } from "react";
import { API } from "../../service/Api";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import PostData from "./PostData";

// ----------------------
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";

// ---------------------------------


const Posts = () => {

  // js
  const [posts, getPosts] = useState([]);

  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  useEffect(() => {
    const fetchData = async () => {
      let response = await API.getAllPosts({ category: category || '' });
      if (response.isSuccess) {
        getPosts(response.data);
      }
    }
    fetchData();
  }, [category]);


  return (
    <>
      {
        posts && posts.length > 0 ? posts.map(post => (
          <Grid item lg={4} sm={3} xs={1}>
            <Link
              style={{
                textDecoration: 'none', color: 'inherit',
                transition: 'color 0.3s',
              }} to={``}>
              <PostData post={post} />
            </Link>
          </Grid>
        )) : <Box style={{ color: '878787', margin: '30px 80px', fontSize: 18 }}>
          No data is available for selected category
        </Box>
      }
    </>
  );
}

export default Posts;
