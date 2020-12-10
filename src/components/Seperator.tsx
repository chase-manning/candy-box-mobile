import React from "react";
import styled from "styled-components";

const StyledSeperator = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Line = styled.div``;

const Seperator = () => {
  return (
    <StyledSeperator>
      <Line>|</Line>
      <Line>|</Line>
      <Line>|</Line>
    </StyledSeperator>
  );
};

export default Seperator;
