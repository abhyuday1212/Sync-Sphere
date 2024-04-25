import React from "react";
import { useEffect, useState } from "react";
import { API } from "../../service/Api";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import PostData from "./PostData";

// ----------------------
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import CategoriesLoader from "../loader/CategoriesLoader"
// ---------------------------------


const Posts = () => {

  // js
  const [posts, getPosts] = useState([]);

  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  // -*-*-*-*-*  Loader -*-*-*-*-*-*-*-*-*-*-*-**
  const [loaderVisible, setCategoriesLoaderVisible] = useState(false);

  const showCategoriesLoader = () => {
    setCategoriesLoaderVisible(true);
  };

  const hideCategoriesLoader = () => {
    setCategoriesLoaderVisible(false);
  };
  // -*-*-*-*-**-***-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**

  useEffect(() => {
    const fetchData = async () => {
      try {
        showCategoriesLoader()
        let response = await API.getAllPosts({ category: category || '' });
        if (response.isSuccess) {
          getPosts(response.data);
        }
      } catch (error) {
        console.log("Error fetching categories response");
      }
      finally {
        setTimeout(() => {
          hideCategoriesLoader();
        }, 600);
      }


    }

    fetchData();
  }, [category]);


  return (
    <>
      {loaderVisible && <CategoriesLoader />}
      {!loaderVisible && posts && posts.length > 0 ? posts.map(post => (
        <Grid item xs={12} sm={6} md={4} lg={4}>
          {/* <Link to={`details/${post._id}`} */}
          {/* style={{
              textDecoration: 'none', color: 'inherit',
              transition: 'color 0.3s',
            }}> */}
          <PostData post={post} />
          {/* </Link> */}
        </Grid>
      )) : !loaderVisible ? (
        <Box style={{ color: '878787', margin: '30px 80px', fontSize: 18 }}>
          No data is available for the selected category
        </Box>
      ) : null}
    </>
  );
}

export default Posts;
