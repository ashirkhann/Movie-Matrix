import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircleRating = ({ rating = 'N/A' }) => {
  return (
    <div className="circleRating sm:w-16 w-12 font-bold bg-white rounded-full">
      <CircularProgressbar
        value={rating}
        maxValue={10}
        text={`${rating}`}
        strokeWidth={10}
        styles={{
          text: {
            fontSize: "32px", 
          },
          path: {
            stroke: rating < 5 ? "red" : rating < 7 ? "orange" : "teal",
          },
        }}
      />
    </div>
  );
};

export default CircleRating;
