import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  removeCandies,
  selectCandies,
  selectGroundCandies,
  throwCandiesOnGround,
} from "../store/currencySlice";
import { Page, selectPage } from "../store/navigationSlice";

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

  if (page !== Page.TheCandyBox) return null;

  return (
    <StyledTheCandyBox>
      <Button onClick={() => dispatch(removeCandies(candies))}>
        Eat all the candies
      </Button>
      {candies + groundCandies >= 10 && (
        <div>
          <Button onClick={() => dispatch(throwCandiesOnGround())}>
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
      {candies >= 30 && <Button>Request a new feature (30 candies)</Button>}
    </StyledTheCandyBox>
  );
};

export default TheCandyBox;
