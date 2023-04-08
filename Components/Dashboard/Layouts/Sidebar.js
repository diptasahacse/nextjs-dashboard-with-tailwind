import React from "react";

const Sidebar = ({ open, setOpen }) => {
  return (
    <div
      id="dashboard-sidebar"
      className={`bg-primary duration-500   p-5 pt-8 ${
        open ? "w-72" : "w-20"
      } text-white relative`}
    >
      Sidebar
    </div>
  );
};

export default Sidebar;
