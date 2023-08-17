import React, { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import autoAnimate from "@formkit/auto-animate";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { getProfileAction } from "../../features/auth/asyncActions";

const LayoutWithNavbar = () => {
  const parent = useRef(null);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  useEffect(() => {
    dispatch(getProfileAction());
  }, []);

  return (
    <div ref={parent}>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default LayoutWithNavbar;
