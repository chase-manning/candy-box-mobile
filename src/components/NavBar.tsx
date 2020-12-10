import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectCandies } from "../store/currencySlice";
import { selectNavBarEnabled } from "../store/navigationSlice";
import Line from "./Line";
import Seperator from "./Seperator";

const StyledNavBar = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const NavBar = () => {
  const candies = useSelector(selectCandies);
  const navbarEnabled = useSelector(selectNavBarEnabled);

  if (!navbarEnabled) return null;

  return (
    <StyledNavBar>
      <Line />
      <Content>
        <Seperator />
        {candies + " candies"}
        <Seperator />
      </Content>
      <Line />
    </StyledNavBar>
  );
};

export default NavBar;
