import React from "react";

const CustomButton = ({ title }) => {
  return (
    <button
      data-aos="fade-down"
      className="bg-blue-400 hover:bg-blue-500 text-white px-5 py-2 text-md w-[80%] sm:w-[100%] cursor-pointer rounded-xl font-normal"
    >
      {title}
    </button>
  );
};

export default CustomButton;
