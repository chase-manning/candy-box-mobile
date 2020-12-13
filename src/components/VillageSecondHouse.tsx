import React from "react";
import styled from "styled-components";
import { secondHouse } from "../ascii/places/village/village/secondHouse.tsx/secondHouse";
import RenderArea from "./RenderArea";

const StyledVillageSecondHouse = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const VillageSecondHouse = () => {
  return (
    <StyledVillageSecondHouse>
      <RenderArea area={secondHouse} />
    </StyledVillageSecondHouse>
  );
};

export default VillageSecondHouse;
