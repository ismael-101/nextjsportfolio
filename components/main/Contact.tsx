"use client";
import LogosSlide from "../Animations/LogosSlide";
import {
  pageVariants,
  pageTransition,
} from "@/components/Animations/PageAnimation";
import { AnimatePresence, motion } from "framer-motion";
export default function Contact() {
  return (
    <motion.div
      className="w-full h-screen flex items-center justify-center"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <h1>contact</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab molestiae
        sunt, sequi ipsa minus praesentium natus numquam, sit eum soluta
        nesciunt repellat nisi! At veritatis molestias voluptatibus, quia
        reprehenderit adipisci?
      </p>
    </motion.div>
  );
}
