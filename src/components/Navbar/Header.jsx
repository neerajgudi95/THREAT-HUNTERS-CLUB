import React from "react";
import { motion } from "framer-motion";
// import ParticlesBg from "../particles/ParticlesBg";
import "./Header.css";
import shield from "../../assets/bgimages/shield-bg.png";
// import banner from '../../assets/bgimgs/cyber-bg-transformed.png'
import { slideIn, staggerContainer, textVariant } from "../../utils/motion";

const Header = () => {
  return (
    <motion.div
      className="thc__header section__padding"
      id="home"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* <ParticlesBg /> */}
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
      {/* <.div variants={slideIn("right", "tween", 0.2, 1)}> */}
      <motion.div
        className="thc__header-img"
        variants={slideIn("right", "tween", 0.3, 1)}
      >
        <img src={shield} alt="shield-bg" />
      </motion.div>
      {/* </motion.div> */}
    </motion.div>
  );
};

export default Header;
