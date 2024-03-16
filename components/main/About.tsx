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
  const first = ` Hello, I'm Ismael, a dedicated web developer. My coding journey
  began in 2019 through online courses and tutorials, and my
  thirst for knowledge led me to pursue a one-year program in
  programming for full-stack development from 2023 to 2024.`;
  const second = ` From day one, my passion for coding has been unyielding,
  evolving into a genuine obsession. It's like a drug to me; the
  more I learn, the more I crave. Organization is my forte, both
  in code and in life. Beyond coding, you'll find me immersed in
  another love—coding.`;
  const third = ` Currently, I'm enrolled in courses on the Coursera platform,
  learning from some of the industry's top web developers. My
  focus is on honing my skills in JavaScript and React. I've also
  taken on the challenge of daily algorithm exercises on various
  web platforms. I'll be sharing my rankings soon, providing a
  glimpse into my dedication to continuous improvement.`;
  const forth = ` Let's embark on this coding journey together and create
  something extraordinary!`;

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="py-10 md:h-[100dvh] lg:h-[85dvh] flex items-center overflow-hidden ">
        <div className="w-full m-auto px-5 mx-auto lg:w-[65vw] lg:px-0 lg:my-14 prose ">
          <h2 className="lg:text-2xl text-accent font-bold ">
            Little bit about Ismael Ali
          </h2>
          <div className="flex flex-col md:flex-row items-center w-full md:mx-auto relative ">
            <div className="z-10 px-2 rounded-lg lg:max-w-[40vw] md:max-w-[50vw]">
              <p className="mt-3 lg:mt-3">{first}</p>
              <p className="my-3 lg:my-5">{second}</p>
              <p className="mb-3 lg:mb-6">{third}</p>
              <p className="mb-4 lg:mb-9 ">{forth}</p>
            </div>
            <div className="md:absolute right-10 lg:right-0 w-[22rem] mt-5  ">
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
