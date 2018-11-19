import styled from "styled-components";

import { small, medium } from "../theme/media";

const Content = styled.div`
  flex: 12;
  padding: 0 16px;

  ${small`
    flex: 10;
  `};

  ${medium`
    flex: 8;
  `};
`;

const Gutter = styled.div`
  flex: 0;

  ${small`
    flex: 1;
  `};

  ${medium`
    flex: 2;
  `};
`;

const Wrapper = styled.div`
  display: flex;
  position: relative;
`;

export default ({ children, ...props }) => (
  <Wrapper {...props}>
    <Gutter />

    <Content>{children}</Content>

    <Gutter />
  </Wrapper>
);
