import React from "react";
import { sliderToolsData, sliderCourseData } from "../../utils/sliderData";
import Marquee from "react-fast-marquee";
import "./marquee.css";
import MarqueeElement from "./MarqueeElement";

const Slider = () => {
  return (
    <>
      <Marquee
        style={{ width: "800px", gap: "20px" }}
        speed={80}
        pauseOnHover={true}
        pauseOnClick={true}
        gradientWidth={20}
        gradientColor={[4, 12, 24]}
      >
        {sliderCourseData.map((course, idx) => (
          <MarqueeElement marqEl={course} />
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
    </>
  );
};

export default Slider;
