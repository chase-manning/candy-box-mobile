import styled from "styled-components";

type ButtonProps = {
  marginTop?: string;
};

const Button = styled.button`
  border: solid 1px #464c54;
  background-color: #dcdad5;
  margin-top: ${(props: ButtonProps) => props.marginTop || "10px"};
`;

export default Button;
