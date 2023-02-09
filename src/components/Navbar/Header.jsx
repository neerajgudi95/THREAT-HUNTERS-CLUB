import React from "react";
import { motion } from "framer-motion";
import ParticlesBg from "particles-bg";
import "./Header.css";
import { slideIn, staggerContainer, textVariant } from "../../utils/motion";

const Header = ({ children }) => {
  return (
    <motion.div
      className="thc__header section__padding"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="thc__header-content">
        <ParticlesBg
          color="#ffffff"
          num={50}
          type="cobweb"
          bg={{ position: "absolute", zIndex: 0, top: 0, left: 0 }}
        />
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
            srcSet="https://ik.imagekit.io/fq9vykvp2/BGIMAGES/shield-bg.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1675704982899"
            type="image/webp"
          />
          <img src="image.jpg" loading="lazy" />
        </picture>
      </motion.div>
      {children}
    </motion.div>
  );
};

export default Header;
