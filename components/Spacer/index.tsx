import styled from "styled-components";

interface SpacerProps {
  spacer: string;
}

export const Spacer = styled.div<SpacerProps>`
  padding-bottom: ${(props) => props.spacer};
`;
