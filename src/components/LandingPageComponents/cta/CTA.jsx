import React, { useState } from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./cta.css";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const TestimonialsPage = () => {
  const [currVideo, setCurrVideo] = useState(0);
  const testimonialVideos = [
    {
      id: 1,
      title: "Aishwarya",
      videoUrl:
        "https://ik.imagekit.io/fq9vykvp2/Feedback/feedback1?updatedAt=1686468071998",
    },
    {
      id: 1,
      title: "Sachin",
      videoUrl:
        "https://res.cloudinary.com/dbs5eaj5e/video/upload/v1686480012/feedback2.mp4",
    },
    {
      id: 2,
      title: "Ritesh",
      videoUrl:
        "https://res.cloudinary.com/dbs5eaj5e/video/upload/v1686484933/feedback3_b1clb3.mp4",
    },
    {
      id: 3,
      title: "Gururaj",
      videoUrl:
        "https://res.cloudinary.com/dbs5eaj5e/video/upload/v1686485391/feedback4_qrogv9.mp4",
    },
    {
      id: 4,
      title: "Sushen",
      videoUrl:
        "https://res.cloudinary.com/dbs5eaj5e/video/upload/v1686941128/feedback5_pnootw.mp4",
    },
  ];

  return (
    <div className="thc__testimonials section__padding">
      <div className="thc__testimonials-heading">
        <h2>TESTIMONIALS</h2>
      </div>
      <div className="thc__testimonials-container">
        {/* <div className="thc__testimonials-carousel"> */}
        <div
          className="thc__testimonials-left"
          onClick={() => {
            currVideo > 0 && setCurrVideo(currVideo - 1);
          }}
        >
          <AiOutlineArrowLeft size={"3rem"} />
        </div>
        <div className="thc__testimonials-center">
          <video
            src={testimonialVideos[currVideo].videoUrl}
            controls
            controlsList="nodownload"
          />
        </div>
        <div
          className="thc__testimonials-right"
          onClick={() => {
            currVideo < testimonialVideos.length - 1 &&
              setCurrVideo(currVideo + 1);
          }}
        >
          <AiOutlineArrowRight size={"3rem"} />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default TestimonialsPage;
