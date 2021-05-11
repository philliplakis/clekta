import styled from "styled-components";

const CardBg = styled.div`
  height: 300px;
  width: 200px;
  border-radius: 30px;
  background: #f8f9fa;
  position: relative;
  box-shadow: 0px 0px 10px rgba(32, 255, 215, 0.44);
  margin: 10px;
  :hover {
    cursor: pointer;
    background-color: #20ffd799;
  }
`;

const CardTop = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 30px;
  position: absolute;
  bottom: 33.33%;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);
`;

const TokenImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-height: 180px;
`;

const Name = styled.div`
  font-family: Jet;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #000000;
  position: absolute;
  left: 0%;
  right: 0%;
  top: 75.33%;
  bottom: 18.67%;
`;

const Family = styled.div`
  font-family: Jet;
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #000000;
  position: absolute;
  left: 4%;
  right: 2.5%;
  top: 90%;
  bottom: 4%;
`;

interface Props {
  isFeatured: boolean;
  img: string;
  name: string;
  family: string;
}

export const NFTComponent = ({ name, family, img }: Props): JSX.Element => {
  return (
    <CardBg>
      <CardTop>
        <TokenImage src={img} />
      </CardTop>
      <Name>{name}</Name>
      <Family>{family}</Family>
    </CardBg>
  );
};
