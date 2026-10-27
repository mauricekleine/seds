import { HeadContent, Outlet, Scripts, createRootRoute, useLocation } from "@tanstack/react-router";
import styles from "./app.css?url";
import Footer from "~/components/footer";
import Navigation from "~/components/navigation";
import StickyDonateButton from "~/components/sticky-donate-button";

const links = () => [
  { rel: "stylesheet", href: styles },
  {
    rel: "icon",
    type: "image/png",
    sizes: "256x256",
    href: "/icons/favicon-256.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "128x128",
    href: "/icons/favicon-128.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "64x64",
    href: "/icons/favicon-64-whitebg.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "48x48",
    href: "/icons/favicon-48.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/icons/favicon-32.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/icons/favicon-16.png",
  },
  { rel: "shortcut icon", href: "/favicon.ico" },
  { rel: "icon", type: "image/png", href: "/favicon.png" },
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/icons/apple-touch-icon-180.png",
  },
  { rel: "manifest", href: "/site.webmanifest" },
];

function App() {
  const location = useLocation();
  const isHomepage = location.pathname === "/";

  return (
    <html className="font-sans font-normal" lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />

        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"){document.documentElement.classList.add("dark")}else{document.documentElement.classList.remove("dark");if(!t)localStorage.setItem("theme","light")}}catch(e){}})()`,
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

        <Scripts />

        <StickyDonateButton />

        <Footer />
      </body>
    </html>
  );
}

export default App;
export const Route = createRootRoute({
  component: App,
  head: () => ({ meta: [{ charSet: "utf-8" }, { name: "viewport", content: "width=device-width,initial-scale=1" }], links: links() }),
});
