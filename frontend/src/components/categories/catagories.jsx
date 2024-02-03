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
import { Link, useSearchParams } from "react-router-dom";
import "./categories.css";

const StyledTable = styled(Table)`
  border: 2px solid rgba(224, 224, 224, 1);
`;
const StyledButton = styled(Button)`
  margin: 20px;
  width: 85%;
  background: #00df9a;
  color: #000300;
  font-weight: 600;
  border: 2px solid #00df9a;

  &:hover {
    background: #fcfcfc;
    color: crimson;
    border: 2px solid #00df9a;
  }
`;
const StyledHead = styled(TableCell)`
  width: 100%;
  height: 3rem;
  font-size: 1rem;
  background: #e8e8e8;
  color: black;
  font-weight: 850;
  letter-spacing: 0.05em;
  text-align: center;
  padding: 0px 0px;

  &:hover {
    background: #e8e8e8;
    color: crimson;
  }
`;
const StyledTableCell = styled(TableCell)`
  display: flex;
  align-items: center;

  &:hover {
    background: #e8e8e8;
    color: crimson;
    // font-weight: 850;
    // letter-spacing: 0.05em;
    // border: 2px solid #00df9a;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  width: 100%;
  height: 100%;
  padding: 0px 0px;
`;

function Categories() {
  const divStyle1 = {
    height: "100%",
    width: "100%",
    overflowX: "hidden",
    padding: "5px",
    margin: "1px",
  };

  const divStyle2 = {
    height: "100%",
    width: "100%",
    overflowX: "hidden",
    padding: "5px",
    margin: "1px",
  };

  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  return (
    <>
      <Grid container>
        <div style={divStyle1} className="outer-div">
          <div style={divStyle2} className="inner-div">
            <Link
              to={`/create?category=${category || ""}`}
              style={{ textDecoration: "none" }}
            >
              <StyledButton variant="contained" color="primary">
                New Project
              </StyledButton>
            </Link>

            <StyledTable>
              <TableHead>
                <TableRow>
                  <StyledHead>
                    <StyledLink to={"/projects/"}>All Categories</StyledLink>
                  </StyledHead>
                </TableRow>
              </TableHead>

              <TableBody>
                {catagories.map((category) => (
                  <TableRow key={category.id}>
                    <StyledLink to={`/projects/?category=${category.type}`}>
                      <StyledTableCell>{category.type}</StyledTableCell>
                    </StyledLink>
                  </TableRow>
                ))}
              </TableBody>
            </StyledTable>
          </div>
        </div>
      </Grid>
    </>
  );
}

export default Categories;
