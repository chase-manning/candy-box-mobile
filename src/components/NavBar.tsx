import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectCandies } from "../store/currencySlice";

const StyledNavBar = styled.div`
  width: 100%;
  padding: 10px;
`;

const NavBar = () => {
  const candies = useSelector(selectCandies);

  return <StyledNavBar>{"You have " + candies + " candies"}</StyledNavBar>;
};

export default NavBar;
