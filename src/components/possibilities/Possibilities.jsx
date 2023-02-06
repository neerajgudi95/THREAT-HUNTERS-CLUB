import React from "react";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "../../utils/motion";
import "./possibilities.css";

const Possibilities = () => {
  return (
    <motion.div
      variants={staggerContainer}
      className="thc__possibility section__padding"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.5, 1)}
        className="thc__possibility-img"
      >
        <img
          src="https://ik.imagekit.io/fq9vykvp2/BGIMAGES/possibility.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675658966727"
          alt="possibility image"
        />
      </motion.div>
      <div className="thc__possibility-content">
        <motion.h3 variants={textVariant(0.4)}>Empowerment.</motion.h3>
        <motion.h2 variants={textVariant(0.6)} className="gradient__text">
          Enhancing members' knowledge and skills in identifying, analyzing, and
          mitigating cyber threats.
        </motion.h2>
      </div>
    </motion.div>
  );
};

export default Possibilities;
