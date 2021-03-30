import styled from "styled-components";

import { large } from "../theme/media";

const Flex = styled.div`
  align-items: ${({ alignItems }) => alignItems};
  display: flex;
  flex: ${({ flex }) => flex};
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justifyContent }) => justifyContent};

  ${large`
    > div:first-child {
      margin-right: ${({ parent }) => parent && "8px"};
    }

    > div:not(:first-child):not(:last-child) {
      margin: ${({ parent }) => parent && "0 8px"};
    }

    > div:last-child {
      margin-left: ${({ parent }) => parent && "8px"};
    }
  `};
`;

export const FlexContainer = styled(Flex)`
  flex-direction: column;

  ${large`
    flex-direction: row;
  `};
`;

export default Flex;
