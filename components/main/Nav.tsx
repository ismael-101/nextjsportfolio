"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useTransform,
  useAnimation,
} from "framer-motion";

import { useEffect, useState } from "react";
import { ThemeButton } from "../ThemeSwitcher";

export default function Nav() {
  // move the nav base on the window size
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const navX = useTransform(x, [0, window.innerWidth], [0, 100]);
  const navY = useTransform(y, [0, window.innerWidth], [0, 100]);

  const links = [
    {
      path: "/",
      name: "home",
    },
    {
      path: "/about",
      name: "about",
    },
    {
      path: "/projects",
      name: "projects",
    },
    {
      path: "/contact",
      name: "contact",
    },
  ];

  const pathname = usePathname();
  const MotionLink = motion(Link);

  const mapRange = (
    inputLower: number,
    inputUpper: number,
    outputLower: number,
    outputUpper: number
  ) => {
    const INPUT_RANGE = inputUpper - inputLower;
    const OUTPUT_RANGE = outputUpper - outputLower;

    return (value: number) =>
      outputLower + (((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0);
  };

  const setTransform = (
    item: HTMLElement & EventTarget,
    event: React.PointerEvent,
    x: MotionValue,
    y: MotionValue
  ) => {
    const bounds = item.getBoundingClientRect();
    const relativeX = event.clientX - bounds.left;
    const relativeY = event.clientY - bounds.top;
    const xRange = mapRange(0, bounds.width, -1, 1)(relativeX);
    const yRange = mapRange(0, bounds.height, -1, 1)(relativeY);
    x.set(xRange * 10);
    y.set(yRange * 10);
    console.log(xRange);
  };

  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <motion.nav
        className="flex flex-col lg:flex-row "
        initial={{ x: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        <ul className="flex flex-col lg:flex-row justify-center gap-10">
          {links.map((link) => {
            const x = useMotionValue(0);
            const y = useMotionValue(0);
            const textX = useTransform(x, (latest) => latest * 0.5);
            const textY = useTransform(y, (latest) => latest * 0.5);
            return (
              <motion.li
                className=""
                onPointerMove={(event) => {
                  const item = event.currentTarget;
                  setTransform(item, event, x, y);
                }}
                key={link.path}
                onPointerLeave={(event) => {
                  x.set(0);
                  y.set(0);
                }}
                style={{ x, y }}
              >
                <MotionLink
                  className={cn(
                    " relative rounded-md text-sm py-2 px-4 transition-all duration-500 ease-out hover:bg-base-300",
                    pathname === link.path
                      ? "btn-sm btn-active btn-neutral hover:bg-blue-900"
                      : ""
                  )}
                  href={link.path}
                  scroll={false}
                >
                  <motion.span
                    style={{ x: textX, y: textY }}
                    className="z-10 relative"
                  >
                    {link.name}
                  </motion.span>
                  {pathname === link.path ? (
                    <motion.div
                      transition={{ type: "spring" }}
                      layoutId="underline"
                      className="absolute w-full h-full rounded-md left-0 bottom-0  "
                    ></motion.div>
                  ) : null}
                </MotionLink>
              </motion.li>
            );
          })}
        </ul>
      </motion.nav>
    </AnimatePresence>
  );
}
