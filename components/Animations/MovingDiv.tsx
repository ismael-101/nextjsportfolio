import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function MovingDiv() {
  const [randomOffsetX, setRandomOffsetX] = useState(0);
  const [randomOffsetY, setRandomOffsetY] = useState(0);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const offsetX = (Math.random() - 1) * 400; // Adjust the range as needed
    const offsetY = (Math.random() - 1) * 400; // Adjust the range as needed
    setRandomOffsetX(offsetX);
    setRandomOffsetY(offsetY);
  };

  return (
    <div
      className="h-screen w-screen flex justify-center items-center bg-gray-200"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="h-2 w-2 bg-blue-500"
        style={{ x: randomOffsetX, y: randomOffsetY }}
      />
      <motion.div
        className="h-2 w-2 bg-green-500"
        style={{ x: -randomOffsetX, y: -randomOffsetY }}
      />
      {/* Add more animated divs as needed */}
    </div>
  );
}
