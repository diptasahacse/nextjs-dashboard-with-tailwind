import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useRouter } from "next/router";

const Layouts = ({ children }) => {
  const router = useRouter();
  console.log(router.asPath.split("/")[1]);
  return (
    <div>
      {router.asPath.split("/")[1] === "dashboard" || <Navbar />}
      <div>{children}</div>

      {router.asPath.split("/")[1] === "dashboard" || <Footer />}
    </div>
  );
};

export default Layouts;
