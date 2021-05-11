import Head from "next/head";
import styled from "styled-components";
import { TopNav } from "../../components/TopNav";
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
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 36px;
  color: #000000;
`;

export default function Page({ data, address }) {
  return (
    <PageWrapper>
      <AlignPage>
        <Head>
          <title>Clekta Gallery | {address}</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
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
                      img={token.media.image_url}
                      key={i}
                    />
                  );
                })}
              </ContentGrid>
            </Row>
            <Spacer spacer={"120px"} />
            <ContentGrid>
              {data.map((token: any, i: number) => {
                if (i < 2) {
                  return null;
                }
                return (
                  <NFTComponent
                    name={token.name ?? `#${token.token_id}`}
                    family={token.collection}
                    isFeatured={true}
                    img={token.media.image_url}
                    key={i}
                  />
                );
              })}
            </ContentGrid>
          </>
        ) : (
          <>
            <Title>This address does not own any ERC721 tokens.</Title>
          </>
        )}
      </AlignPage>
    </PageWrapper>
  );
}

// This gets called on every request
export async function getServerSideProps(context) {
  const address = context.query.EthGallery;
  const data = await FetchFromOpenSea(address);

  // Pass data to the page via props
  return { props: { data, address } };
}
