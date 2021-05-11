import styled from "styled-components";
import { NFTComponent } from "../../components/NFT";
import { FetchFromOpenSea } from "../../functions/FetchGallery";

export const AlignPage = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  overflow: hidden;
`;

const ContentGrid = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-around;
  max-width: 980px;
`;

function Page({ data }) {
  return (
    <AlignPage>
      <ContentGrid>
        {data.map((token: any, i: number) => {
          return (
            <NFTComponent
              name={"Founder Cat #3"}
              family={"CryptoKitties"}
              isFeatured={true}
              img={token.media.image_url}
              key={i}
            />
          );
        })}
      </ContentGrid>
    </AlignPage>
  );
}

// This gets called on every request
export async function getServerSideProps(context) {
  const address = context.query.EthGallery;
  const data = await FetchFromOpenSea(address);

  // Pass data to the page via props
  return { props: { data } };
}

export default Page;
