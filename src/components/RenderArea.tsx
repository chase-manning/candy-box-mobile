import React from "react";
import styled from "styled-components";

const StyledRenderArea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Line = styled.div`
  width: 100%;
`;

type Props = {
  area: string[];
};

const RenderArea = (props: Props) => {
  return (
    <StyledRenderArea>
      {props.area.map((line: string) => (
        <Line>{line}</Line>
      ))}
    </StyledRenderArea>
  );
};

export default RenderArea;
