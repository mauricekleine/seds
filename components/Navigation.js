import Link from "next/link";
import { Component, Fragment } from "react";
import styled from "styled-components";

import Container from "./Container";
import Flex from "./Flex";
import Links from "./Links";

import { medium } from "../theme/media";

const Caret = styled.div`
  border-left: 6px solid transparent;
  border-radius: 6px;
  border-right: 6px solid transparent;
  border-top: 6px solid ${({ theme: { colors } }) => colors.light};
  display: inline-block;
  margin: 2px 0 0 4px;

  ${medium`border-top: 6px solid ${({ theme: { colors } }) =>
    colors.descriptive};`};
`;

const DesktopMenu = styled(Flex)`
  display: none;

  ${medium`display: inherit`}
`;

const Dropdown = styled.div`
  background-color: #ffffff;
  border: 1px solid rgba(150, 150, 150, 0.3);
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.06);
  left: 16px;
  padding: 8px 16px;
  position: absolute;
  right: 16px;
  top: 48px;
  z-index: 1;

  ${medium`
    margin: 0 auto;
    width: 50%;
  `}
`;

const LogoContainer = styled(Container)`
  ${medium`
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.descriptive};
  `}
`;

const MobileMenu = styled(Container)`
  background-color: ${({ theme: { colors } }) => colors.descriptive};
  ${medium`display: none`};
`;

const NavbarItem = styled.a`
  color: ${({ theme: { colors } }) => colors.light};
  cursor: pointer;
  font-size: 16px;
  font-weight: normal;
  line-height: 40px;

  ${medium`color: ${({ theme: { colors } }) => colors.dark};`};
`;

const StyledNavbar = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

const Toggle = styled.button.attrs({ type: "button" })`
  align-items: center;
  background-color: transparent;
  box-shadow: none;
  color: ${({ theme: { colors } }) => colors.light};
  cursor: pointer;
  display: flex;
  font-weight: normal;

  ${medium`color: ${({ theme: { colors } }) => colors.dark};`};
`;

const Navbar = ({ showMenu }) => (
  <StyledNavbar>
    <Link href="/about" prefetch>
      <NavbarItem>About us</NavbarItem>
    </Link>

    <Toggle onClick={showMenu}>
      Projects <Caret />
    </Toggle>

    <Link href="/reports" prefetch>
      <NavbarItem>Reports</NavbarItem>
    </Link>

    <Link href="/contact" prefetch>
      <NavbarItem>Contact</NavbarItem>
    </Link>
  </StyledNavbar>
);

export default class Navigation extends Component {
  state = { showMenu: false };

  closeMenu = this.closeMenu.bind(this);
  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener("click", this.closeMenu);
    });
  }

  showMenu = this.showMenu.bind(this);
  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  render() {
    const { showMenu } = this.state;

    return (
      <Fragment>
        <LogoContainer>
          <Flex>
            <Flex flex={1}>
              <Link href="/" prefetch>
                <a>
                  <img alt="SEDS" height="60px" src="/static/logo.png" />
                </a>
              </Link>
            </Flex>

            <DesktopMenu flex={1}>
              <Navbar showMenu={this.showMenu} />
            </DesktopMenu>
          </Flex>
        </LogoContainer>

        <MobileMenu>
          <Navbar showMenu={this.showMenu} />

          {showMenu && (
            <Dropdown>
              <Links />
            </Dropdown>
          )}
        </MobileMenu>
      </Fragment>
    );
  }
}
