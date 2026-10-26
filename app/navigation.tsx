import { Link as RouterLink, useLocation, useNavigate, useParams as routerParams } from "@tanstack/react-router";
import { useState, type ComponentProps, type ReactNode } from "react";
import { submitInquiry } from "../src/functions";
export { useLocation };
export function useParams() { return routerParams({ strict: false }); }
export function useSearchParams() { const location = useLocation(); return [new URLSearchParams(location.searchStr)] as const; }
type LinkProps = Omit<ComponentProps<"a">, "href" | "className"> & {
  to: string;
  children?: ReactNode;
  className?: string | ((state: { isActive: boolean }) => string);
};
export function Link({ to, className, ...props }: LinkProps) {
  const location = useLocation();
  const isActive = to === "/" ? location.pathname === "/" : location.pathname === to || location.pathname.startsWith(to + "/");
  return <RouterLink to={to} className={typeof className === "function" ? className({ isActive }) : className} {...props} />;
}
export const NavLink = Link;
export function useFormSubmission(kind: "contact" | "collaborate") {
  const navigate = useNavigate();
  const [state, setState] = useState("idle");
  async function submit(form: HTMLFormElement | FormData, _options?: { method: string }) {
    setState("submitting");
    try {
      const fields = Object.fromEntries((form instanceof FormData ? form : new FormData(form)).entries());
      const result = await submitInquiry({ data: { kind, fields } });
      setState("loading");
      await navigate({ to: `/${kind}`, search: { [result.success ? "success" : "error"]: true } });
    } catch {
      await navigate({ to: `/${kind}`, search: { error: true } });
    } finally { setState("idle"); }
  }
  return { submit, transition: { state } };
}
