import React, { useState } from "react";
import styled from "styled-components";
import CurrencyGenerator from "./CurrencyGenerator";
import Header from "./Header";
import TheCandyBox from "./TheCandyBox";

const StyledApp = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const App = () => {
  const [money, setMoney] = useState(0);

  return (
    <StyledApp onClick={() => setMoney(money + 1)}>
      <CurrencyGenerator />
      <Header />
      <TheCandyBox />
    </StyledApp>
  );
};

export default App;
