import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { village } from "../ascii/places/village/village/village";
import { setVillagePage, VillagePage } from "../store/navigationSlice";
import RenderArea from "./RenderArea";

const StyledVillage = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

type ButtonProps = {
  x: number;
  y: number;
  width: number;
  height: number;
};

const Button = styled.button`
  position: absolute;
  top: ${(props: ButtonProps) => props.y * 15 + "px"};
  left: ${(props: ButtonProps) => props.x * 7 + "px"};
  height: ${(props: ButtonProps) => props.height * 15 + "px"};
  width: ${(props: ButtonProps) => props.width * 7 + "px"};
`;

const Village = () => {
  const dispatch = useDispatch();

  let heightModify = 0;
  let smokeAscii = ["( ", " )"];
  const [smokes, setSmokes] = useState([
    {
      area: smokeAscii,
      x: 8,
      y: 22,
    },
    {
      area: smokeAscii,
      x: 64,
      y: 22,
    },
    {
      area: smokeAscii,
      x: 80,
      y: 22,
    },
    {
      area: smokeAscii,
      x: 59,
      y: 42,
    },
  ]);

  const animate = () => {
    if (heightModify === 3) {
      heightModify = 0;
      smokeAscii = ["( ", " )"];
    } else {
      heightModify += 1;
      smokeAscii = smokeAscii.reverse();
      if (heightModify === 3) smokeAscii = [];
    }
    setSmokes([
      {
        area: smokeAscii,
        x: 8,
        y: 22 - heightModify,
      },
      {
        area: smokeAscii,
        x: 64,
        y: 22 - heightModify,
      },
      {
        area: smokeAscii,
        x: 80,
        y: 22 - heightModify,
      },
      {
        area: smokeAscii,
        x: 59,
        y: 38 - heightModify,
      },
    ]);

    setTimeout(() => animate(), 1000);
  };

  useEffect(() => {
    animate();
  }, []);

  return (
    <StyledVillage>
      <RenderArea area={village} overlays={smokes} />
      <Button
        onClick={() => dispatch(setVillagePage(VillagePage.FirstHouse))}
        x={1}
        y={23}
        width={13}
        height={5}
      />
      <Button
        onClick={() => dispatch(setVillagePage(VillagePage.SecondHouse))}
        x={19}
        y={19}
        width={10}
        height={9}
      />
      <Button
        onClick={() => dispatch(setVillagePage(VillagePage.ThirdHouse))}
        x={33}
        y={23}
        width={8}
        height={5}
      />
      <Button
        onClick={() => dispatch(setVillagePage(VillagePage.Forge))}
        x={63}
        y={23}
        width={11}
        height={5}
      />
      <Button
        onClick={() => dispatch(setVillagePage(VillagePage.FourthHouse))}
        x={79}
        y={23}
        width={11}
        height={5}
      />
      <Button
        onClick={() => dispatch(setVillagePage(VillagePage.FithHouse))}
        x={94}
        y={23}
        width={10}
        height={5}
      />
    </StyledVillage>
  );
};
export default Village;
