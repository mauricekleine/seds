import styled from "styled-components";

const Card = styled.div`
  border: 1px solid rgba(150, 150, 150, 0.3);
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.06);
  margin: 16px 0;
  padding: 16px;
`;

export const CardTitle = styled.h3``;

export default ({ children }) => <Card>{children}</Card>;
