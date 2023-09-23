import React from "react";
import { clash_display } from "../fonts";
import Image from "next/image";
import Button from "../components/Button";
import Blur from "../components/Blur";

const Privacy = () => {
  const policy = [
    {
      text: "The Standard License grants you a non-exclusive right to navigate and register for our event",
    },
    {
      text: "You are licensed to use the item available at any free source sites, for your project developement",
    },
  ];
  return (
    <div id="privacy" className="top-wrapper relative ">
      <div className="absolute bottom-[210px] left-[-140px]">
        <Blur />
      </div>
      <div className="inner-wrapper lg:px-[60px]">
        <div className="theme-flex">
          <div className=" lg:w-[43%] w-[88%] text-center md:text-start">
            {" "}
            <div className="relative">
              <Image
                src="/images/gray_star.png"
                alt="Sample Image"
                width={20}
                height={20}
                className="absolute w-[14px]  lg:w-[16px] right-[220px] top-[10px] lg:top-[-10px]"
              />
              <h4
                className={`${clash_display.className} mt-[60px] text-[20px] md:text-[32px] font-bold`}
              >
                Privacy Policy and <br />{" "}
                <span className="text-themepurple">Terms</span>
              </h4>
            </div>
            <p className="mt-[17px] text-[14px] font-light text-gray-300">
              Last updated on September 12, 2023
            </p>
            <p className="paragraph mt-[30px]">
              Below are our privacy & policy, which outline a lot of goodies.
              it’s our aim to always take of our participant
            </p>
            <div className=" relative px-[20px] sm:px-[72px] mb-[40px] lg:mb-[0px] mt-[69px] py-[59px] border border-themepurple darkbg">
              <Image
                src="/images/purplestar.png"
                alt="Sample Image"
                width={20}
                height={20}
                className="absolute w-[14px]  lg:w-[16px] left-[-60px] bottom-[10px] lg:bottom-[210px]"
              />

              <p className="paragraph ">
                At getlinked tech Hackathon 1.0, we value your privacy and are
                committed to protecting your personal information. This Privacy
                Policy outlines how we collect, use, disclose, and safeguard
                your data when you participate in our tech hackathon event. By
                participating in our event, you consent to the practices
                described in this policy.
              </p>
              <h6 className="text-themepurple mt-[24px] font-bold text-[16px]">
                Licensing Policy
              </h6>
              <p className="text-[14px] mt-1 font-bold">
                Here are terms of our Standard License:
              </p>
              <div>
                {policy.map(({ text }, i) => (
                  <div
                    className="flex gap-4 mt-[18px] justify-between items-start"
                    key={i}
                  >
                    <div className="">
                      <Image
                        src="/images/check.png"
                        alt="Sample Image"
                        width={30}
                        height={30}
                        className=" object-cover mt-[10px] w-[36px] md:w-[30px] "
                      />{" "}
                    </div>
                    <p className="text-[14px] leading-[30px]">{text}</p>
                  </div>
                ))}
              </div>
              <div className="flex w-full justify-center mt-[40px]">
                <Button text="Read More" />
              </div>
            </div>
          </div>
          <div className="">
            <Image
              src="/images/lock.png"
              alt="Sample Image"
              width={582}
              height={603}
              className=" object-contain w-[250px] lg:w-[603px]  "
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
