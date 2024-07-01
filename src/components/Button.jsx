import React from "react";

const Button = ({ text, type = "primary",iconClass='', className }) => {
  return type === "primary" ? (
    <button
      type="button"
      class={`w-max text-black font-semibold bg-primary rounded-full py-2 px-4 ${className}`}
    >
      {text}
      <i className={iconClass}></i>
    </button>
  ) : (
    <button
      className={`w-max text-black font-semibold bg-primary rounded-full py-2 px-4 ${className}`}
    >
      <span
        className={`w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0${className}`}
      >
        {text}
      </span>
    </button>
  );
};

export default Button;
