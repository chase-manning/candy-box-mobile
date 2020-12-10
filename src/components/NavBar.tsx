import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { selectCandies } from "../store/currencySlice";
import {
  Page,
  selectNavBarEnabled,
  selectPage,
  setPage,
} from "../store/navigationSlice";
import Line from "./Line";
import Seperator from "./Seperator";

const StyledNavBar = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

type ButtonProps = {
  selected: boolean;
};

const Button = styled.div`
  width: 60px;
  padding: 5px;
  background-color: ${(props: ButtonProps) =>
    props.selected ? "var(--selected)" : "none"};
  text-transform: uppercase;
  text-align: center;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const NavBar = () => {
  const dispatch = useDispatch();
  const candies = useSelector(selectCandies);
  const navbarEnabled = useSelector(selectNavBarEnabled);
  const page = useSelector(selectPage);

  if (!navbarEnabled) return null;

  return (
    <StyledNavBar>
      <Line />
      <Content>
        <Seperator />
        {candies + " candies"}
        <Seperator />
        <Button
          selected={page === Page.TheCandyBox}
          onClick={() => dispatch(setPage(Page.TheCandyBox))}
        >
          The Candy Box
        </Button>
        <Seperator />
      </Content>
      <Line />
    </StyledNavBar>
  );
};

export default NavBar;
