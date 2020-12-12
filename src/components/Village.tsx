import React, { useEffect, useState } from "react";
import { village } from "../ascii/places/village/village/village";
import RenderArea, { Overlay } from "./RenderArea";

const Village = () => {
  let heightModify = 0;
  let smokeAscii = ["(", ")"];
  const [smokes, setSmokes] = useState([
    {
      area: smokeAscii,
      x: 8,
      y: 26,
    },
    {
      area: smokeAscii,
      x: 64,
      y: 26,
    },
    {
      area: smokeAscii,
      x: 80,
      y: 26,
    },
    {
      area: smokeAscii,
      x: 59,
      y: 42,
    },
  ]);

  const animate = () => {
    if (heightModify === 4) {
      heightModify = 0;
      smokeAscii = ["(", ")"];
    } else {
      heightModify += 1;
      smokeAscii = smokeAscii.reverse();
      if (heightModify === 3) smokeAscii = [];
    }
    setSmokes([
      {
        area: smokeAscii,
        x: 8,
        y: 26 - heightModify,
      },
      {
        area: smokeAscii,
        x: 64,
        y: 26 - heightModify,
      },
      {
        area: smokeAscii,
        x: 80,
        y: 26 - heightModify,
      },
      {
        area: smokeAscii,
        x: 59,
        y: 42 - heightModify,
      },
    ]);

    setTimeout(() => animate(), 1000);
  };

  useEffect(() => {
    animate();
  }, []);

  return <RenderArea area={village} overlays={smokes} />;
};
export default Village;
