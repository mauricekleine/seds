import Link from "next/link";
import { Component, useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import Container from "./Container";
import Flex from "./Flex";
import Links from "./Links";

import { small, medium } from "../theme/media";

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
  top: 112px;
  z-index: 1;

  ${medium`
    margin: 0 auto;
    top: 72px;
    width: 256px;
  `}

  &:before {
    border-bottom: 12px solid ${({ theme: { colors } }) => colors.light};
    border-left: 12px solid transparent;
    border-radius: 12px;
    border-right: 12px solid transparent;
    content: " ";
    left: 32%;
    position: absolute;
    top: -10px;

    ${small`
      left: 40%;
    `}

    ${medium`
      left: 64%;
    `}
  }
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

const StyledNavbar = styled.nav`
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
    <Link href="/about">
      <NavbarItem>About us</NavbarItem>
    </Link>

    <Toggle onClick={showMenu}>
      Projects <Caret />
    </Toggle>

    <Link href="/reports">
      <NavbarItem>Reports</NavbarItem>
    </Link>

    <Link href="/contact">
      <NavbarItem>Contact</NavbarItem>
    </Link>
  </StyledNavbar>
);

const Navigation = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const closeMenu = useCallback(() => setIsMenuVisible(false), [
    setIsMenuVisible,
  ]);
  const showMenu = useCallback(() => setIsMenuVisible(true), [
    setIsMenuVisible,
  ]);

  useEffect(() => {
    if (isMenuVisible) {
      document.addEventListener("click", closeMenu);
    } else {
      document.removeEventListener("click", closeMenu);
    }
  }, [isMenuVisible]);

  return (
    <header>
      <LogoContainer>
        <Flex>
          <Flex flex={1}>
            <Link href="/">
              <a>
                <img alt="SEDS" height="60px" src="/logo.png" />
              </a>
            </Link>
          </Flex>

          <DesktopMenu flex={1.2}>
            <Navbar showMenu={showMenu} />
          </DesktopMenu>
        </Flex>
      </LogoContainer>

      <MobileMenu>
        <Navbar showMenu={showMenu} />
      </MobileMenu>

      {isMenuVisible && (
        <Dropdown>
          <Links />
        </Dropdown>
      )}
    </header>
  );
};

export default Navigation;
