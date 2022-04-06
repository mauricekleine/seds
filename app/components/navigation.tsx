import { Link, NavLink } from "@remix-run/react";
import classNames from "classnames";
import { useCallback, useEffect, useState } from "react";

import ProjectLinks from "~/components/project-links";

type NavbarLinkProps = {
  children: string;
  to: string;
};

function NavbarLink({ children, to }: NavbarLinkProps) {
  return (
    <NavLink
      className={({ isActive }) =>
        classNames("leading-10 text-lg text-white md:text-gray-600", {
          underline: isActive,
        })
      }
      to={to}
    >
      {children}
    </NavLink>
  );
}

function Navbar() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const closeMenu = useCallback(
    () => setIsMenuVisible(false),
    [setIsMenuVisible]
  );

  const showMenu = useCallback(
    () => setIsMenuVisible(true),
    [setIsMenuVisible]
  );

  useEffect(() => {
    if (isMenuVisible) {
      document.addEventListener("click", closeMenu);
    } else {
      document.removeEventListener("click", closeMenu);
    }
  }, [closeMenu, isMenuVisible]);

  return (
    <nav className="flex relative items-center justify-between md:space-x-8">
      <NavbarLink to="/">Home</NavbarLink>

      <NavbarLink to="/about">About us</NavbarLink>

      <div className="">
        <button
          className="flex items-center space-x-1"
          onClick={showMenu}
          type="button"
        >
          <span className="leading-10 text-lg text-white md:text-gray-600">
            Projects
          </span>

          <span className="border-t-[6px] md:border-t-green-600 border-t-white border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent rounded-sm" />
        </button>

        {isMenuVisible && (
          <div className="absolute mt-4 left-0 z-10 w-full px-4 before:border-l-transparent before:border-r-transparent before:-top-2 before:absolute before:left-[36%] before:border-b-8 before:border-b-white before:border-l-8 before:border-r-8">
            <div className="p-4 bg-white shadow border border-gray-200 border-t-0 rounded-md">
              <ProjectLinks />
            </div>
          </div>
        )}
      </div>

      <NavbarLink to="/reports">Reports</NavbarLink>

      <NavbarLink to="/contact">Contact</NavbarLink>
    </nav>
  );
}

function Navigation() {
  return (
    <header>
      <div className="border-b border-b-green-600">
        <div className="flex items-center justify-between container mx-auto lg:max-w-screen-md px-8 lg:px-0">
          <Link to="/">
            <img
              alt="SEDS"
              className="-ml-1"
              height={53}
              src="/logo.png"
              width={128}
            />
          </Link>

          <div className="hidden md:block">
            <Navbar />
          </div>
        </div>
      </div>

      <div className="md:hidden bg-green-600">
        <div className="container mx-auto px-8">
          <Navbar />
        </div>
      </div>
    </header>
  );
}

export default Navigation;
