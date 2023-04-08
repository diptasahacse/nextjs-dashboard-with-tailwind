import React from "react";

const DashboardFooter = () => {
  const date = new Date();
  return (
    <footer className="p-4 bg-neutral text-neutral-content sticky bottom-0">
      <div className="text-center">
        <p className="text-center">
          Copyright © {date.getFullYear()} - All right reserved by Dipta
        </p>
      </div>
    </footer>
  );
};

export default DashboardFooter;
