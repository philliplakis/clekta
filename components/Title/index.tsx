import styled from "styled-components";

const Title = styled.div`
  font-family: Giaza;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 36px;
  color: #000000;
`;

interface Props {
  children: string;
}

export const TitleComponent = ({ children }: Props): JSX.Element => {
  return <Title>{children}</Title>;
};
