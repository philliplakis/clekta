import styled from "styled-components";

const Title = styled.div`
  font-family: Jet;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #000000;
  transform: rotate(-90deg);
  margin-bottom: 0px;
`;

interface Props {
  children: string;
}

export const RotatedHeading = ({ children }: Props): JSX.Element => {
  return <Title>{children}</Title>;
};
