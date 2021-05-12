import Head from "next/head";
import styled from "styled-components";
import { TopNav } from "../../components/TopNav";
import { FooterComponent } from "../../components/Footer";
import { FaEthereum } from "react-icons/fa";
import { FetchAssetFromOpenSea } from "../../functions/FetchAsset";
import { useRouter } from "next/router";

import {
  PageWrapper,
  AlignPage,
  MaxContentGrid,
} from "../../components/defaults";
import { Spacer } from "../../components/Spacer";

const Image = styled.img`
  height: 100%;
  max-height: 550px;
  margin: 10%;
`;

const Content = styled.div`
  width: 100%;
  max-width: 980px;
`;

const ArtName = styled.div`
  font-family: JetBrains Mono;
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 48px;
  text-align: right;
  color: #000000;
  width: 100%;
  max-width: 980px;
`;

const ArtDescription = styled.div`
  font-family: Jet;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  text-align: right;
  color: #000000;
`;

const OwnerCreator = styled.div`
  max-width: 450px;
  height: 100%;
  background: #f8f9fa;
  border-radius: 10px;
  padding: 15px;
  font-family: Jet;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: #000000;
  margin-bottom: 20px;
  :hover {
    cursor: pointer;
    background-color: #20ffd710;
  }
`;

const Card = styled.div`
  width: 100%;
  max-width: 470px;
  height: 100%;
  min-height: 100px;
  background: #f8f9fa;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 20px;
`;

const CardRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
`;

const CardColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  width: 100%;
`;

const CardImg = styled.img`
  width: 70px;
  margin-right: 8px;
`;

const CardHeader = styled.div`
  font-family: Giaza;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 24px;
`;

const CardDescription = styled.div`
  font-family: Jet;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
`;

const CardStats = styled.div`
  font-family: Jet;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
`;

export default function Page({ data, address, token }) {
  const router = useRouter();

  const sendToGallery = async (address) => {
    router.push(`/gallery/${address}`);
  };

  console.log(data);

  const salePrice = data?.last_sale?.total_price / Math.pow(10, 18);

  return (
    <>
      <PageWrapper>
        <AlignPage>
          <Head>
            <title>Clekta Asset | {data.name}</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <TopNav />
          <Image src={data.image_url} />
          <Content>
            <ArtName>{data.name}</ArtName>
            <ArtDescription>{data.description}</ArtDescription>
          </Content>
          <Spacer spacer="100px" />
          <MaxContentGrid>
            <OwnerCreator onClick={() => sendToGallery(data.owner.address)}>
              Owner: {data.owner.address}
            </OwnerCreator>
            <OwnerCreator onClick={() => sendToGallery(data.creator.address)}>
              Creator: {data.creator.address}
            </OwnerCreator>
          </MaxContentGrid>
          <MaxContentGrid>
            <Card>
              <CardRow>
                {data.asset_contract.image_url ? (
                  <CardImg src={data.asset_contract.image_url} />
                ) : null}
                <CardColumn>
                  <CardHeader>{data.asset_contract.name}</CardHeader>
                  <CardDescription>
                    {data.asset_contract.description}
                  </CardDescription>
                </CardColumn>
              </CardRow>
            </Card>
            <Card>
              <CardHeader>Stats & Info</CardHeader>
              <CardStats>
                Total Sales:
                {data.num_sales}
              </CardStats>
              <CardStats>
                Last Sale Price: <FaEthereum size="10" />
                {salePrice}
              </CardStats>
              <CardStats>
                Last Sale Date: {data.last_sale?.event_timestamp}
              </CardStats>
            </Card>
          </MaxContentGrid>
        </AlignPage>
      </PageWrapper>
      <FooterComponent />
    </>
  );
}

// This gets called on every request
export async function getServerSideProps(context) {
  const address = context.query.asset;
  const token = context.query.token;
  const data = await FetchAssetFromOpenSea(address, token);
  // Pass data to the page via props
  return { props: { data, address, token } };
}
