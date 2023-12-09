import React from "react";
import {
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
} from "@mui/material";
import { catagories } from "../constants/data";
import { Link } from "react-router-dom";
import "./categories.css"

const StyledTable = styled(Table)`
  border: 2px solid rgba(224, 224, 224, 1);
`;
const StyledButton = styled(Button)`
  margin: 20px;
  width: 85%;
  background: #008000;
  color: #fff;
  text-decoration: none;
`;
function Categories() {
  const divStyle = {
    maxHeight: "85vh",
    overflowX: "hidden",
    border: "2px solid grey",
    borderRadius: "14px",
    padding: "5px",
    margin:"1px",
  };
  return (
    <>
      <Grid container>
        <div style={divStyle} className="scrollbar">
          <Link to="/create">
            <StyledButton variant="contained" color="primary">
              New Project
            </StyledButton>
          </Link>

          <StyledTable>
            <TableHead>
              <TableRow>
                <TableCell>All Projects</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {catagories.map((category) => (
                <TableRow key={category.id}>
                  <TableCell>{category.type}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </StyledTable>
        </div>
      </Grid>
    </>
  );
}

export default Categories;
