import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";

const DashboardLayout = ({ children }) => {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <div id="dashboard" className='flex h-screen overflow-hidden'>
        <Sidebar open={open} setOpen={setOpen} />
        <Content open={open} setOpen={setOpen}>{children}</Content>
      </div>
    </div>
  );
};

export default DashboardLayout;
