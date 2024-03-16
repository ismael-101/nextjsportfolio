"use client";
import {
  pageVariants,
  pageTransition,
} from "@/components/Animations/PageAnimation";
import { AnimatePresence, motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import WindoWidth from "./WindoWidth";

export default function Contact() {
  const { windowWidth, setWindowWidth } = WindoWidth();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
      terms: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "name must be 20 charracters or less.")
        .required("please enter your name."),
      email: Yup.string().email("Invalid email address").required("Required"),
      message: Yup.string().required("message is required."),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
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
        <div className="lg:h-[80%] w-full flex items-center justify-center">
          <form
            onSubmit={formik.handleSubmit}
            className="bg-gray-200 lg:items-center flex lg:flex-row flex-col rounded-lg w-3/4 lg:h-3/4 h-[100%] lg:relative max-lg:static top-0 "
          >
            <div className="text-gray-700 p-6 max-lg:mt-20 lg:p-14  lg:px-10 z-10 w-full ">
              <h1 className="text-3xl pb-2">lets get started</h1>

              <div className="mt-6 lg:flex lg:gap-5">
                <div className="flex-1">
                  {/* name */}
                  <div className="pb-4">
                    <label
                      className={`block text-sm pb-2 ${
                        formik.touched.name && formik.errors.name
                          ? "text-red-400"
                          : ""
                      }`}
                      htmlFor="name"
                    >
                      {formik.touched.name && formik.errors.name
                        ? formik.errors.name
                        : "name"}
                    </label>
                    <input
                      className="border-2 bg-white input border-neutral-content p-2 rounded-md w-full   focus:border-primary focus:outline-none focus:ring-2 "
                      type="text"
                      name="name"
                      placeholder="enter your name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>{" "}
                  {/* email */}
                  <div className="pb-4">
                    <label
                      className={`block text-sm pb-2 ${
                        formik.touched.email && formik.errors.email
                          ? "text-red-400"
                          : ""
                      }`}
                    >
                      {formik.touched.email && formik.errors.email
                        ? formik.errors.email
                        : "email"}
                    </label>
                    <input
                      className=" border-2 bg-white input border-neutral-content p-2 rounded-md w-full  focus:border-primary focus:outline-none focus:ring-2 "
                      type="text"
                      name="email"
                      placeholder="enter your email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                </div>

                <div className="lg:flex-1 ">
                  {/* message */}
                  <div className="pb-4">
                    <label
                      className={`block text-sm pb-2 ${
                        formik.touched.message && formik.errors.message
                          ? "text-red-400"
                          : ""
                      }`}
                      htmlFor="message"
                    >
                      {formik.touched.message && formik.errors.message
                        ? formik.errors.message
                        : "message"}
                    </label>
                    <textarea
                      className="textarea border-2 bg-white input border-neutral-content p-2 rounded-md w-full  focus:border-primary focus:outline-none focus:ring-2 h-32 "
                      name="message"
                      placeholder="enter your message"
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  {/* terms of service */}

                  <div className="pb-2">
                    <label
                      className={`block text-sm pb-2 ${
                        formik.touched.terms && formik.errors.terms
                          ? "text-red-400"
                          : ""
                      }`}
                      htmlFor="terms"
                    >
                      {formik.touched.terms && formik.errors.terms
                        ? formik.errors.terms
                        : "Terms of service"}
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="checkbox border-neutral-content border-2 checkbox-primary p-2 focus:border-primary focus:outline-none focus:ring-2"
                        name="terms"
                        value="checked"
                        onChange={formik.handleChange}
                      />
                      <p className="text-sm p-1">
                        I agree to the terms and conditions
                      </p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn border-neutral-content btn-wide btn-primary border-none text-primary-content  "
                  >
                    send
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <footer className="h-[20%] flex w-full flex-col items-center bg-zinc-50 text-center text-surface dark:bg-neutral-700 dark:text-white static bottom-0 py-2 ">
          {/* Social media icons container */}
          <div className=" flex justify-center space-x-2">
            <a
              href="#!"
              type="button"
              className="rounded-full bg-transparent p-2 py-1 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900"
              data-twe-ripple-init=""
            >
              <span className="[&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 320 512"
                >
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
              </span>
            </a>
            <a
              href="#!"
              type="button"
              className="rounded-full bg-transparent p-2 py-1 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900"
              data-twe-ripple-init=""
            >
              <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </span>
            </a>
            <a
              href="#!"
              type="button"
              className="rounded-full bg-transparent p-2 py-1 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900"
              data-twe-ripple-init=""
            >
              <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 488 512"
                >
                  <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                </svg>
              </span>
            </a>
            <a
              href="#!"
              type="button"
              className="rounded-full bg-transparent p-2 py-1 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900"
              data-twe-ripple-init=""
            >
              <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </span>
            </a>
            <a
              href="#!"
              type="button"
              className="rounded-full bg-transparent p-2 py-1 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900"
              data-twe-ripple-init=""
            >
              <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                </svg>
              </span>
            </a>
            <a
              href="#!"
              type="button"
              className="rounded-full bg-transparent p-2 py-1 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900"
              data-twe-ripple-init=""
            >
              <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 496 512"
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
              </span>
            </a>
          </div>
          <div>
            <p>ismaelwork0@gmail.com</p>{" "}
          </div>
          {/*Copyright section*/}
          <div className="w-full bg-black/5 p-2 text-center">
            © 2023 Copyright
          </div>
        </footer>
      </motion.div>
    </AnimatePresence>
  );
}

{
  /* <div className="relative flex items-top justify-center sm:items-center sm:pt-0">
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
                     Bielefeld, Germany, NRW
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
                      +0049 177 158 49 36
                      +
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
        </div> */
}
