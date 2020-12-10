import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  width: 100%;
  padding: 10px;
`;

type Props = {
  money: number;
};

const Header = (props: Props) => {
  return <StyledHeader>{props.money}</StyledHeader>;
};

export default Header;
