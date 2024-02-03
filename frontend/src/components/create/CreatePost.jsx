import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FreePost from "./FreePost";
import PaidPost from "./PaidPost";
import Dialog from "@mui/material/Dialog";
import Individual from "../details/Individual";
import { Card } from "@mui/material";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function CreatePost() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ width: "100%", margin: "0px 0px" }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            style={{
              // background: "black",
              // width:"100vw",
              background: "#ebebebc4",
              color: "black",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              position: "relative",
              // padding:10,
            }}
          >
            <Tab label="Free" {...a11yProps(0)} sx={{ width: "50vw" }} />
            <Tab label="Paid" {...a11yProps(1)} sx={{ width: "50vw" }} />
          </Tabs>
        </Box>
        <Box style={{ width: "100%" }}>
          <CustomTabPanel value={value} index={0}>
            <Card sx={{ marginY: -9, marginX: -3 }}>
              <FreePost />
            </Card>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Card sx={{ marginY: -9, marginX: -3 }}>
              <PaidPost />
            </Card>
          </CustomTabPanel>
        </Box>
      </Box>
    </div>
  );
}

export default CreatePost;
