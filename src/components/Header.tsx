import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectCandies } from "../store/currencySlice";

const StyledHeader = styled.div`
  width: 100%;
  padding: 10px;
`;

const Header = () => {
  const candies = useSelector(selectCandies);

  return <StyledHeader>{candies}</StyledHeader>;
};

export default Header;
