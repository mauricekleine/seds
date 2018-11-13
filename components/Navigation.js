import Link from "next/link";
import { Component, Fragment } from "react";
import styled from "styled-components";

import Container from "./Container";

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NavbarContainer = styled(Container)`
  background-color: ${({ theme: { colors } }) => colors.descriptive};
`;

const NavbarItem = styled.a`
  color: ${({ theme: { colors } }) => colors.light};
  cursor: pointer;
  font-size: 16px;
  font-weight: initial;
  line-height: 40px;
`;

export default class Navigation extends Component {
  links = [
    { href: "/about", title: "About us" },
    {
      children: [
        { href: "/environment", title: "Environment" },
        { href: "/education", title: "Children's education" }
      ],
      href: "#",
      title: "Projects"
    },
    { href: "/reports", title: "Reports" },
    { href: "/contact", title: "Contact" }
  ];

  render() {
    return (
      <Fragment>
        <Container>
          <Link href="/" prefetch>
            <a>
              <img alt="SEDS" height="60px" src="/static/logo.png" />
            </a>
          </Link>
        </Container>

        <NavbarContainer>
          <Navbar>
            {this.links.map(({ href, title }) => (
              <Link href={href} key={href} prefetch>
                <NavbarItem>{title}</NavbarItem>
              </Link>
            ))}
          </Navbar>
        </NavbarContainer>
      </Fragment>
    );
  }
}
