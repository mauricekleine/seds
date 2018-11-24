import { css } from "styled-components";

export const smallWidth = 576;
export const mediumWidth = 768;
export const largeWidth = 992;

export const small = (...args) => css`
  @media (min-width: ${smallWidth}px) {
    ${css(...args)};
  }
`;

export const medium = (...args) => css`
  @media (min-width: ${mediumWidth}px) {
    ${css(...args)};
  }
`;

export const large = (...args) => css`
  @media (min-width: ${largeWidth}px) {
    ${css(...args)};
  }
`;
