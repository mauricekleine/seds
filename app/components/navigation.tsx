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
                className="block sm:hidden h-12 w-12"
              />
              {/* Larger screens: emblem + wordmark side by side for a wider, bolder look */}
              <span className="hidden sm:flex items-center gap-2 -ml-1">
                <img
                  alt=""
                  src="/logos/seds_emblem_transparent.png"
                  className="h-14 w-14"
                />
                <img
                  alt="SEDS"
                  src="/logos/seds_wordmark_transparent.png"
                  className="h-8 w-auto"
                />
              </span>
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
