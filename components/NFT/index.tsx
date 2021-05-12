import styled from "styled-components";
import { useRouter } from "next/router";

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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 180px;
  max-width: 180px;
  border-radius: 10px;
`;

const Name = styled.div`
  font-family: Jet;
  font-weight: 200;
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
  font-weight: 900;
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
  address: string;
  token: string;
}

export const NFTComponent = ({
  name,
  family,
  img,
  address,
  token,
}: Props): JSX.Element => {
  const router = useRouter();

  const sendToGallery = async () => {
    router.push(`/asset/${address}?token=${token}`);
  };

  return (
    <CardBg onClick={() => sendToGallery()}>
      <CardTop>
        <TokenImage src={img} />
      </CardTop>
      <Name>{name}</Name>
      <Family>{family}</Family>
    </CardBg>
  );
};
