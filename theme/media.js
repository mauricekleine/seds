import { css } from "styled-components";

export const small = (...args) => css`
  @media (min-width: 576px) {
    ${css(...args)};
  }
`;

export const medium = (...args) => css`
  @media (min-width: 768px) {
    ${css(...args)};
  }
`;

export const large = (...args) => css`
  @media (min-width: 992px) {
    ${css(...args)};
  }
`;
