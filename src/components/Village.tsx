import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  selectVillagePage,
  setVillagePage,
  VillagePage,
} from "../store/navigationSlice";
import Button from "../styled/Button";
import VillageFirstHouse from "./VillageFirstHouse";
import VillageHome from "./VillageHome";

const StyledVillage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Village = () => {
  const dispatch = useDispatch();
  const villagePage = useSelector(selectVillagePage);

  return (
    <StyledVillage>
      {villagePage === VillagePage.HOME && <VillageHome />}
      {villagePage === VillagePage.FirstHouse && <VillageFirstHouse />}
      <Button onClick={() => dispatch(setVillagePage(VillagePage.HOME))}>
        Back to the village
      </Button>
    </StyledVillage>
  );
};
export default Village;
