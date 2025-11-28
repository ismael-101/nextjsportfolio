// Main page component
"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import LogosSlide from "../components/Animations/LogosSlide";
import AnimatedTitle from "../components/Animations/AnimatedTitle";
import { useEffect, useState } from "react";
import {
  pageVariants,
  pageTransition,
} from "@/components/Animations/PageAnimation";
import Link from "next/link";
import path from "path";
import { Button } from "@react-email/components";
export default function Home() {
  const [open, setOpen] = useState(false);
  const [about, setAbout] = useState(false);

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        setAbout(true);
      }, 5000);
      return () => clearTimeout(timer);
    } else {
      setAbout(false);
    }
  }, [open]);

  return (
    <main className="relative ">
      <AnimatePresence>
        <motion.div
          className="h-[100dvh] lg:h-[80dvh] flex flex-col items-center justify-center text-center w-[70vw] m-auto "
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          {open && (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.9 } }}
              exit={{ opacity: 0, transition: { duration: 0.9 } }}
              className={cn("flex flex-col items-center justify-center ")}
            >
              <AnimatedTitle />
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 1 } }}
                exit={{ opacity: 0 }}
                className="lg:w-96 w-72 m-5"
              >
                <LogosSlide />
              </motion.div>
            </motion.div>
          )}
          <></>
          <motion.button
            className={cn(
              "p-4 font-bold rounded-lg text-sm",
              open
                ? "bg-secondary text-secondary-content p-2 pr-3 text-sm"
                : "bg-primary text-primary-content py-3 text-base "
            )}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
            transition={{ duration: 0.4 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              setOpen(!open);
            }}
            layout
          >
            {open ? "⭐Ismael" : "?! Ismael"}
          </motion.button>
          {/* {about && (
            <AnimatePresence>
              <motion.button
                className="mt-2 btn btn-primary btn-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  // Handle navigation to the "/about" page here
                  window.location.href = "/about";
                }}
              >
                About me
              </motion.button>
            </AnimatePresence>
          )} */}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
