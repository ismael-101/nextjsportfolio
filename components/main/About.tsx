import ToolsSlide from "../Animations/ToolsSlide";

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
    <div className="h-screen flex flex-col  justify-center m-auto lg:w-[60%] w-11/12">
      <h2 className="text-3xl">Little bit about Ismael Ali</h2>
      <div className="text-xl my-14 lg:w-3/4">
        <p className="">
          Hello, I'm Ismael, a dedicated web developer. My coding journey began
          in 2019 through online courses and tutorials, and my thirst for
          knowledge led me to pursue a one-year program in programming for
          full-stack development from 2023 to 2024.
        </p>
        <p className="my-6">
          From day one, my passion for coding has been unyielding, evolving into
          a genuine obsession. It's like a drug to me; the more I learn, the
          more I crave. Organization is my forte, both in code and in life.
          Beyond coding, you'll find me immersed in another love—swimming.
        </p>
        <p className="mb-6">
          Currently, I'm enrolled in courses on the Coursera platform, learning
          from some of the industry's top web developers. My focus is on honing
          my skills in JavaScript and React. I've also taken on the challenge of
          daily algorithm exercises on various web platforms. I'll be sharing my
          rankings soon, providing a glimpse into my dedication to continuous
          improvement.
        </p>
        <p className="">
          Let's embark on this coding journey together and create something
          extraordinary!
        </p>
      </div>
      <ToolsSlide tools={tools} />
    </div>
  );
}
