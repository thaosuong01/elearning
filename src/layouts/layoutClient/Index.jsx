import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Index = () => {
  return (
    <Fragment>
      <div className="relative z-10 overflow-y-auto w-[90%] my-0 mx-auto pt-[25px]">
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
      <div className="fixed inset-0 bg_client z-0"></div>
    </Fragment>
  );
};

export default Index;
