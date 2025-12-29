/** @format */
import React from "react";
function Hamburger({ className = "", open, onClick }) {
  return (
    <div
      className={`flex flex-col h-5 w-6 justify-between items-center cursor-pointer ${className}`}
      onClick={onClick}
    >
      <span
        className={`w-full h-[2px] bg-white rounded-lg ${
          open
            ? "origin-left rotate-45 translate-y-[0.5px] translate-x-[4px] transition-transform"
            : "transition-transform"
        }`}
      ></span>
      <span
        className={`w-full h-[2px] bg-white rounded-lg ${
          open ? "opacity-0 transition-transform" : "transition-transform"
        }`}
      ></span>
      <span
        className={`w-full h-[2px] bg-white rounded-lg ${
          open
            ? "origin-left -rotate-45 -translate-y-[0.5px] translate-x-[4px] transition-transform"
            : "transition-transform"
        }`}
      ></span>
    </div>
  );
}

export default Hamburger;
