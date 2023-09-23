"use client";
import React from "react";
import Button from "../components/Button";
import { clash_display, montserrat, unica_one } from "../fonts";
import Image from "next/image";
import Blur from "../components/Blur";
import Timer from "../components/Timer";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative h-fit w-screen-xl mx-auto text-white px-[80px]  "
    >
      <Blur />
      <Image
        src="/images/white_star.png"
        alt="Sample Image"
        width={20}
        height={20}
        className="absolute w-[14px] animate-blink lg:w-[20px] left-[210px] top-[60px] lg:top-[40px]"
      />
      <Image
        src="/images/gray_star.png"
        alt="Sample Image"
        width={12}
        height={12}
        className="absolute  animate-blink lg:hidden w-[12px] left-[480px] top-[64px] "
      />
      <Image
        src="/images/gray_star.png"
        alt="Sample Image"
        width={20}
        height={20}
        className="absolute animate-blink w-[14px] lg:w-[20px] left-[400px] top-[300px] lg:left-[610px] lg:top-[700px]"
      />

      <div className="max-w-screen-xl mx-auto ">
        <div className=" lg:hidden block">
          <div className="flex flex-col w-fit mx-auto ">
            <p className="text-[16px] py-[15px] font-[700] text-center italic">
              Igniting a Revolution in HR Innovation
            </p>
            <svg
              className="self-end -mt-[14px]"
              xmlns="http://www.w3.org/2000/svg"
              width="117"
              height="11"
              viewBox="0 0 117 11"
              fill="none"
            >
              <path
                d="M1 9C20.2424 3.71764 70.7273 -3.67768 116 9"
                stroke="#FF26B9"
                strokeWidth="3"
              />
            </svg>
          </div>
        </div>
        <div
          className={`${montserrat.className} flex lg:block justify-center pt-[48px]  lg:mt-[3px] text-white`}
        >
          <div className="lg:pt-[210px] relative lg:text-start text-center">
            <div
              className={`${clash_display.className} relative lg:leading-[85px] text-[32px] lg:text-[80px] font-bold`}
            >
              <p className="z-[100]">getlinked Tech</p>
              <Image
                src="/images/bulb.png"
                alt="Sample Image"
                width={36}
                height={36}
                className="absolute top-[-16px] lg:top-[-30px] w-[20px] lg:w-[36px] left-[294px] lg:left-[510px]"
              />
              <div className="inline-flex gap-2">
                <p className="">
                  Hackathon <span className="text-themepurple ">1.0</span>
                </p>
                <Image
                  src="/images/chain.png"
                  alt="Sample Image"
                  width={56}
                  height={56}
                  className="object-contain w-[30px] lg:w-[56px]"
                />
                <Image
                  src="/images/pop.png"
                  alt="Sample Image"
                  width={40}
                  height={40}
                  className="object-contain w-[24px] lg:w-[40px]"
                />
              </div>
            </div>
            <p className="lg:text-[20px] text-[13px] mt-[8px] mb-[41px]">
              Participate in getlinked tech Hackathon 2023
              <br /> stand a chance to win a Big prize
            </p>
            <Button text="Register" />
            <Timer />
            <div className="mt-[20px] xl:hidden w-full flex justify-center">
              <Image
                src="/images/mobilehero.png"
                alt="Sample Image"
                width={419}
                height={362}
                className="z-[1] object-cover"
              />
            </div>
          </div>
        </div>

        <div className=" lg:absolute lg:top-[0px] lg:right-0 ">
          <div className="lg:mr-[60px] lg:block hidden">
            <div className="flex flex-col ">
              <p className="lg:text-[36px] pt-[20px] text-[16px] text-center lg:text-end font-[700] italic">
                Igniting a Revolution in HR Innovation
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="255"
                height="17"
                viewBox="0 0 255 17"
                fill="none"
                className=" self-end"
              >
                <path
                  d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043"
                  stroke="#FF26B9"
                  strokeWidth="5"
                />
              </svg>
            </div>
          </div>
          <div className="mt-[-140px] hidden xl:block">
            <Image
              src="/images/heroimage.png"
              alt="Sample Image"
              width={1008}
              height={900}
              className="z-[1] w-[908px] xl:w-[1008px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
