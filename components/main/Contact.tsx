"use client";
import {
  pageVariants,
  pageTransition,
} from "@/components/Animations/PageAnimation";
import { AnimatePresence, motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Contact() {
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
      terms: Yup.string().required("terms must be accepted."),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
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
        <div id="contact" className=" flex  items-center justify-center">
          <form
            onSubmit={formik.handleSubmit}
            className="bg-white flex lg:flex-row flex-col rounded-lg w-3/4 lg:h-3/4 h-[100%] relative"
          >
            <div className="text-gray-700 p-6 lg:p-20  lg:px-10 z-10">
              <h1 className="text-3xl pb-2">lets get started</h1>
              <p className="text-lg text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis voluptates nobis veritatis! In ipsam quas nihil iure
                a cupiditate quia.
              </p>
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
                </div>
                <div className="lg:flex-1 ">
                  {/* terms of service */}
                  <div className="pb-4">
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
                        className="checkbox border-neutral-content checkbox-primary p-2 focus:border-primary focus:outline-none focus:ring-2"
                        name="terms"
                        value="checked"
                        onChange={formik.handleChange}
                      />
                      <p className="text-sm p-3">
                        Iagree to the terms and conditions
                      </p>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-graborder-neutral-content btn-wide text-graborder-neutral-content-content  lg:mt-7"
                  >
                    ارسال
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
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
