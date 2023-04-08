import Link from "next/link";
import React from "react";
import itemList from "../../../public/data/dashboard-sidebar.json";

const Sidebar = ({ open, setOpen }) => {
  console.log(itemList);
  return (
    <div
      id="dashboard-sidebar"
      className={`bg-primary overflow-hidden overflow-y-auto duration-500 ${
        open ? "w-72" : "w-20"
      } text-white `}
    >
      <div className="sticky bg-primary p-5 top-0">
        <div className=" inline-flex gap-2 items-center">
          <span className="flex h-7 w-7  text-lg bg-purple-800 rounded-md items-center justify-center">
            <i class="ri-code-fill"></i>
          </span>
          <h3
            className={`font-semibold origin-left duration-300  ${
              !open && "scale-0"
            }`}
          >
            Brand
          </h3>
        </div>
      </div>
      <div className=" p-5">
        <div>
          <ul>
            {itemList.map((item, index) => (
              <li
                className="text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-info rounded-md mt-2"
                key={index}
              >
                <span className="text-2xl block float-left">
                  <i class={item.icon}></i>
                </span>
                <Link
                  className={`text-base font-medium flex-1 ${
                    !open && "hidden"
                  }`}
                  href={`/${item.slug}`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
