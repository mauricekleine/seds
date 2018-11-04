import styled from "styled-components";

const Content = styled.div`
  flex: 12;

  @media (min-width: 576px) {
    flex: 10;
  }

  @media (min-width: 768px) {
    flex: 8;
  }

  @media (min-width: 992px) {
    flex: 6;
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
    flex: 3;
  }
`;

const Wrapper = styled.div`
  display: flex;
  margin: 0 16px;

  @media (min-width: 1200px) {

  }
`;

export default ({ children, ...props }) => (
  <Wrapper>
    <Gutter />

    <Content {...props}>{children}</Content>

    <Gutter />
  </Wrapper>
);
