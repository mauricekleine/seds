import { useCallback, useEffect, useState } from "react";

import NavbarLink from "~/components/navbar-link";
import ProjectLinks from "~/components/project-links";

function NavbarMd() {
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
    <nav className="flex relative items-center justify-between space-x-6 md:space-x-8">
      <NavbarLink to="/">Home</NavbarLink>

      <NavbarLink to="/about">About us</NavbarLink>

      <div className="">
        <button
          className="flex items-center space-x-1"
          onClick={showMenu}
          type="button"
        >
          <span className="leading-10 text-lg text-gray-600">Projects</span>

          <span className="border-t-[6px] border-t-green-600 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent rounded-sm" />
        </button>

        {isMenuVisible && (
          <div className="absolute mt-4 left-0 z-10 w-full px-4 before:border-l-transparent before:border-r-transparent before:-top-2 before:absolute before:left-1/2 before:border-b-8 before:border-b-white before:border-l-8 before:border-r-8">
            <div className="p-4 bg-white shadow-xl border border-gray-300 border-t-0 rounded-md">
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

export default NavbarMd;
