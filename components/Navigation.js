import Link from "next/link";
import { Component } from "react";
import css from "styled-jsx/css";

import Container from "./Container";

const { className: navBar, styles: navBarStyles } = css.resolve`
  background-color: #ffffff;
  position: absolute;
  width: 100%;

  .hidden {
    display: none;
  }

  @media (min-width: 576px) {
    position: relative;

    .hidden {
      display: initial;
    }
  }
`;

const { className: navBarToggle, styles: navBarToggleStyles } = css.resolve`
  @media (min-width: 576px) {
    display: none;
  }
`;

const { className: navItem, styles: navItemStyles } = css.resolve`
  display: block;

  @media (min-width: 576px) {
    display: inline-block;
    margin-right: 16px;
  }
`;

export default class Navigation extends Component {
  links = [
    { href: "/", title: "Home" },
    { href: "/about", title: "About SEDS" },
    { href: "/environment", title: "Environment" },
    { href: "/education", title: "Children's education" },
    { href: "/reports", title: "Reports" },
    { href: "/contact", title: "Contact us" }
  ];
  state = { showMenu: false };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = this.handleClickOutside.bind(this);
  handleClickOutside(event) {
    if (this.ref && !this.ref.contains(event.target)) {
      this.setState({ showMenu: false });
    }
  }

  render() {
    const { showMenu } = this.state;

    return (
      <div ref={ref => (this.ref = ref)}>
        <div className={navBarToggle}>
          <Container>
            <a onClick={() => this.setState({ showMenu: !showMenu })}>Toggle</a>
          </Container>
        </div>

        <div className={`${navBar}${!showMenu ? " hidden" : ""}`}>
          <Container>
            {this.links.map(({ href, title }) => (
              <Link href={href} key={href} prefetch>
                <a
                  className={navItem}
                  onClick={() => this.setState({ showMenu: !showMenu })}
                >
                  {title}
                </a>
              </Link>
            ))}
          </Container>
        </div>

        {navBarStyles}
        {navBarToggleStyles}
        {navItemStyles}
      </div>
    );
  }
}
