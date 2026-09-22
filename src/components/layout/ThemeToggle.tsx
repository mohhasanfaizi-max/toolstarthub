"use client";

import { useSyncExternalStore } from "react";
import { Icon } from "@/components/icons/Icon";

type Theme = "light" | "dark";

function getPreferredTheme(): Theme {
  try {
    const stored = localStorage.getItem("tsh-theme");
    if (stored === "light" || stored === "dark") {
      return stored;
    }
  } catch {
    // Ignore storage access errors.
  }

  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }

  return "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

function subscribeTheme(callback: () => void) {
  window.addEventListener("tsh-theme-change", callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("tsh-theme-change", callback);
    window.removeEventListener("storage", callback);
  };
}

function getThemeSnapshot(): Theme {
  const current = document.documentElement.getAttribute("data-theme");
  if (current === "dark" || current === "light") {
    return current;
  }

  return getPreferredTheme();
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    () => "light",
  );

  function toggleTheme() {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);

    try {
      localStorage.setItem("tsh-theme", nextTheme);
    } catch {
      // Ignore storage access errors.
    }

    window.dispatchEvent(new Event("tsh-theme-change"));
  }

  const label =
    theme === "dark" ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex size-10 items-center justify-center rounded-xl text-muted-foreground hover:bg-muted hover:text-foreground"
      aria-label={label}
    >
      {theme === "dark" ? (
        <Icon name="sun" className="size-5" />
      ) : (
        <Icon name="moon" className="size-5" />
      )}
    </button>
  );
}
