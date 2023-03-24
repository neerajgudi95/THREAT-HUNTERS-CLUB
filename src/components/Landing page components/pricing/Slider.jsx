import React from "react";
import { sliderToolsData, sliderCourseData } from "../../../utils/sliderData";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import "./marquee.css";
import MarqueeElement from "./MarqueeElement";
import { slideIn, staggerContainer } from "../../../utils/motion";

const Slider = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <Marquee
        style={{ width: "800px", gap: "20px" }}
        speed={80}
        pauseOnHover={true}
        pauseOnClick={true}
        gradientWidth={20}
        gradientColor={[4, 12, 24]}
      >
        {sliderCourseData.map((course, idx) => (
          <motion.div
            variants={slideIn(
              idx % 2 === 0 ? "right" : "left",
              "tween",
              0.2,
              1
            )}
          >
            <MarqueeElement marqEl={course} key={idx} />
          </motion.div>
        ))}
      </Marquee>
      <Marquee
        style={{ width: "800px", marginTop: "20px" }}
        speed={80}
        pauseOnHover={true}
        pauseOnClick={true}
        gradientWidth={20}
        gradientColor={[4, 12, 24]}
        direction="right"
      >
        {sliderToolsData.map((tool, idx) => (
          <MarqueeElement marqEl={tool} />
        ))}
      </Marquee>
    </motion.div>
  );
};

export default Slider;
