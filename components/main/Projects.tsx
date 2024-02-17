"use client";

import { motion } from "framer-motion";
import { pageTransition, pageVariants } from "../Animations/PageAnimation";

export default function Projects() {
  return (
    <motion.div
      className="w-full h-screen flex items-center justify-center"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <h1>Projects</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ex impedit
        accusamus. Rerum delectus tenetur temporibus ipsum quod laboriosam sint
        molestiae? Assumenda facilis excepturi molestiae consequatur, officiis
        fugiat facere cum.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
        non ducimus? Nostrum facilis pariatur sint optio! Quis, qui quidem
        reiciendis quae, vero impedit doloribus magni beatae sequi quisquam
        ullam perferendis.
      </p>
    </motion.div>
  );
}
