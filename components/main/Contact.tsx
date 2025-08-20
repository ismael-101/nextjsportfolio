"use client";
import {
  pageVariants,
  pageTransition,
} from "@/components/Animations/PageAnimation";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import email from "@/images/email.svg";
import phone from "@/images/phone.svg";

export default function Contact() {
  return (
    <AnimatePresence>
      <motion.div
        id="contact"
        className="w-full h-screen lg:h-[90vh] flex flex-col items-center justify-center"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <div className="">
          <h1 className="text-2xl lg:text-5xl font-bold m-2 lg:m-5">
            you can reach me here:
          </h1>
          <div className="flex items-center max-lg:w-10 gap-2 lg:gap-10">
            <Image src={email} alt="email" width={100} height={200} />
            <p className="text-xl lg:text-4xl font-bold">
              {/* ismaelwork0@gmail.com */} will be add later
            </p>
          </div>
          <div className="flex items-center max-lg:w-10 gap-2 lg:gap-10">
            <Image src={phone} alt="email" width={100} height={200} />
            {/* <p className="text-xl lg:text-4xl font-bold">+491771584936</p> */}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
