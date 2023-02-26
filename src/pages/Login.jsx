import React from "react";
import TextField from "@mui/material/TextField";

const Login = () => {
  return (
    <>
      <div className="bg-white py-[10px] px-[20px]">
        <h1 className="text-center text-3xl font-bold text-[#555] leading-10 py-5">
          Welcome to CTU E-learning!
        </h1>
        <div className="flex justify-center items-center flex-col gap-0">
          <form
            action=""
            className="bg-[#eee] w-2/5 flex justify-center flex-col gap-8 items-center p-6"
          >
            <div className="w-full">
              <TextField
                className="w-full bg-white"
                id="demo-helper-text-misaligned-no-helper"
                label="Name"
              />
            </div>
            <div className="w-full">
              <TextField
                className="w-full bg-white"
                id="demo-helper-text-misaligned-no-helper"
                label="Password"
              />
            </div>
            <div className="justify-start flex w-full gap-3 cursor-pointer">
              <input type="checkbox" name="" id="" />
              <span className="text-[#555]">Remember username</span>
            </div>
            <button
              type="submit"
              className="bg-[#1c57a5] w-full text-white text-base px-6 py-2.5 hover:bg-[#00acec]"
            >
              Log in
            </button>
          </form>
          <div className="w-2/5 bg-[#ddd] p-2 cursor-pointer">
            <span className="justify-start flex w-full px-4 text-[#1c57a5] hover:text-[#555]">
              Forgotten your username or password?
            </span>
          </div>
          <div className="w-2/5 pt-4 pb-6 text-[#555] text-base flex gap-1 items-center">
            <span>Cookies must be enabled in your browser</span>
            <i className="fa-regular fa-circle-question"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
