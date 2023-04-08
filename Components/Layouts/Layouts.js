import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useRouter } from "next/router";
import Sidebar from "../Dashboard/Layouts/Sidebar";
import Content from "../Dashboard/Layouts/Content";

const Layouts = ({ children }) => {
  const router = useRouter();
  console.log(router.asPath.split("/")[1]);
  return (
    <>
      {/* {router.asPath.split("/")[1] === "dashboard" && (
        <div>
          <Sidebar />
          <Content>{children}</Content>
        </div>
      )} */}
      <div>
          <Navbar />
          <div>{children}</div>
          <Footer />
        </div>
    </>
  );
};

export default Layouts;
