"use client";

import { Logo, LogosSlideProps } from "../../lib/types";
import Image from "next/image";
import html from "../../images/logos/html.svg";
import css from "../../images/logos/css.svg";
import js from "../../images/logos/js.svg";
import reactLogo from "../../images/logos/react.svg";
import node from "../../images/logos/node.svg";
import nextjs from "../../images/logos/nextjs.svg";
import fullstack from "../../images/logos/fullstack.svg";
import mongodb from "../../images/logos/mongodb.svg";

const LogosSlide: React.FC<LogosSlideProps> = ({ style }) => {
  const logos: Logo[] = [
    html,
    css,
    js,
    reactLogo,
    node,
    nextjs,
    fullstack,
    mongodb,
  ];
  let logoItems = logos.map((logo, index) => (
    <Image key={index} src={logo} alt={logo}  />
  ));

  return (
    <div
      className="scroll logos"
      style={{
        ...style,
        "--t": "60s",
        "--n11": "100%",
        "--n12": "-100%",
        "--n21": "0",
        "--n22": "-200%",
      }}
    >
      <div>{logoItems}</div>
      <div>{logoItems}</div>
      <div>{logoItems}</div>
      {/* <div>{logoItems}</div> */}
    </div>
  );
};

export default LogosSlide;
