import React, { useState } from "react";
import styled from "styled-components";
import CurrencyGenerator from "./CurrencyGenerator";
import HealthBar from "./HealthBar";
import Map from "./Map";
import NavBar from "./NavBar";
import TheCandyBox from "./TheCandyBox";

const StyledApp = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const App = () => {
  const [money, setMoney] = useState(0);

  return (
    <StyledApp onClick={() => setMoney(money + 1)}>
      <CurrencyGenerator />
      <TheCandyBox />
      <Map />
      <HealthBar />
      <NavBar />
    </StyledApp>
  );
};

export default App;
