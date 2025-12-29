import React from "react";

const BigText = ({ text }) => {
  return (
    <h2 className=" text-2xl sm:text-3xl md:text-4xl xl:text-6xl font-bigText font-bold uppercase ">
      {text}
    </h2>
  );
};

export default BigText;
