import React from "react";
import { useState } from "react";

const Sidebar = ({open, setOpen}) => {
  return (
    <div
      id="dashboard-sidebar"
      className={`bg-dark-purple duration-300 h-screen p-5 pt-8 ${
        open ? "w-72" : "w-20"
      } text-white relative`}
    >
      <span
        onClick={() => setOpen(!open)}
        className=" bg-dark-purple hover:cursor-pointer border text-lg flex justify-center items-center p-1 w-8 h-8 rounded-full absolute -right-4 top-7"
      >
        {open ? (
          <i class="ri-arrow-left-line"></i>
        ) : (
          <i class="ri-arrow-right-line"></i>
        )}
      </span>
      Sidebar
    </div>
  );
};

export default Sidebar;
