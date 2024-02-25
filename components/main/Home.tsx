"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import LogosSlide from "../Animations/LogosSlide";
import AnimatedTitle from "../Animations/AnimatedTitle";
import { useState } from "react";
// import { Parallax } from "react-scroll-parallax";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="h-screen flex flex-col items-center justify-center text-center ">
      {open && (
        <AnimatePresence>
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.9 } }}
            className={cn("flex flex-col items-center justify-center")}
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
        className="p-2 bg-teal-700 text-white rounded-md mt-5"
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
  );
}

{
  {
    /* <motion.div
    className="h-screen flex flex-col items-center justify-center text-center "
  >
    <motion.div
      transition={{ layout: { duration: 0.9, type: "spring" } }}
      layout
      className="py-3 px-5 bg-teal-50 rounded-md w-fill"
      onClick={() => setOpen(!open)}
    >
      <motion.h2 layout="position">{!open && "?!"} Ismael</motion.h2>
      {open && (
        <motion.div className=" pt-2 flex flex-col items-center justify-center text-center ">
          <AnimatedTitle />
          <div className="w-96 m-5">
            <LogosSlide />
          </div>
        </motion.div>
      )}
    </motion.div>
  </motion.div> */
  }
  // <motion.div
  //   initial={{ scale: 0 }}
  //   animate={{ scale: 1 }}
  //   className="bg-teal-50 w-full h-full absolute -z-10"
  // ></motion.div>
}
