import { Link } from "@remix-run/react";

import NavbarMd from "~/components/navbar-md";
import NavbarSm from "~/components/navbar-sm";

function Navigation() {
  return (
    <header>
      <div className="border-b border-b-green-600 dark:border-b-green-800 bg-surface-primary">
        <div className="flex items-center justify-between container mx-auto lg:max-w-screen-md px-8 lg:px-0">
          <Link to="/" className="shrink-0 py-2">
            {/* Small screens: emblem only for compact branding */}
            <img
              alt="SEDS"
              src="/logos/seds_emblem_transparent.png"
              className="block sm:hidden h-10 w-10"
            />
            {/* Larger screens: full lockup with text */}
            <img
              alt="SEDS"
              src="/logos/seds_lockup_no_tagline_transparent.png"
              className="hidden sm:block h-12 w-auto -ml-1"
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
