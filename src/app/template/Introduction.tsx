/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import { clash_display } from "../fonts";

const Introduction = () => {
  return (
    <div id="introduction" className="top-wrapper text-white">
      <div className="inner-wrapper">
        <div className="flex flex-col md:flex-row w-full justify-center items-center gap-[30px] lg:gap-[106px]">
          <div className="">
            <Image
              src="/images/bigidea.png"
              alt="Sample Image"
              width={482}
              height={493}
              className=" hidden md:block object-contain"
            />{" "}
            <Image
              src="/images/mobilebulb.png"
              alt="Sample Image"
              width={282}
              height={293}
              className=" md:hidden block object-contain"
            />{" "}
          </div>
          <div className="md:w-[40%] text-center md:text-start w-[90%]">
            <div className="inline-flex items-center">
              <h5
                className={`${clash_display.className} text-[20px] md:text-[32px] font-bold`}
              >
                Introduction to getlinked <br />{" "}
                <span className="text-themepurple">tech Hackathon 1.0</span>
              </h5>
              <Image
                src="/images/purplestar.png"
                alt="Sample Image"
                width={18}
                height={19}
                className=" object-contain w-[14px] md:w-[18px] ml-8 md:ml-[60px]"
              />{" "}
            </div>
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
        </div>
      </div>
    </div>
  );
};

export default Introduction;
