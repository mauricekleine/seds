import { NavLink } from "@remix-run/react";
import classNames from "classnames";

type Props = {
  children: string;
  to: string;
};

function NavbarLink({ children, to }: Props) {
  return (
    <NavLink
      className={({ isActive }) =>
        classNames("leading-10 text-lg text-white sm:text-content-secondary", {
          underline: isActive,
        })
      }
      to={to}
    >
      {children}
    </NavLink>
  );
}

export default NavbarLink;
