import React from "react";
import styled from "styled-components";

const StyledLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const FlexibleLine = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
`;

const End = styled.div``;

const Line = () => {
  return (
    <StyledLine>
      <End>+</End>
      <FlexibleLine>
        ------------------------------------------------------------------------------
      </FlexibleLine>
      <End>+</End>
    </StyledLine>
  );
};

export default Line;
