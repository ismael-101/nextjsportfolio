"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { ThemeButton, ThemeSwitcher } from "../ThemeSwitcher";
import Nav from "./Nav";
import CVButton from "./CVButton";

export default function NavItem() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [isArrowLeft, setIsArrowLeft] = useState(false);
  function handleArrow() {
    setIsArrowLeft(!isArrowLeft);
  }
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      className="z-50 lg:flex lg:min-h-[10dvh]  lg:items-center lg:justify-center  overflow-x-clip "
      initial={{ x: 0 }}
      transition={{ type: "spring", stiffness: 50 }}
    >
      {windowWidth > 1024 ? (
        <>
          <ThemeButton />
          <div className="flex gap-4">
          <Nav />
          <CVButton />
          </div>
        </>
      ) : (
        <motion.div
          className={cn("fixed top-10  h-0 z-50", isArrowLeft ? "w-full" : "")}
          initial={{ right: -100 }}
          animate={{ right: isArrowLeft ? 0 : -100 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          <motion.div
            className={cn(
              "gap-5 flex",
              isArrowLeft ? "flex-row-reverse w-full gap-0 " : ""
            )}
          >
            <motion.div transition={{ duration: 1 }}>
              {isArrowLeft ? (
                <ArrowRightCircleIcon
                  className="w-5 inline-block cursor-pointer absolute z-50"
                  onClick={handleArrow}
                />
              ) : (
                <ArrowLeftCircleIcon
                  className="w-5 inline-block cursor-pointer"
                  onClick={handleArrow}
                />
              )}
            </motion.div>
            <motion.div
              className="w-full flex justify-end"
              onClick={() => {
                setTimeout(() => {
                  handleArrow();
                }, 30);
              }}
            >
              <div
                className={cn(
                  isArrowLeft
                    ? "w-1/3 gap-5 flex-col px-12 py-3  h-full flex rounded-2xl bg-white items-center justify-center"
                    : ""
                )}
              >
                <Nav />
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <div className="flex flex-col">
                    <CVButton />
                    <ThemeSwitcher />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}
