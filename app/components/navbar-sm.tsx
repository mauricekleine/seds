import {
  List,
  X,
  House,
  Info,
  Briefcase,
  Handshake,
  Coins,
} from "phosphor-react";
import { NavLink } from "@remix-run/react";
import { useCallback, useEffect, useState } from "react";
import classNames from "classnames";

import ThemeToggle from "~/components/theme-toggle";

type MobileNavLinkProps = {
  to: string;
  icon: React.ReactNode;
  children: string;
  onClick?: () => void;
};

function MobileNavLink({ to, icon, children, onClick }: MobileNavLinkProps) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        classNames(
          "flex items-center gap-3 py-3 px-4 rounded-lg transition-colors",
          isActive
            ? "bg-green-700 text-white"
            : "text-white/90 hover:bg-green-700/50"
        )
      }
    >
      {icon}
      <span className="text-base">{children}</span>
    </NavLink>
  );
}

function NavbarSm() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const closeMenu = useCallback(() => setIsMenuVisible(false), []);
  const toggleMenu = useCallback(() => setIsMenuVisible((prev) => !prev), []);

  useEffect(() => {
    if (isMenuVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuVisible]);

  return (
    <>
      <div className="bg-green-600 px-4 py-2 flex items-center justify-between">
          <button
            className="p-2 -ml-2 rounded-lg hover:bg-green-700/50 transition-colors"
            onClick={toggleMenu}
            type="button"
            aria-label={isMenuVisible ? "Close menu" : "Open menu"}
            aria-expanded={isMenuVisible}
          >
            {isMenuVisible ? (
              <X className="text-white w-7 h-7" />
            ) : (
              <List className="text-white w-7 h-7" />
            )}
          </button>
          <ThemeToggle />
        </div>

      {isMenuVisible && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={closeMenu}
            aria-hidden="true"
          />

          <nav className="fixed top-0 left-0 bottom-0 w-[280px] bg-green-600 z-50 overflow-y-auto shadow-2xl">
            <div className="p-4 border-b border-green-500/50">
              <button
                className="p-2 -ml-2 rounded-lg hover:bg-green-700/50 transition-colors"
                onClick={closeMenu}
                type="button"
                aria-label="Close menu"
              >
                <X className="text-white w-7 h-7" />
              </button>
            </div>

            <div className="p-4 space-y-1">
              <MobileNavLink to="/" icon={<House className="w-5 h-5" />} onClick={closeMenu}>
                Home
              </MobileNavLink>
              <MobileNavLink to="/about" icon={<Info className="w-5 h-5" />} onClick={closeMenu}>
                About
              </MobileNavLink>
              <MobileNavLink to="/our-work" icon={<Briefcase className="w-5 h-5" />} onClick={closeMenu}>
                Our Work
              </MobileNavLink>
              <MobileNavLink to="/volunteers" icon={<Handshake className="w-5 h-5" />} onClick={closeMenu}>
                Get Involved
              </MobileNavLink>
            </div>

            <div className="p-4 pt-2 border-t border-green-500/30">
              <NavLink
                to="/donate"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 bg-white text-green-700 font-semibold py-3 px-4 rounded-lg hover:bg-green-50 transition-colors"
              >
                <Coins className="w-5 h-5" />
                <span>Donate</span>
              </NavLink>
            </div>
          </nav>
        </>
      )}
    </>
  );
}

export default NavbarSm;
