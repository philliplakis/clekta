import { useState, useEffect } from "react";
import Web3 from "web3";
import Head from "next/head";
import styled from "styled-components";
import { useRouter } from "next/router";
import { TopNav } from "../components/TopNav";
import { FooterComponent } from "../components/Footer";
import { InputComponent } from "../components/SearchBar";
import { ButtonComponent } from "../components/Button";
import { RotatedHeading } from "../components/HeadingRotatedText";
import { RecentSearchComponent } from "../components/RecentSearchItem";
import { Spacer } from "../components/Spacer";
import {
  PageWrapper,
  ContentGrid,
  Row,
  AlignPage,
} from "../components/defaults";

import { isAddress } from "../functions/AddressValidate";

const Landing = styled.div`
  width: 100%;
  height: 375px;
  border-radius: 20px;
  position: relative;
  text-align: center;
  color: black;
`;

const LandingImg = styled.img`
  width: 100%;
  height: 375px;
  border-radius: 20px;
`;

const LandingText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: Jet;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
`;
declare let window: any;

async function getWeb3() {
  window.addEventListener("load", async () => {
    let web3: Web3;
    if (window.ethereum) {
      // Modern dapp browsers
      web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      // Open metamask
      web3.eth.getAccounts((err, accounts) => {
        if (err !== null) {
          return err;
        } else if (accounts.length === 0) {
          return new Error("constants.LOCKED");
        } else {
          console.log({ accounts });
          return accounts;
        }
      });
      return web3;
    } else if (window.web3) {
      // Legacy dapp browsers...
      web3 = new Web3(window.web3.currentProvider);
      web3.eth.getAccounts((err, accounts) => {
        if (err !== null) {
          return err;
        } else if (accounts.length === 0) {
          return new Error("constants.LOCKED");
        } else {
          console.log({ accounts });
          return accounts;
        }
      });
      return web3;
    } else {
      throw new Error("Metamask not found");
    }
  });
}

export default function Home(): JSX.Element {
  const [ethAddress, setEthAddress]: [
    string | undefined,
    (host: string) => string | void
  ] = useState("");

  useEffect(() => {
    const init = async () => {
      await getWeb3();
    };
    init();
  }, []);

  const onEthAddressHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEthAddress(event.target.value);
  };

  const router = useRouter();

  const sendToGallery = async () => {
    if (isAddress(ethAddress)) {
      router.push(`/gallery/${ethAddress}`);
    } else console.log("Not valid address");
  };

  return (
    <>
      <PageWrapper>
        <Head>
          <title>Clekta</title>
          <meta name="description" content="An Art Gallery" />
          <link rel="icon" href="/favicon.ico" />
          <meta
            property="og:title"
            content={`Clekta | Your Digital Art Gallery`}
          />
          <meta
            property="og:description"
            content={`An online oasis of your digital art.`}
          />
          <meta property="og:url" content="https://clekta.app" />
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
        <AlignPage>
          <TopNav />
          <Spacer spacer={"100px"} />
          <Landing>
            <LandingImg src={"/content/home.png"} />
            <LandingText>Your Art Gallery</LandingText>
          </Landing>
          <Spacer spacer={"45px"} />
          <InputComponent
            onChange={onEthAddressHandler}
            value={ethAddress}
            placeholder={"Address"}
          />
          <ButtonComponent onClick={() => sendToGallery()}>
            Gallery
          </ButtonComponent>
          <Spacer spacer={"100px"} />
          <Row>
            <RotatedHeading>Galleries</RotatedHeading>
            <ContentGrid>
              <RecentSearchComponent>
                0x88207b431510DbE0AddBDaE3bD53013813fC8c71
              </RecentSearchComponent>
              <RecentSearchComponent>
                0x38eae11284842ad78Ad87AaC894c70D180A8DD38
              </RecentSearchComponent>
              <RecentSearchComponent>
                0x223716c5aa5fd892c0daff1f24d4531272e8b12d
              </RecentSearchComponent>
              <RecentSearchComponent>
                0x38eae11284842ad78Ad87AaC894c70D180A8DD38
              </RecentSearchComponent>
              <RecentSearchComponent>
                0x38eae11284842ad78Ad87AaC894c70D180A8DD38
              </RecentSearchComponent>
              <RecentSearchComponent>
                0x38eae11284842ad78Ad87AaC894c70D180A8DD38
              </RecentSearchComponent>
            </ContentGrid>
          </Row>
          <Spacer spacer={"100px"} />
        </AlignPage>
      </PageWrapper>
      <FooterComponent />
    </>
  );
}
