import { List, X } from "phosphor-react";
import { useCallback, useEffect, useState } from "react";

import NavbarLink from "~/components/navbar-link";

function NavbarSm() {
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
    <div className="container relative mx-auto px-8 bg-green-600">
      <button className="p-1 -ml-2" onClick={showMenu} type="button">
        {isMenuVisible ? (
          <X className="text-white w-8 h-8" />
        ) : (
          <List className="text-white w-8 h-8" />
        )}
      </button>

      {isMenuVisible && (
        <nav className="flex bg-green-600 shadow-2xl flex-col absolute justify-between md:space-x-8 z-10 left-0 right-0 mx-auto px-8">
          <NavbarLink to="/">Home</NavbarLink>

          <NavbarLink to="/about">About us</NavbarLink>

          <NavbarLink to="/reports">Reports</NavbarLink>

          <NavbarLink to="/contact">Contact</NavbarLink>

          <p className="leading-10 text-gray-100 uppercase text-xs">Projects</p>

          <div className="flex flex-col border-t border-white mb-2">
            <NavbarLink to="/education">Children&apos;s education</NavbarLink>

            <NavbarLink to="/clean-development-mechanism">
              Clean development mechanism
            </NavbarLink>

            <NavbarLink to="/low-carbon-farming">Low carbon farming</NavbarLink>

            <NavbarLink to="/natural-resource-management">
              Natural resource management
            </NavbarLink>
          </div>
        </nav>
      )}
    </div>
  );
}

export default NavbarSm;
