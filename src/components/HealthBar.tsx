import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectCurrentHealth, selectMaxHealth } from "../store/characterSlice";
import { selectHealthBarEnabled } from "../store/navigationSlice";

const StyledHealthBar = styled.div`
  width: 100%;
  position: relative;
  padding: 0 10px;
`;

const PercentBar = styled.div`
  width: 100%;
  height: 16px;
  background-color: yellow; //TODO Fix Color
`;

type PercentCompleteProps = {
  percent: number;
};

const PercentComplete = styled.div`
  width: ${(props: PercentCompleteProps) =>
    Math.round(props.percent * 100) + "%"};
  height: 100%;
  background-color: var(--health-full); //TODO Add Dynamic Color
`;

const PercentText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HealthBar = () => {
  const maxHealth = useSelector(selectMaxHealth);
  const currentHealth = useSelector(selectCurrentHealth);
  const healthBarEnabled = useSelector(selectHealthBarEnabled);

  if (!healthBarEnabled) return null;

  return (
    <StyledHealthBar>
      <PercentBar>
        <PercentComplete percent={currentHealth / maxHealth} />
      </PercentBar>
      <PercentText>
        Your health: {currentHealth}/{maxHealth}
      </PercentText>
    </StyledHealthBar>
  );
};

export default HealthBar;
