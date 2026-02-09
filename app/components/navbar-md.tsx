import { Link } from "@remix-run/react";

import NavbarLink from "~/components/navbar-link";
import ThemeToggle from "~/components/theme-toggle";

function NavbarMd() {
  return (
    <nav className="flex relative items-center justify-between space-x-6 md:space-x-8">
      <NavbarLink to="/">Home</NavbarLink>

      <NavbarLink to="/about">About</NavbarLink>

      <NavbarLink to="/our-work">Our Work</NavbarLink>

      <NavbarLink to="/volunteers">Get Involved</NavbarLink>

      <Link
        to="/donate"
        className="bg-green-600 text-white px-5 py-1.5 rounded-full text-base font-semibold hover:bg-green-700 transition-colors"
      >
        Donate
      </Link>

      <ThemeToggle />
    </nav>
  );
}

export default NavbarMd;
