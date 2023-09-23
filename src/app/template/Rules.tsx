/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { clash_display } from "../fonts";
import Image from "next/image";
import Blur from "../components/Blur";

const Rules = () => {
  return (
    <div
      id="rules"
      className="border-t  border-[#FFFFFF2E] py-4 md:py-1 h-fit mx-auto px-[40px] lg:px-0 text-white"
    >
      <div className="max-w-screen-xl flex items-center flex-col justify-center w-full mx-auto">
        <div className="flex flex-col-reverse md:flex-row w-full justify-center items-center gap-[20px] lg:gap-[60px]">
          <div className="md:w-[39%] relative md:text-start text-center w-[90%] md:mt-1">
            <div className="absolute  bottom-[200px] left-[-120px]">
              <Blur opacity={"opacity-30"} />
            </div>
            <Image
              src="/images/gray_star.png"
              alt="Sample Image"
              width={20}
              height={20}
              className="absolute object-contain w-[14px]  lg:w-[20px] left-[250px] top-[-40px] lg:top-[-20px]"
            />
            <Image
              src="/images/white_star.png"
              alt="Sample Image"
              width={20}
              height={20}
              className="absolute object-contain w-[14px]  lg:w-[20px] right-[-30px]  lg:bottom-[-30px]"
            />
            <h5
              className={`${clash_display.className} text-[20px] md:text-[32px] font-bold`}
            >
              Rules and <br />
              <span className="text-themepurple">Guidelines</span>
            </h5>
            <p className="leading-[27.5px] pt-[16px] text-[13px] md:text-[14px] font-light">
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </p>
          </div>
          <div className="relative">
          <div className="absolute  bottom-[190px] right-[90px]">
              <Blur opacity={"opacity-30"} />
            </div>
            <Image
              src="/images/woman1.png"
              alt="Sample Image"
              width={464}
              height={464}
              className="hidden md:block object-cover"
            />{" "}
            <Image
              src="/images/woman.png"
              alt="Sample Image"
              width={294}
              height={282}
              className="md:hidden block object-cover"
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
