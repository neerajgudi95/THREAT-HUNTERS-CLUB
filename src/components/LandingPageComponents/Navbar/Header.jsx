import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import GLOBE from "vanta/dist/vanta.globe.min";
import Typewriter from "../typewriter/Typewriter";
import "./Header.css";
import { slideIn, staggerContainer, textVariant } from "../../../utils/motion";

const Header = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 100.0,
          minWidth: 100.0,
          scale: 1.0,
          scaleMobile: 0.3,
          color: 0x0002a1,
          size: 1.5,
          backgroundColor: 0x040c18,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <motion.div
      className="thc__header section__padding"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      ref={myRef}
    >
      <div className="thc__header-content">
        <span>The Club,</span>

        <motion.h1 variants={textVariant(0.4)} className="gradient__text">
          Threat Hunters
        </motion.h1>
        <motion.p variants={textVariant(0.5)}>
          Join our cyber security club to gain knowledge and experience in this
          field, as well as network with other like-minded individuals.
        </motion.p>
        <Typewriter />
      </div>
      <motion.div
        className="thc__header-img"
        variants={slideIn("right", "tween", 0.3, 1)}
      >
        {/* <picture>
          <source
            srcSet="https://ik.imagekit.io/fq9vykvp2/BGIMAGES/tr:w-600,h-600/13730.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675939638505"
            type="image/webp"
          />
          <img src="image.jpg" loading="lazy" />
        </picture> */}
      </motion.div>
    </motion.div>
  );
};

export default Header;
