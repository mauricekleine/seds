import styled from "styled-components";

import Container from "../components/Container";
import { small, medium } from "../theme/media";

const ImageContainer = styled(Container)`
  background: url(${({ name }) => `/static/${name}@1x.jpg`}) no-repeat center
    center;
  background-size: cover;
  height: 240px;

  ${small`
    height: 320px;
  `};

  ${medium`
    background: url(${({ name }) => `/static/${name}@2x.jpg`}) no-repeat center
      center;
    background-size: cover;
    height: 400px;
  `};
`;

const ImageTitle = styled.div`
  background-color: rgba(48, 48, 48, 0.75);
  bottom: 0;
  left: 0;
  padding: 16px;
  position: absolute;

  h1 {
    color: ${({ theme: { colors } }) => colors.light};
    margin: 0;
  }
`;

export default ({ name, title }) => (
  <ImageContainer name={name}>
    {title && (
      <ImageTitle>
        <h1>{title}</h1>
      </ImageTitle>
    )}
  </ImageContainer>
);
