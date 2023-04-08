import React from "react";
import { useState } from "react";

const Sidebar = ({ open, setOpen }) => {
  return (
    <div
      id="dashboard-sidebar"
      className={`bg-dark-purple duration-500   p-5 pt-8 ${
        open ? "w-72" : "w-0 hidden"
      } text-white relative`}
    >
      Sidebar
    </div>
  );
};

export default Sidebar;
