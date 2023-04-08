import React from "react";
import DashboardNav from "./DashboardNav";
import DashboardFooter from "./DashboardFooter";

const Content = ({ children, open, setOpen }) => {
  return (
    <div
      id="dashboard-main-content"
      className="w-full  overflow-x-hidden bg-base-200"
    >
      <div className="h-full">
        <DashboardNav open={open} setOpen={setOpen} />
        <div id="dashboard-content" className="overflow-y-auto bg-base-200">
          <div className="p-4">{children}</div>
        </div>
        <DashboardFooter />
      </div>
    </div>
  );
};

export default Content;
