import styled from "styled-components";
import { useRouter } from "next/router";

const RecentSearch = styled.div`
  background: #f8f9fa;
  border-radius: 10px;
  font-family: Jet;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  height: 40px;
  width: 280px;
  padding-left: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 4px;
  :hover {
    cursor: pointer;
    background-color: #20ffd710;
  }
`;

interface Props {
  children: string;
}

export const RecentSearchComponent = ({ children }: Props): JSX.Element => {
  const router = useRouter();

  const sendToGallery = async () => {
    router.push(`/gallery/${children}`);
  };

  return (
    <RecentSearch onClick={() => sendToGallery()}>{children}</RecentSearch>
  );
};
