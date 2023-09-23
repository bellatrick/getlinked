import Image from "next/image";
import React from "react";
import { clash_display } from "../fonts";
import Blur from "../components/Blur";

const Prizes = () => {
  return (
    <div
      id="prizes"
      className="bg-[#110b22] border-t pb-[40px] border-[#FFFFFF2E] h-fit mx-auto text-white px-[20px] lg:px-0"
    >
      <div className="inner-wrapper pb-[50px] px-[70px]">
        <div className="theme-flex-reverse">
          <div className="flex flex-col justify-center items-center">
            <div className="pb-[65px] text-center md:text-start">
              {" "}
              <h4
                className={`${clash_display.className} text-[20px] md:text-[32px] font-bold`}
              >
                Prizes and <br />{" "}
                <span className="text-themepurple">Rewards</span>
              </h4>
              <p className="paragraph">
                Highlight of the prizes or rewards for winners and for
                participants.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/white_star.png"
                alt="Sample Image"
                width={20}
                height={20}
                className="absolute w-[14px]  lg:w-[16px] left-[60px] top-[-40px] lg:top-[0px]"
              />{" "}
              <Image
                src="/images/white_star.png"
                alt="Sample Image"
                width={20}
                height={20}
                className="absolute w-[14px]  lg:w-[16px] right-[-40px] top-[-40px] lg:top-[40px]"
              />{" "}
              <Image
                src="/images/gray_star.png"
                alt="Sample Image"
                width={20}
                height={20}
                className="absolute w-[14px]  lg:w-[16px] left-[350px] bottom-[-40px] lg:bottom-[-30px]"
              />
              <Image
                src="/images/Rewards.png"
                alt="Sample Image"
                width={482}
                height={493}
                className=" object-contain w-[250px] md:w-[522px]"
              />{" "}
              <div className="absolute  bottom-[180px] right-[150px]">
                <Blur opacity={"opacity-20"} />
              </div>
            </div>
          </div>
          <div className="self-center relative">
            <div className="absolute z-[1] top-[160px] left-[-30px]">
              <Blur opacity={"opacity-20"} />
            </div>
            <Image
              src="/images/cup.png"
              alt="Sample Image"
              width={482}
              height={493}
              className=" z-[100] object-contain w-[250px] md:w-[462px] "
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
