import styled from "styled-components";

import { small, medium, large } from "../theme/media";

const Content = styled.section`
  flex: 12;
  padding: ${({ fullWidth }) => !fullWidth && "0 16px"};

  ${small`
    flex: 10;
  `};

  ${medium`
    flex: 8;
    padding: 0 16px;
   `};

  ${large`
    flex: 7;
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

  ${large`
    flex: 2.5;
  `};
`;

const Wrapper = styled.div`
  display: flex;
  position: relative;
`;

const Container = ({ children, fullWidth, ...props }) => (
  <Wrapper fullWidth={fullWidth} {...props}>
    <Gutter fullWidth={fullWidth} />

    <Content fullWidth={fullWidth}>{children}</Content>

    <Gutter fullWidth={fullWidth} />
  </Wrapper>
);

export default Container;
