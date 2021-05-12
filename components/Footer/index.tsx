import styled from "styled-components";
import { RiTwitterFill } from "react-icons/ri";

const Footer = styled.div`
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #f8f9fa;
  display: grid;
  place-items: center;
  padding: 20px;
`;

const FooterText = styled.div`
  font-family: Jet;
  font-weight: 200;
  font-size: 14px;
  line-height: 18px;
  color: #000000;
  text-align: left;
  width: 100%;
  max-width: 980px;
`;

const FooterLink = styled.a`
  font-family: Jet;
  font-weight: 200;
  font-size: 18px;
  line-height: 18px;
  color: #000000;
  text-align: left;
  width: 100%;
  max-width: 980px;
`;

export const FooterComponent = (): JSX.Element => {
  return (
    <Footer>
      <FooterText>Built by @philliplakis</FooterText>
      <FooterLink href="https://twitter.com/philliplakis" target="_blank">
        <RiTwitterFill />
      </FooterLink>
    </Footer>
  );
};
