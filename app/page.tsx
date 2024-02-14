"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import LogosSlide from "../components/Animations/LogosSlide";
import AnimatedTitle from "../components/Animations/AnimatedTitle";
import { useState } from "react";
import MovingDiv from "@/components/Animations/MovingDiv";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <main className="w-full h-full relative">
      <motion.div className="h-screen flex flex-col items-center justify-center text-center ">
        {open && (
          <AnimatePresence>
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.9 } }}
              className={cn("flex flex-col items-center justify-center ")}
            >
              <AnimatedTitle />
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 1 } }}
                className="w-96 m-5"
              >
                <LogosSlide />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        )}
        <motion.button
          className="p-2 bg-secondary rounded-md mt-5"
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.1 },
          }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setOpen(!open);
          }}
          layout
        >
          ?! Ismael
        </motion.button>
      </motion.div>
    </main>
  );
}
