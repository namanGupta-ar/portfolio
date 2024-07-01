import React from "react";

const Skill = ({text="", className="", iconClass="",icon}) => {
  return (
    <div className={`flex flex-col text-white gap-2 items-center ${className}`}>
      {!icon && <i class={`text-4xl ${iconClass}`}></i>}
      {icon}
      <p className="text-sm">{text}</p>
    </div>
  );
};

export default Skill;
