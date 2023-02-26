import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-[#f2f2f2] text-base text-[#bdc3c7] border-solid border-[4px] border-t border-[#1c57a5] w-full px-4"></div>
      <div className="bg-white">
        <div className="py-3 px-5 h-[116px]">
          <div>
            <img
              src="../public/images/client/logo.png"
              alt="logo"
              className="h-[90px]"
            />
          </div>
        </div>
        <div className="text-white bg-[#3a454b]">
          <div className="h-fit ">
            <Link to="/home" className="py-3 px-5 bg-[#1c57a5] w-fit block">
              Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
