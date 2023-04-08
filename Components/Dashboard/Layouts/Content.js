import React from "react";
import DashboardNav from "./DashboardNav";
import DashboardFooter from "./DashboardFooter";

const Content = ({ children,open, setOpen }) => {
  return (
    <div id="dashboard-main-content" className="w-full  overflow-x-hidden bg-gray-400">
      <DashboardNav open={open} setOpen={setOpen} />
      <div id="dashboard-content" className="overflow-y-auto p-4">
        {children}
      </div>
      <DashboardFooter />
    </div>
  );
};

export default Content;
