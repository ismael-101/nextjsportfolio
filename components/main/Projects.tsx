"use client";

import { motion } from "framer-motion";
import { pageTransition, pageVariants } from "../Animations/PageAnimation";
import Image from "next/image";
import ismael from "@/images/ismael.png";
// import syber from "@/images/syber.png";

export default function Projects() {
  // const projects = [
  //   {
  //     title: "small game",
  //     image: syber,
  //     description:
  //       "A small game made with JavaScript and CSS. It's a simple game where you have to eat vegetables and avoid candies with my niece.",
  //     link: "https://ismael-101.github.io/syber/seeberyan.html",
  //   },
  //   {
  //     title: "Project 2",
  //     image: ismael,
  //     description: "This is a project",
  //     link: "https://www.google.com",
  //   },
  //   {
  //     title: "Project 3",
  //     image: ismael,
  //     description: "This is a project",
  //     link: "https://www.google.com",
  //   },
  //   {
  //     title: "Project 4",
  //     image: ismael,
  //     description: "This is a project",
  //     link: "https://www.google.com",
  //   },
  //   {
  //     title: "Project 5",
  //     image: ismael,
  //     description: "This is a project",
  //     link: "https://www.google.com",
  //   },
  //   {
  //     title: "Project 6",
  //     image: ismael,
  //     description: "This is a project",
  //     link: "https://www.google.com",
  //   },
  //   {
  //     title: "Project 7",
  //     image: ismael,
  //     description: "This is a project",
  //     link: "https://www.google.com",
  //   },
  //   {
  //     title: "Project 8",
  //     image: ismael,
  //     description: "This is a project",
  //     link: "https://www.google.com",
  //   },
  // ];

  return (
    <motion.div
      className="w-full h-screen lg:h-[80dvh] flex flex-col items-center justify-center "
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="h-full flex items-center justify-center w-full">
        <h1>This page is coming soon ☕ </h1>
      </div>
      {/* <h1 className="font-bold text-3xl text-primary mt-14 mb-3 ">
        Some of my Projects
      </h1>
      <div className=" h-full flex flex-wrap justify-center w-[90vw] m-auto">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="m-4 px-4 border-2 border-gray-600 rounded-lg"
            >
              <h1 className="text-2xl font-bold w-48 py-3">{project.title}</h1>
              <Image
                className="rounded-lg"
                src={project.image}
                width={200}
                height={200}
                alt="ismael"
              />
              <p className="w-48 pt-3">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 pb-3"
              >
                go to project
              </a>
            </div>
          );
        })}
      </div> */}
    </motion.div>
  );
}
