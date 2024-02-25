"use client";

import { useThemeStore } from "@/store";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/20/solid";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const ThemeSwitcher = () => {
  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ];
  const { mode, toggleMode } = useThemeStore();

  const handleToggle = (theme: string) => {
    toggleMode(theme);
  };
  function handleClick(e) {
    const clickedValue = (e.target as HTMLInputElement).value;
    handleToggle(clickedValue);
  }

  return (
    <div className="dropdown ">
      <div tabIndex={0} role="button" className="btn m-1">
        theme
        <svg
          width="12px"
          height="12px"
          className="h-2 w-2 fill-current opacity-60 inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content  z-[1] p-3 shadow-2xl bg-base-300 rounded-box w-52 h-52 overflow-y-auto overflow-x-hidden absolute top-10 right-0  scrollbar-thin  "
      >
        {themes.map((theme) => {
          return (
            <li key={theme}>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label={theme}
                value={theme}
                onClick={(e) => {
                  handleClick(e);
                }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const ThemeButton = () => {
  const { mode } = useThemeStore();
  const [isArrowLeft, setIsArrowLeft] = useState(false);
  function handleArrow() {
    setIsArrowLeft(!isArrowLeft);
  }
  return (
    <>
      <AnimatePresence>
        {!isArrowLeft ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed  select-none text-center right-1 text-xs mb-10 text-accent"
          >
            <p>theme:</p> <span>{mode}</span>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <motion.div
        className="fixed  top-9 z-50"
        initial={{ right: -100 }}
        animate={{ right: isArrowLeft ? 0 : -100 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {isArrowLeft ? (
          <ArrowRightCircleIcon
            className="w-5 mx-2 inline-block cursor-pointer"
            onClick={handleArrow}
          />
        ) : (
          <ArrowLeftCircleIcon
            className="w-5 mx-2 inline-block cursor-pointer"
            onClick={handleArrow}
          />
        )}
        <ThemeSwitcher />
      </motion.div>
    </>
  );
};
