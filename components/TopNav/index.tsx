import styled from "styled-components";
import { useRouter } from "next/router";

const Title = styled.div`
  font-family: Giaza;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 36px;
  color: #000000;
  margin-left: 15px;
  :hover {
    cursor: pointer;
  }
`;

const Top = styled.div`
  display: flex;
  align-items: flex-start;
  position: absolute;
  top: 30px;
  width: 100%;
  max-width: 980px;
  text-align: left;
  padding-bottom: 20px;
`;

export const TopNav = (): JSX.Element => {
  const router = useRouter();

  return (
    <Top>
      <Title onClick={() => router.push(`/`)}>Clekta</Title>
    </Top>
  );
};
