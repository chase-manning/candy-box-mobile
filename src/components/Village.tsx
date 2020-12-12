import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  selectVillagePage,
  setVillagePage,
  VillagePage,
} from "../store/navigationSlice";
import Button from "../styled/Button";
import VillageFifthHouse from "./VillageFifthHouse";
import VillageFirstHouse from "./VillageFirstHouse";
import VillageForge from "./VillageForge";
import VillageFourthHouse from "./VillageFourthHouse";
import VillageHome from "./VillageHome";
import VillageSecondHouse from "./VillageSecondHouse";
import VillageThirdHouse from "./VillageThirdHouse";

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
      {villagePage === VillagePage.SecondHouse && <VillageSecondHouse />}
      {villagePage === VillagePage.ThirdHouse && <VillageThirdHouse />}
      {villagePage === VillagePage.Forge && <VillageForge />}
      {villagePage === VillagePage.FourthHouse && <VillageFourthHouse />}
      {villagePage === VillagePage.FifthHouse && <VillageFifthHouse />}
      {villagePage !== VillagePage.HOME && (
        <Button onClick={() => dispatch(setVillagePage(VillagePage.HOME))}>
          Back to the village
        </Button>
      )}
    </StyledVillage>
  );
};
export default Village;
