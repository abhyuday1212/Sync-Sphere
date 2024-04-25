import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import CategoriesLoader from "../loader/CategoriesLoader";

function Volunteer() {
  const [loader, setLoaderVisible] = useState(false);

  useEffect(() => {
    setLoaderVisible(true);
    setTimeout(() => {
      setLoaderVisible(false);
    }, 300);
  }, []);
  return (
    <>
      {loader ? (
        <CategoriesLoader />
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 50,

            backgroundColor: "black",
            height: "84.5vh",
          }}
        >
          <Card
            style={{
              border: "2px solid black",
              width: "75%",
              borderRadius: "26px",
            }}
          >
            This section is working And Will be integrated soon from Harsh Chat
            App
          </Card>
        </div>
      )}
    </>
  );
}

export default Volunteer;
