import classNames from "classnames";
import * as React from "react";
import { useEffect } from "react";

interface ColorModeProps {
  className?: string;
}

export const ColorMode = ({ className }: ColorModeProps) => {
  const styleBase = classNames(className, "color-mode cursor-pointer");
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      setMode("dark");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      setMode("light");
    }
  }, []);

  const handleToogle = (_e: any) => {
    document.documentElement.classList.toggle("dark");
    setMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <div className={styleBase} onClick={handleToogle}>
      {mode === "dark" ? "🌕" : "🌙"}
    </div>
  );
};

export default ColorMode;
