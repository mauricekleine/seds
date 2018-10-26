import css from "styled-jsx/css";

import Container from "./Container";

const { className, styles } = css.resolve`
  div {
    background: rgb(121, 171, 111);
    flex: 1;
  }
`;

export default ({ children }) => (
  <div className={className}>
    <Container>
      {children}
      {styles}
    </Container>
  </div>
);
