import { Link } from "@remix-run/react";

import NavbarMd from "~/components/navbar-md";
import NavbarSm from "~/components/navbar-sm";

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

          <div className="hidden sm:block">
            <NavbarMd />
          </div>
        </div>
      </div>

      <div className="sm:hidden">
        <NavbarSm />
      </div>
    </header>
  );
}

export default Navigation;
