import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Page, selectPage } from "../store/navigationSlice";

const StyledMap = styled.div`
  width: 100%;
  height: 100%;
`;

const Map = () => {
  const page = useSelector(selectPage);

  if (page !== Page.Map) return null;

  return <StyledMap></StyledMap>;
};

export default Map;
