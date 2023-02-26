import React, { Fragment } from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[#f2f2f2] text-base text-[#bdc3c7] border-solid border-[3px] border-t border-[#1c57a5] w-full px-4 mb-[1px]"></div>
      <div className="bg-[#00acec] text-white flex justify-between items-center h-16 px-4">
        <div className="flex gap-4 leading-[15px] ">
          <div>
            <i className="fa-regular fa-bookmark text-[#bdc3c7] mr-2 text-xl"></i>
            <span className="text-[15px]">https://helpdesk.ctu.edu.vn</span>
          </div>
          <div>
            <i className="fa-regular fa-envelope text-[#bdc3c7] mr-2 text-xl"></i>
            <span className="text-[15px]">helpdesk@ctu.edu.vn</span>
          </div>
        </div>
        <div className="text-xl gap-3 flex">
          <span>
            <i className="fa-brands fa-facebook border bg-white text-[#00acec] p-0.5 rounded"></i>
          </span>
          <span>
            <i className="fa-brands fa-instagram border bg-white text-[#00acec] p-0.5 rounded"></i>
          </span>
          <span>
            <i className="fa-brands fa-youtube border bg-white text-[#00acec] p-0.5 rounded"></i>
          </span>
          <span>
            <i className="fa-brands fa-linkedin border bg-white text-[#00acec] p-0.5 rounded"></i>
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
