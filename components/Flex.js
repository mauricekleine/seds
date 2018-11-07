import styled from "styled-components";

export default styled.div`
  align-items: ${({ alignItems }) => alignItems};
  display: flex;
  flex: ${({ flex }) => flex};
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justifyContent }) => justifyContent};
`;
