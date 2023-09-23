"use client";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Header from "../template/Header";
import Image from "next/image";
import CustomInput from "../components/CustomInput";

import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import { clash_display } from "../fonts";
import Blur from "../components/Blur";
import Modal from "../components/Modal";
import Form from "./Form";

const page = () => {
  return (
    <div className=" max-w-screen overflow-x-hidden bg-body pb-[70px]">
      <Header form={true} />
      <div className="text-white px-[30px] lg:px-[80px]   mt-[68px]">
        <div className="max-w-screen-xl flex items-center flex-col justify-center w-full mx-auto mt-4">
          <h6
            className={`${clash_display.className} text-themepurple text-left self-start  md:hidden block text-[18px] pb-8 font-bold`}
          >
            Register
          </h6>
          <div className="flex flex-col lg:flex-row">
            <div className="self-center">
              <div className="relative">
                <div className="absolute top-[120px]  md:top-[40px] left-[-85px]">
                  <Blur opacity={"opacity-30"} />
                </div>
                <Image
                  src="/images/reg.png"
                  alt="Sample Image"
                  width={582}
                  height={603}
                  className=" object-contain hidden md:block w-[723px]  "
                />{" "}
                <Image
                  src="/images/regmobile.png"
                  alt="Sample Image"
                  width={270}
                  height={343}
                  className=" object-cover mt-8 md:hidden block w-[320px]   "
                />{" "}
              </div>
            </div>

            <div className="relative darkbackdrop rounded-[12px] w-full  lg:shadow xl:w-[717px] py-[65px] px-4 lg:px-[42px]">
              <div className="absolute hidden md:block  bottom-[300px] right-[245px]">
                <Blur opacity={"opacity-30"} />
              </div>
              <Image
                src="/images/gray_star.png"
                alt="Sample Image"
                width={20}
                height={20}
                className="absolute animate-blink w-[14px] right-[399px] top-[240px]  lg:w-[16px] lg:right-[80px] lg:top-[5px]"
              />
              <Image
                src="/images/white_star.png"
                alt="Sample Image"
                width={20}
                height={20}
                className="absolute animate-blink w-[14px]  lg:w-[14px] right-[43px] bottom-[-30px] lg:bottom-[-11px]"
              />
              <h6
                className={`${clash_display.className} text-themepurple hidden md:block text-[32px] font-bold`}
              >
                Register
              </h6>
              <div className="flex mt-[46px] gap-2 items-end mb-3">
                <h6 className="text-[14px]">Be part of this movement!</h6>
                <div className="flex flex-col items-center pb-[-70px]">
                  <div className="flex">
                    {" "}
                    <Image
                      src="/images/femaleicon.png"
                      alt="Sample Image"
                      width={26}
                      height={26}
                      className=" object-contain w-[26px]  "
                    />{" "}
                    <Image
                      src="/images/maleicon.png"
                      alt="Sample Image"
                      width={26}
                      height={26}
                      className=" object-contain w-[26px]  "
                    />{" "}
                  </div>
                  <div className="w-[80px] h-1 border-themepurple border-t border-dotted" />
                </div>
              </div>
              <p className="md:text-[24px] text-[20px] font-normal mb-[33px]">
                CREATE YOUR ACCOUNT
              </p>
              <Form />
            </div>
          </div>
        </div>
      </div>
  
    </div>
  );
};

export default page;
