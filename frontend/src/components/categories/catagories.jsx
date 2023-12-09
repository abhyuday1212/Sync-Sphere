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
import { Link ,} from "react-router-dom";

const StyledTable = styled(Table)`
  border: 1px solid rgba(224, 224, 224, 1);
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
    maxHeight: "80vh",
    overflowX: "hidden",
    border: "2px solid rgb(176 174 174)",
    borderRadius: "14px",
    padding: "10px",
  };


  return (
    <>
      <Grid container>
        <div style={divStyle}>
          <Link to="/create">
            <StyledButton variant="contained" color="primary">
              Create a Blog
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
