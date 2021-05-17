import { useState, useEffect } from "react";

import Head from "next/head";
import styled from "styled-components";
import { TopNav } from "../../components/TopNav";
import { FooterComponent } from "../../components/Footer";
import { FaEthereum } from "react-icons/fa";
import { FetchAssetFromOpenSea } from "../../functions/FetchAsset";
import { useRouter } from "next/router";
import Web3 from "web3";
declare let window: any;

import {
  PageWrapper,
  AlignPage,
  MaxContentGrid,
} from "../../components/defaults";
import { Spacer } from "../../components/Spacer";

const Title = styled.div`
  display: flex;
  padding-top: 25%;
  height: 100%;
  max-width: 980px;
  font-family: Jet;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 36px;
  color: #000000;
`;

const Image = styled.img`
  height: 100%;
  max-height: 650px;
  max-width: 100%;
  margin: 10%;
`;

const Content = styled.div`
  width: 100%;
  max-width: 980px;
`;

const ArtName = styled.div`
  font-family: Jet;
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  line-height: 48px;
  text-align: right;
  color: #000000;
`;

const ArtDescription = styled.div`
  font-family: Jet;
  font-weight: 500;
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
  font-weight: 500;
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
  min-height: 50px;
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
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
`;

const CardDescription = styled.div`
  font-family: Jet;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
`;

const CardStats = styled.div`
  font-family: Jet;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
`;

async function getWeb3(setWeb3): Promise<Web3 | any> {
  let web3: Web3;
  if (window.ethereum) {
    // Modern dapp browsers
    web3 = new Web3(window.ethereum);
    setWeb3(web3);
    localStorage.setItem("web3state", "true");
    return web3;
  } else if (window.web3) {
    // Legacy dapp browsers...
    web3 = new Web3(window.web3.currentProvider);
    setWeb3(web3);
    localStorage.setItem("web3state", "true");

    return Web3;
  } else {
    localStorage.setItem("web3state", "false");

    return null;
  }
}

export default function Page({ data, address, token }) {
  const [web3state, setWeb3state] = useState(null);
  const [web3Accounts, setWeb3Accounts] = useState([]);

  async function getAccounts() {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        localStorage.setItem("web3accounts", accounts);
        setWeb3Accounts(accounts);
      } catch (error) {
        if (error.code === 4001) {
          // User rejected request
        }
        return null;
      }
    }
  }

  useEffect(() => {
    const init = async () => {
      await getWeb3(setWeb3state);
    };
    init();
  }, []);

  if (!data) {
    return (
      <>
        <PageWrapper>
          <AlignPage>
            <Head>
              <title>Clekta Asset</title>
              <meta name="description" content="An Art Gallery" />
              <link rel="icon" href="/favicon.ico" />
              <meta property="og:title" content={`Your Digital Art Gallery`} />
              <meta
                property="og:description"
                content={`An online oasis of your digital art.`}
              />
              <meta property="og:url" content="https://clekta.io" />
              <meta
                property="og:image"
                content="https://clekta.vercel.app/content/home.png"
              />
              <meta property="og:image:type" content="image/jpeg" />
              <meta property="og:image:width" content="200" />
              <meta property="og:image:height" content="200" />
              <meta
                property="og:site_name"
                content={`Clekta | Your Digital Art Gallery`}
              />
              <meta name="twitter:card" content="summary" />
              <meta name="twitter:site" content="@clekta" />
              <meta name="twitter:creator" content="@clekta" />
            </Head>
            <TopNav
              connected={web3state}
              web3Accounts={web3Accounts}
              connectMetamask={getAccounts}
            />{" "}
            <Title>404 | We could not find any data on the art piece.</Title>
          </AlignPage>
        </PageWrapper>
        <FooterComponent />
      </>
    );
  }
  const router = useRouter();

  const sendToGallery = async (address) => {
    router.push(`/gallery/${address}`);
  };

  const salePrice = data?.last_sale?.total_price / Math.pow(10, 18);

  return (
    <>
      <PageWrapper>
        <AlignPage>
          <Head>
            <title>Clekta Asset | {data.name}</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
            <title>Clekta</title>
            <meta name="description" content="An Art Gallery" />
            <link rel="icon" href="/favicon.ico" />
            <meta
              property="og:title"
              content={`Clekta | Your Digital Art Gallery`}
            />
            <meta
              property="og:description"
              content={`${data.description ?? data.name ?? data.token_id}`}
            />
            <meta property="og:url" content="https://clekta.app" />
            <meta
              property="og:image"
              content={`${data.image_url ?? "/content/NFT_Icon.png"}`}
            />
            <meta property="og:image:type" content="image/jpeg" />
            <meta property="og:image:width" content="200" />
            <meta property="og:image:height" content="200" />
            <meta
              property="og:site_name"
              content={`Asset | ${data.name ?? data.token_id}`}
            />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@clekta" />
            <meta name="twitter:creator" content="@clekta" />
          </Head>
          <TopNav
            connected={web3state}
            web3Accounts={web3Accounts}
            connectMetamask={getAccounts}
          />
          <Spacer spacer="60px" />
          <Image src={data.image_url ?? "/content/NFT_Icon.png"} />
          <Content>
            <ArtName>{data.name}</ArtName>
            <ArtDescription>{data.description}</ArtDescription>
          </Content>
          <Spacer spacer="100px" />
          <MaxContentGrid>
            <OwnerCreator onClick={() => sendToGallery(data.owner.address)}>
              Owner: {data.owner.address}
            </OwnerCreator>
            <OwnerCreator
              onClick={() =>
                sendToGallery(
                  data.creator?.address ?? data.asset_contract.address
                )
              }
            >
              Creator: {data.creator?.address ?? data.asset_contract.address}
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
              <CardStats>Total Sales: {data.num_sales}</CardStats>
              {data.num_sales > 0 ? (
                <>
                  <CardStats>
                    Last Sale Price: <FaEthereum size="10" />
                    {salePrice}
                  </CardStats>
                  <CardStats>
                    Last Sale Date: {data.last_sale?.event_timestamp}
                  </CardStats>
                  <CardStats>
                    Todays Value: $
                    {(
                      data.last_sale?.payment_token.usd_price * salePrice
                    ).toFixed(2)}
                  </CardStats>
                </>
              ) : null}
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
  let address = context.query.asset;

  switch (address.toLowerCase()) {
    case "cryptokitties":
      address = "0x06012c8cf97bead5deae237070f9587f8e7a266d";
      break;
    case "cryptopunks":
      address = "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB";
      break;
    default:
      break;
  }

  const token = context.query.token;

  try {
    const data = await FetchAssetFromOpenSea(address, token);
    // Pass data to the page via props
    return { props: { data, address, token } };
  } catch (error) {
    return { props: { data: null, address, token } };
  }
}
