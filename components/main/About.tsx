"use client";

import ToolsSlide from "../Animations/ToolsSlide";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../Animations/PageAnimation";
import Image from "next/image";
import ismael from "/images/ismael.png";
import { cn } from "@/lib/utils";

const tools = [
  "Html",
  "CSS",
  "Javascript",
  "ReactJS",
  "Figma",
  "NextJS",
  "MongoeDB",
  "nodejs",
];
export default function About() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="py-10 h-full lg:h-[90dvh] flex items-center ">
        <div className="w-full  m-auto px-5 mx-auto lg:w-[65vw] lg:px-0 lg:my-14 prose">
          <h2 className="lg:text-2xl text-accent font-bold">
            Little bit about Ismael Ali
          </h2>
          <div className="flex flex-col items-center lg:flex-row relative">
            <div className="z-10  px-2 rounded-lg lg:max-w-[40vw]">
              <p className="mt-3  lg:mt-3">
                Hello, I'm Ismael, a dedicated web developer. My coding journey
                began in 2019 through online courses and tutorials, and my
                thirst for knowledge led me to pursue a one-year program in
                programming for full-stack development from 2023 to 2024.
              </p>
              <p className="my-3 lg:my-5">
                From day one, my passion for coding has been unyielding,
                evolving into a genuine obsession. It's like a drug to me; the
                more I learn, the more I crave. Organization is my forte, both
                in code and in life. Beyond coding, you'll find me immersed in
                another love—swimming.
              </p>
              <p className="mb-3 lg:mb-6">
                Currently, I'm enrolled in courses on the Coursera platform,
                learning from some of the industry's top web developers. My
                focus is on honing my skills in JavaScript and React. I've also
                taken on the challenge of daily algorithm exercises on various
                web platforms. I'll be sharing my rankings soon, providing a
                glimpse into my dedication to continuous improvement.
              </p>
              <p className="mb-4 lg:mb-9 ">
                Let's embark on this coding journey together and create
                something extraordinary!
              </p>
            </div>
            <div className="lg:absolute lg:right-0 lg:-top-7 w-[10rem] lg:w-[22rem] mt-5  ">
              <Image
                className="bg-cover rounded-full h-auto transform -rotate-12 shadow-2xl pointer-events-none"
                src={ismael}
                width={1000}
                height={1000}
                alt="ismael"
              />
            </div>
          </div>
          <div className="text-xl">
            <ToolsSlide tools={tools} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
