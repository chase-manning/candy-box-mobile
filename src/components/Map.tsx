import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import village from "../ascii/places/village/village/village";
import { Page, selectPage } from "../store/navigationSlice";
import RenderArea from "./RenderArea";

const StyledMap = styled.div`
  width: 100%;
  height: 100%;
  white-space: pre;
  overflow: auto;
`;

const Map = () => {
  const page = useSelector(selectPage);

  if (page !== Page.Map) return null;

  return (
    <StyledMap>
      <RenderArea area={village} />
    </StyledMap>
  );
};

export default Map;
