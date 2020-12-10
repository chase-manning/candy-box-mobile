import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectCandies } from "../store/currencySlice";
import { selectNavBarEnabled } from "../store/navigationSlice";

const StyledNavBar = styled.div`
  width: 100%;
  padding: 10px;
`;

const NavBar = () => {
  const candies = useSelector(selectCandies);
  const navbarEnabled = useSelector(selectNavBarEnabled);

  if (!navbarEnabled) return null;

  return <StyledNavBar>{candies + " candies"}</StyledNavBar>;
};

export default NavBar;
