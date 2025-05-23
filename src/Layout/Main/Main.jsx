import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../../Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
