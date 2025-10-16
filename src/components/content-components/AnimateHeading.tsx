"use client";
import { motion } from "framer-motion";

const AnimateHeading = ({ text }: { text: string }) => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.02,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      className="text-3xl md:text-4xl font-bold text-center mb-10 relative z-10"
      variants={containerVariants}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true }}
    >
      {text.split("").map((letter, index) => (
        <motion.span key={index} variants={letterVariants}>
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};
export default AnimateHeading;
