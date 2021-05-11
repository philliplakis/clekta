import styled from "styled-components";

export const PageWrapper = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  width: 980px;
`;

export const AlignPage = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  overflow: hidden;
`;

export const ContentGrid = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-around;
  max-width: 890px;
`;
