"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BiMoon } from "react-icons/bi";
import { BsSun } from "react-icons/bs";

const ThemeToggler = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  // When mounted on client, now we can show the UI
  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="w-10 h-10 flex bg-blue-950 dark:bg-white rounded-full items-center justify-center cursor-pointer transition-all duration-400"
    >
      {currentTheme === "dark" ? (
        <BsSun className="h-6 w-6 text-blue-950" />
      ) : (
        <BiMoon className="h-6 w-6 text-white" />
      )}
    </button>
  );
};
export default ThemeToggler;
