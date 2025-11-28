"use client";

import { useEffect } from "react";
import styled from "styled-components";
import { useAnimation, motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Styled components
const Word = styled(motion.span)`
  display: inline-block;
  margin-right: 0.25em;
  white-space: nowrap;
`;
const Character = styled(motion.span)`
  display: inline-block;
  margin-right: -0.05em;
`;

const AnimatedTitle = () => {
  const text = "WEB DEVELOPER"; // This would normally be passed into this component as a prop!
  const text2 = "full-stack"; // This would normally be passed into this component as a prop!
  const ctrls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.div>
        <h3 aria-label={text2} role="heading">
          {text2.split(" ").map((word, index) => {
            return (
              <Word
                className="lg:text-4xl text-1xl sm:text-2xl text-secondary"
                ref={ref}
                aria-hidden="true"
                key={index}
                initial="hidden"
                animate={ctrls}
                variants={wordAnimation}
                transition={{
                  delayChildren: index * 0.25,

                  staggerChildren: 0.05,
                }}
              >
                {word.split("").map((character, index) => {
                  return (
                    <Character
                      aria-hidden="true"
                      key={index}
                      variants={characterAnimation}
                    >
                      {character}
                    </Character>
                  );
                })}
              </Word>
            );
          })}
        </h3>

        <h1
          className="font-bold lg:text-6xl text-3xl sm:text-4xl lg:mt-2 text-primary"
          aria-label={text}
          role="heading"
        >
          {text.split(" ").map((word, index) => {
            return (
              <Word
                ref={ref}
                aria-hidden="true"
                key={index}
                initial="hidden"
                animate={ctrls}
                variants={wordAnimation}
                transition={{
                  delayChildren: index * 0.25,

                  staggerChildren: 0.05,
                }}
              >
                {word.split("").map((character, index) => {
                  return (
                    <Character
                      aria-hidden="true"
                      key={index}
                      variants={characterAnimation}
                    >
                      {character}
                    </Character>
                  );
                })}
              </Word>
            );
          })}
        </h1>
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedTitle;
