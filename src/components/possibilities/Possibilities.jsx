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
        variants={slideIn("left", "tween", 0.2, 1)}
        className="thc__possibility-img"
      >
        <picture>
          <source
            srcSet="https://ik.imagekit.io/fq9vykvp2/BGIMAGES/tr:w-1200,h-1100/possibility.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1675704977337"
            type="image/webp"
            alt="possibility"
          />
          <img src="image.jpg" loading="lazy" alt="possibility" />
        </picture>
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
