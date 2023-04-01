import React from "react";
import "./timeline.css";
const TimelineItem = ({ course }) => {
  return (
    <div className="thc__timeline-item">
      <div className="thc__timeline-item-content">
        <span className="tag" style={{ background: course.category.color }}>
          {course.category.tag}
        </span>
        <p>{course.text1}</p>
        <p>{course.text2}</p>
        <span className="circle"></span>
      </div>
    </div>
  );
};

export default TimelineItem;
