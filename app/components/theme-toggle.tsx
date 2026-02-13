import { Moon, Sun } from "phosphor-react";
import { useEffect, useState } from "react";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const shouldBeDark = stored === "dark" || (!stored && prefersDark);

    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle("dark", shouldBeDark);
    setMounted(true);
  }, []);

  const toggle = () => {
    const newValue = !isDark;
    setIsDark(newValue);
    document.documentElement.classList.toggle("dark", newValue);
    localStorage.setItem("theme", newValue ? "dark" : "light");
  };

  if (!mounted) return <div className="w-9 h-9" />;

  return (
    <button
      onClick={toggle}
      className="relative w-9 h-9 flex items-center justify-center rounded-full border border-outline bg-surface-secondary hover:bg-surface-tertiary transition-colors"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-yellow-400" weight="fill" />
      ) : (
        <Moon className="w-4 h-4 text-content-secondary" weight="fill" />
      )}
    </button>
  );
}

export default ThemeToggle;
