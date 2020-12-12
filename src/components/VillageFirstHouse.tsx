import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectVillagePage, VillagePage } from "../store/navigationSlice";

const StyledVillageFirstHouse = styled.div`
  width: 100%;
  height: 100%;
`;

const VillageFirstHouse = () => {
  const villagePage = useSelector(selectVillagePage);

  if (villagePage !== VillagePage.FirstHouse) return null;

  return <StyledVillageFirstHouse>First House</StyledVillageFirstHouse>;
};

export default VillageFirstHouse;
