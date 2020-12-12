import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectVillagePage, VillagePage } from "../store/navigationSlice";
import VillageFirstHouse from "./VillageFirstHouse";
import VillageHome from "./VillageHome";

const StyledVillage = styled.div`
  width: 100%;
  height: 100%;
`;

const Village = () => {
  const villagePage = useSelector(selectVillagePage);

  return (
    <StyledVillage>
      {villagePage === VillagePage.HOME && <VillageHome />}
      {villagePage === VillagePage.FirstHouse && <VillageFirstHouse />}
    </StyledVillage>
  );
};
export default Village;
