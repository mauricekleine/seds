import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";

import styles from "~/app.css";
import Footer from "~/components/footer";
import Navigation from "~/components/navigation";
import StickyDonateButton from "~/components/sticky-donate-button";
import ThemeToggle from "~/components/theme-toggle";
import { calculateSEDSYears } from "~/utils/seds-years";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "icon", type: "image/png", sizes: "256x256", href: "/icons/favicon-256.png" },
  { rel: "icon", type: "image/png", sizes: "128x128", href: "/icons/favicon-128.png" },
  { rel: "icon", type: "image/png", sizes: "64x64", href: "/icons/favicon-64-whitebg.png" },
  { rel: "icon", type: "image/png", sizes: "48x48", href: "/icons/favicon-48.png" },
  { rel: "icon", type: "image/png", sizes: "32x32", href: "/icons/favicon-32.png" },
  { rel: "icon", type: "image/png", sizes: "16x16", href: "/icons/favicon-16.png" },
  { rel: "apple-touch-icon", sizes: "180x180", href: "/icons/apple-touch-icon-180.png" },
  { rel: "manifest", href: "/site.webmanifest" },
];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  description: `SEDS (Social Education and Development Society) has been transforming rural communities in Andhra Pradesh through sustainable development, education, and environmental programs for over ${calculateSEDSYears()} years.`,
  title: "SEDS - Social Education and Development Society",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  const location = useLocation();
  const isHomepage = location.pathname === "/";

    return (
      <html className="font-sans font-normal" lang="en" suppressHydrationWarning>
        <head>
          <Meta />

          <Links />

          <script
            dangerouslySetInnerHTML={{
              __html: `(function(){try{var t=localStorage.getItem("theme");var d=t==="dark"||(t==null&&window.matchMedia("(prefers-color-scheme:dark)").matches);if(d)document.documentElement.classList.add("dark")}catch(e){}})()`,
            }}
          />

          {process.env.NODE_ENV === "production" ? (
            <script src="https://www.google.com/recaptcha/api.js?render=6LdRqWAfAAAAAIn3HEtC2rKXT9JD-1k4bysQF93O"></script>
          ) : null}
        </head>

        <body className="bg-surface-primary text-content-primary transition-colors">
          <Navigation />

        {isHomepage ? (
          <main>
            <Outlet />
          </main>
        ) : (
          <main className="container prose dark:prose-invert mx-auto lg:max-w-screen-md px-8 lg:px-0">
            <Outlet />
          </main>
        )}

        <script src="/seds-years.js"></script>

        <ScrollRestoration />

        <Scripts />

        <LiveReload />

        <StickyDonateButton />

        <Footer />
      </body>
    </html>
  );
}
