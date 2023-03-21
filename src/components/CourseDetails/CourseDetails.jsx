import React, { useState } from "react";
import {
  firstMonthCourseDetails,
  secondMonthCourseDetails,
  thirdMonthCourseDetails,
} from "../../utils/courseDetails";
import "./courseDetails.css";
import TimelineItem from "../Timeline/TimelineItem";

const CourseDetails = () => {
  const months = [
    { month: "first", selectMonth: firstMonthCourseDetails },
    { month: "second", selectMonth: secondMonthCourseDetails },
    { month: "third", selectMonth: thirdMonthCourseDetails },
  ];

  const [selectedMonth, setSelectedMonth] = useState(months[0]);

  const handleSelect = (e) => {
    const option = e.target.value;
    const monthSelected = months.find((m) => m.month === option);
    setSelectedMonth(monthSelected);
  };

  return (
    <div className="thc__courseInfo-body section__padding">
      <div className="month-select">
        <select onChange={handleSelect}>
          <option value="first">First Month</option>
          <option value="second">Second Month</option>
          <option value="third">Third Month</option>
        </select>
      </div>
      <div className="thc__courseInfo-wrapper">
        <h2>{`Course for ${selectedMonth.month} month`}</h2>
        {selectedMonth.selectMonth.length > 0 && (
          <div className="thc__courseInfo-container">
            {selectedMonth.selectMonth.map((course, idx) => (
              <TimelineItem course={course} key={idx} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default CourseDetails;
