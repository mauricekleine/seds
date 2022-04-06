import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "~/app.css";
import Footer from "~/components/footer";
import Navigation from "~/components/navigation";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  {
    crossOrigin: "anonymous",
    rel: "preconnect",
    href: "https://fonts.googleapis.com",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;600&family=Ubuntu:wght@500&display=swap",
  },
  {
    rel: "icon",
    href: "/favicon.png",
  },
];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  description:
    "The Social Education and Development Society (SEDS) is a Non-Governmental Organisation that has been actively involved in socially transforming initiatives and rural development for over 38 years near the town of Penukonda in Andhra Pradesh.",
  title: "SEDS",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />

        <Links />
      </head>

      <body>
        <Navigation />

        <main className="container prose mx-auto lg:max-w-screen-md px-8 lg:px-0">
          <Outlet />
        </main>

        <ScrollRestoration />

        <Scripts />

        <LiveReload />

        <Footer />
      </body>
    </html>
  );
}
