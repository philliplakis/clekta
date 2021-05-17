import Head from "next/head";
import styled from "styled-components";
import { TopNav } from "../../components/TopNav";
import { FooterComponent } from "../../components/Footer";
import { NFTComponent } from "../../components/NFT";
import { RotatedHeading } from "../../components/HeadingRotatedText";
import { FetchFromOpenSea } from "../../functions/FetchGallery";

import {
  PageWrapper,
  AlignPage,
  ContentGrid,
  Row,
} from "../../components/defaults";
import { Spacer } from "../../components/Spacer";

const Title = styled.div`
  display: flex;
  padding-top: 25%;
  height: 100%;
  max-width: 980px;
  font-family: Jet;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: #000000;
`;

export default function Page({ data, address }) {
  const firstImage = data[0]?.media?.image_url ?? "/content/NFT_Icon.png";
  return (
    <>
      <PageWrapper>
        <AlignPage>
          <Head>
            <title>Clekta Gallery | {address}</title>
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
              content={`An online oasis of your digital art.`}
            />
            <meta property="og:url" content="https://clekta.app" />
            <meta property="og:image" content={`${firstImage}`} />
            <meta property="og:image:type" content="image/jpeg" />
            <meta property="og:image:width" content="200" />
            <meta property="og:image:height" content="200" />
            <meta property="og:site_name" content={`${address}`} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@clekta" />
            <meta name="twitter:creator" content="@clekta" />
          </Head>
          <TopNav />
          {data.length > 0 ? (
            <>
              <Spacer spacer={"220px"} />
              <Row>
                <RotatedHeading>Featured</RotatedHeading>
                <ContentGrid>
                  {data.map((token: any, i: number) => {
                    if (i > 2) {
                      return null;
                    }
                    return (
                      <NFTComponent
                        name={token.name ?? `#${token.token_id}`}
                        family={token.collection}
                        isFeatured={true}
                        img={token.media.image_url ?? "/content/NFT_Icon.png"}
                        address={token.contract.contract_address}
                        token={token.token_id}
                        key={i}
                      />
                    );
                  })}
                </ContentGrid>
              </Row>
              <Spacer spacer={"120px"} />
              <ContentGrid>
                {data.map((token: any, i: number) => {
                  if (i <= 2) {
                    return null;
                  }
                  return (
                    <NFTComponent
                      name={token.name ?? `#${token.token_id}`}
                      family={token.collection}
                      isFeatured={true}
                      img={token.media.image_url ?? "/content/NFT_Icon.png"}
                      address={token.contract.contract_address}
                      token={token.token_id}
                      key={i}
                    />
                  );
                })}
              </ContentGrid>
            </>
          ) : (
            <>
              <Title>This address does not own any art.</Title>
            </>
          )}
        </AlignPage>
      </PageWrapper>
      <FooterComponent />
    </>
  );
}

// This gets called on every request
export async function getServerSideProps(context) {
  const address = context.query.EthGallery;
  const data = await FetchFromOpenSea(address);

  // Pass data to the page via props
  return { props: { data, address } };
}
