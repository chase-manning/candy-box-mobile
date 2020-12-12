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
  white-space: pre;
`;

export type Overlay = {
  area: string[];
  x: number;
  y: number;
};

const overlayArea = (area: string[], overlay: Overlay): string[] => {
  let overlayedArea = area;
  overlay.area.forEach((overlayLine: string, index: number) => {
    const lineIndex = overlay.y + index;
    let overlayedAreaLine = overlayedArea[lineIndex];
    overlayedArea[lineIndex] =
      overlayedAreaLine.substring(0, overlay.x) +
      overlayLine +
      overlayedAreaLine.substring(
        overlay.x + overlayLine.length,
        overlayedAreaLine.length
      );
  });
  return overlayedArea;
};

type Props = {
  area: string[];
  overlays?: Overlay[];
};

const RenderArea = (props: Props) => {
  let overlayedArea = [...props.area];
  if (props.overlays) {
    props.overlays.forEach(
      (overlay: Overlay) =>
        (overlayedArea = overlayArea(overlayedArea, overlay))
    );
  }

  return (
    <StyledRenderArea>
      {overlayedArea.map((line: string) => (
        <Line>{line}</Line>
      ))}
    </StyledRenderArea>
  );
};

export default RenderArea;
