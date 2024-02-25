"use client";
import {
  pageVariants,
  pageTransition,
} from "@/components/Animations/PageAnimation";
import { AnimatePresence, motion } from "framer-motion";
export default function Contact() {
  return (
    <AnimatePresence>
      <motion.div
        className="w-full lg:h-[90dvh] h-screen flex items-center justify-center"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <div className="relative flex items-top justify-center sm:items-center sm:pt-0">
          <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
            <div className="mt-8 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 mr-2 opacity-85 bg-neutral text-neutral-content sm:rounded-lg">
                  <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                    Get in touch
                  </h1>
                  <p className="lg:text-xl text-lg text-neutral-content mt-2">
                    Fill in the form to start a conversation
                  </p>

                  <div className="flex items-center mt-8 text-sm">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      className="w-7 h-7 text-neutral-content"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div className="ml-4 tracking-wide font-semibold w-40">
                      Acme Inc, Street, State, Postal Code
                    </div>
                  </div>

                  <div className="flex items-center mt-4 text-sm">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      className="w-7 h-7 text-neutral-content"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div className="ml-4 tracking-wide font-semibold w-40">
                      +44 1234567890
                    </div>
                  </div>

                  <div className="flex items-center mt-2 text-sm">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      className="w-7 h-7 text-neutral-content"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div className="ml-4 tracking-wide font-semibold w-40">
                      info@acme.org
                    </div>
                  </div>
                </div>

                <form className="p-6 flex flex-col justify-center ">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="hidden">
                      Full Name
                    </label>
                    <input
                      type="name"
                      name="name"
                      id="name"
                      placeholder="Full Name"
                      className="w-100 mt-2 py-3 px-3 rounded-lg bg-neutral-content placeholder-neutral text-neutral font-semibold focus:bg-neutral focus:text-neutral-content focus:placeholder-neutral-content focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col mt-2">
                    <label htmlFor="email" className="hidden">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      className="w-100 mt-2 py-3 px-3 rounded-lg bg-neutral-content placeholder-neutral text-neutral font-semibold focus:bg-neutral focus:text-neutral-content focus:placeholder-neutral-content focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col mt-2">
                    <label htmlFor="tel" className="hidden">
                      Number
                    </label>
                    <input
                      type="tel"
                      name="tel"
                      id="tel"
                      placeholder="Telephone Number"
                      className="w-100 mt-2 py-3 px-3 rounded-lg bg-neutral-content placeholder-neutral text-neutral font-semibold focus:bg-neutral focus:text-neutral-content focus:placeholder-neutral-content focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="md:w-32 btn btn-primary mt-3"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
