import styled from "styled-components";
import { useRouter } from "next/router";
import ReactTooltip from "react-tooltip";

const Title = styled.div`
  font-family: Giaza;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 36px;
  color: #000000;
  :hover {
    cursor: pointer;
  }
`;

const Profile = styled.img`
  height: 36px;
  width: 36px;
  border-radius: 5px;
  background-color: #000000;
  :hover {
    cursor: pointer;
  }
`;

const Top = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: absolute;
  top: 30px;
  width: 100%;
  max-width: 980px;
  padding-bottom: 20px;
  @media (max-width: 768px) {
    width: 95%;
  }
`;

export const TopNav = (): JSX.Element => {
  const router = useRouter();

  return (
    <Top>
      <Title onClick={() => router.push(`/`)}>Clekta</Title>
      <ReactTooltip
        id="userData"
        getContent={(dataTip) => (
          <Hover>
            <StyledLinkNav>Profile</StyledLinkNav>
            <StyledLinkNav>Gallery</StyledLinkNav>
          </Hover>
        )}
        effect="solid"
        delayHide={500}
        delayUpdate={500}
        place={"bottom"}
        border={false}
        type={"light"}
        backgroundColor="#f8f9fa"
      />
      <Profile
        src={
          "https://products.ls.graphics/mesh-gradients/images/41.-Tonys-Pink_1.jpg"
        }
        data-tip
        data-for="userData"
      />
    </Top>
  );
};

const Hover = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300;
`;
const StyledLinkNav = styled.div`
  font-family: Jet;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: -0.05em;
  color: #000;
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  text-decoration: none;
  :hover {
    cursor: pointer;
    border-radius: 5px;
    background-color: #20ffd750;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
