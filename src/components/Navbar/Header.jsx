import React from "react";
import { motion } from "framer-motion";
import ParticlesBg from "particles-bg";
import "./Header.css";
import { slideIn, staggerContainer, textVariant } from "../../utils/motion";
import { particle } from "../../utils/particles";

const Header = () => {
  return (
    <motion.div
      className="thc__header section__padding"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <ParticlesBg
        // color="#ffffff"
        num={50}
        type="custom"
        bg={{ position: "absolute", zIndex: 0, width: "90%", height: "80%" }}
        config={particle}
        pointerEvents="none"
      />
      <div className="thc__header-content">
        <span>The Club,</span>

        <motion.h1 variants={textVariant(0.4)} className="gradient__text">
          Threat Hunters
        </motion.h1>
        <motion.p variants={textVariant(0.5)}>
          Join our cyber security club to gain knowledge and experience in this
          field, as well as network with other like-minded individuals.
        </motion.p>
      </div>
      <motion.div
        className="thc__header-img"
        variants={slideIn("right", "tween", 0.3, 1)}
      >
        <picture>
          <source
            srcSet="https://ik.imagekit.io/fq9vykvp2/BGIMAGES/tr:w-600,h-600/13730.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675939638505"
            type="image/webp"
          />
          <img src="image.jpg" loading="lazy" />
        </picture>
      </motion.div>
    </motion.div>
  );
};

export default Header;
