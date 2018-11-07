import styled from "styled-components";

const Content = styled.div`
  flex: 12;
  padding: 0 16px;

  @media (min-width: 576px) {
    flex: 10;
  }

  @media (min-width: 768px) {
    flex: 8;
  }

  @media (min-width: 992px) {
  }
`;

const Gutter = styled.div`
  flex: 0;

  @media (min-width: 576px) {
    flex: 1;
  }

  @media (min-width: 768px) {
    flex: 2;
  }

  @media (min-width: 992px) {
  }
`;

const Wrapper = styled.div`
  display: flex;
  position: relative;

  @media (min-width: 1200px) {

  }
`;

export default ({ children, ...props }) => (
  <Wrapper {...props}>
    <Gutter />

    <Content>{children}</Content>

    <Gutter />
  </Wrapper>
);
