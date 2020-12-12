import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Page, selectPage } from "../store/navigationSlice";
import Village from "./Village";

const StyledMap = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 10px;
`;

const Map = () => {
  const page = useSelector(selectPage);

  if (page !== Page.Map) return null;

  return (
    <StyledMap>
      <Village />
    </StyledMap>
  );
};

export default Map;
