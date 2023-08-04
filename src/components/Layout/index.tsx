import React, { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/index";
import autoAnimate from "@formkit/auto-animate";

const Layout = () => {
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <div ref={parent}>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
