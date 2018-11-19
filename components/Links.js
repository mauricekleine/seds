import Link from "next/link";
import { Fragment } from "react";
import styled from "styled-components";

export const ProjectLink = styled.a`
  color: ${({ theme: { colors } }) => colors.dark};
  cursor: pointer;
  display: block;
  font-weight: normal;
  line-height: 40px;

  &:after {
    border-bottom: 6px solid transparent;
    border-radius: 6px;
    border-top: 6px solid transparent;
    border-left: 6px solid ${({ theme: { colors } }) => colors.descriptive};
    content: " ";
    display: inline-block;
    margin-left: 6px;
  }
`;

export default () => (
  <Fragment>
    <Link href="/education" prefetch>
      <ProjectLink>Children's education</ProjectLink>
    </Link>

    <Link href="/clean-development-mechanism" prefetch>
      <ProjectLink>Clean development mechanism</ProjectLink>
    </Link>

    <Link href="/low-carbon-farming" prefetch>
      <ProjectLink>Low carbon farming</ProjectLink>
    </Link>

    <Link href="/natural-resource-management" prefetch>
      <ProjectLink>Natural resource management</ProjectLink>
    </Link>
  </Fragment>
);
