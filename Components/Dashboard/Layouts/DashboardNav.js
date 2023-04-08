import React from "react";

const DashboardNav = ({ open, setOpen }) => {
  return (
    <div className="navbar bg-base-100 sticky top-0">
      <div className="flex-1 items-center">
        <span
          onClick={() => setOpen(!open)}
          className=" bg-primary text-white hover:cursor-pointer border text-lg flex justify-center items-center p-1 w-8 h-8 rounded-full"
        >
          {open ? (
            <i className="ri-arrow-left-line"></i>
          ) : (
            <i className="ri-arrow-right-line"></i>
          )}
        </span>
      </div>
      <div className="flex-none">
        
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/images/user.jpg" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
