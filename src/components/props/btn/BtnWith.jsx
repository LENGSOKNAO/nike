import React from "react";

const BtnWith = ({ text }) => {
  return (
    <button className="bg-white text-black px-4 py-2 rounded-4xl text-md font-medium cursor-pointer">
      {text}
    </button>
  );
};

export default BtnWith;
