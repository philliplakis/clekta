import styled from "styled-components";

const Button = styled.button`
  margin: 15px;
  background: #20ffd7;
  width: 200px;
  height: 45px;
  border: 1px solid #20ffd7;
  box-sizing: border-box;
  border-radius: 10px;
  font-family: Giaza;
  font-style: normal;
  font-size: 24px;
  line-height: 45px;
  letter-spacing: -0.05em;
  color: #000;
  outline: none;
  :hover {
    cursor: pointer;
    background-color: #20ffd799;
    border: 1px solid #20ffd799;
  }
`;

interface Props {
  onClick: any;
  children: string;
}

export const ButtonComponent = ({ onClick, children }: Props): JSX.Element => {
  return <Button onClick={() => onClick()}>{children}</Button>;
};
