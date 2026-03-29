"use client";
import { useEffect, useState } from "react";
import { FaRegSun, FaRegMoon } from "react-icons/fa6";
import GlassSurface from "./GlassSurface";

const LightDarkM = () => {
  const getInitialDarkMode = () => {
    const isDarkMode = localStorage.getItem("darkMode");
    if (isDarkMode) {
      return JSON.parse(isDarkMode);
    } else if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return true;
    }
    return false;
  };

  const [darkMode, setDarkMode] = useState(getInitialDarkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  const handleTheme = () => {
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
    setDarkMode(!darkMode);
  };
  return (
    <button
      title={darkMode ? "change to light mode" : "change to dark mode"}
      className="sm:order-3 cursor-none cursor-target"
      onClick={handleTheme}
    >
      <GlassSurface
        displace={0.5}
        distortionScale={-180}
        className="w-12! h-12! lg:w-16! lg:h-16! rounded-full!  text-2xl"
        redOffset={0}
        greenOffset={10}
        blueOffset={20}
        brightness={50}
        opacity={1}
        mixBlendMode="screen"
      >
        {darkMode ? (
          <FaRegMoon className="text-gray-400" />
        ) : (
          <FaRegSun className="text-yellow-400" />
        )}
      </GlassSurface>
    </button>
  );
};

export default LightDarkM;
