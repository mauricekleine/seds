import styled from "styled-components";

import Container from "../components/Container";
import { medium } from "../theme/media";

const ImageContainer = styled(Container)`
  background: url(${({ name }) => `/static/${name}@1x.jpg`}) no-repeat center
    center;
  background-size: cover;
  height: 240px;

  ${medium`
    background: url(${({ name }) => `/static/${name}@2x.jpg`}) no-repeat center
      center;
    background-size: cover;
  `};
`;

const ImageTitle = styled.div`
  background-color: rgba(48, 48, 48, 0.75);
  bottom: 0;
  left: 0;
  position: absolute;
  width: 100%;

  h2 {
    color: ${({ theme: { colors } }) => colors.light};
  }
`;

export default ({ name, title }) => (
  <ImageContainer name={name}>
    {title && (
      <ImageTitle>
        <Container>
          <h2>{title}</h2>
        </Container>
      </ImageTitle>
    )}
  </ImageContainer>
);
