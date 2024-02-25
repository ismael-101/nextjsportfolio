"use client";

import { cn } from "@/lib/utils";

import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useTransform,
  useAnimation,
} from "framer-motion";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
  BoltIcon,
} from "@heroicons/react/20/solid";

import { useEffect, useState } from "react";
import { ThemeButton } from "../ThemeSwitcher";
import Nav from "./Nav";

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
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <motion.div
        className="z-50 lg:flex lg:min-h-[10dvh] lg:items-center lg:justify-center  overflow-x-clip"
        initial={{ x: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        {windowWidth > 1024 ? (
          <>
            <ThemeButton />
            <Nav />
          </>
        ) : (
          <motion.div
            className="fixed top-0 z-50 "
            initial={{ right: -100, top: 0 }}
            animate={{ right: isArrowLeft ? 0 : -100 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            <motion.div className="gap-5 flex">
              <motion.div transition={{ duration: 1 }}>
                {isArrowLeft ? (
                  <ArrowRightCircleIcon
                    className="w-5 inline-block cursor-pointer"
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
                onClick={() => {
                  setTimeout(() => {
                    handleArrow();
                  }, 500);
                }}
              >
                <Nav />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
