import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  removeCandies,
  selectCandies,
  selectGroundCandies,
  throwCandiesOnGround,
} from "../store/currencySlice";
import {
  Page,
  selectNavBarEnabled,
  selectPage,
  enableNavBar,
  enableHealthBar,
} from "../store/navigationSlice";

const StyledTheCandyBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
`;

const Button = styled.button`
  margin-top: 50px;
  border: solid 1px #464c54;
  background-color: #dcdad5;
`;

const Text = styled.div`
  width: 100%;
  margin-top: 15px;
`;

const groundCandiesSuffixes = [
  ".",
  "...",
  "...?",
  "...? :|",
  "...? :/",
  "...? :(",
  "...? :[",
  "...? :{",
  "...? :'(",
  "...? (;_;)",
  "...?  (;_;)",
  "...?   (;_;)",
  "...?    (;_;)",
  "...?   (;_;)",
  "...?  (;_;)",
  "...? (;_;)",
  "...? (;__;)",
  "...? (;___;)",
  "...? (;__;)",
  "...? (:.:)",
  "...? (:_:)",
  "...? (;_;)",
  "...?(;_;)",
  "...? (;_;)",
  // TODO Finish this line
];

const TheCandyBox = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const candies = useSelector(selectCandies);
  const groundCandies = useSelector(selectGroundCandies);
  const navBarEnabled = useSelector(selectNavBarEnabled);

  if (page !== Page.TheCandyBox) return null;

  return (
    <StyledTheCandyBox>
      {!navBarEnabled && <div>You have {candies} candies</div>}
      <Button onClick={() => dispatch(removeCandies(candies))}>
        Eat all the candies
      </Button>
      {candies + groundCandies >= 10 && (
        <div>
          <Button
            onClick={() => {
              if (candies >= 10) dispatch(throwCandiesOnGround());
            }}
          >
            Throw 10 candies on the ground
          </Button>
          {groundCandies > 0 && (
            <Text>
              You threw {groundCandies} on the ground
              {groundCandiesSuffixes[groundCandies / 10 - 1]}
            </Text>
          )}
        </div>
      )}
      {candies >= 30 && (
        <Button onClick={() => dispatch(enableNavBar())}>
          Request a new feature (30 candies)
        </Button>
      )}
      {candies >= 5 && navBarEnabled && (
        <Button onClick={() => dispatch(enableHealthBar())}>
          Request another one (5 candies)
        </Button>
      )}
      {navBarEnabled && !enableHealthBar && (
        <Text>You've unlocked a Nav Bar! (below)</Text>
      )}
      {navBarEnabled && (
        <Text>
          Here's 100 health points for you. They are going to be useful.
        </Text>
      )}
    </StyledTheCandyBox>
  );
};

export default TheCandyBox;
