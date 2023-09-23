import React from "react";
import { clash_display } from "../fonts";
import Image from "next/image";

const Footer = () => {
  return (
    <div id="footer" className="top-wrapper relative bg-[#110b22] ">
      <Image
        src="/images/white_star.png"
        alt="Sample Image"
        width={20}
        height={20}
        className="absolute w-[14px]  lg:w-[16px] left-[50px] top-[60px] lg:top-[120px]"
      />
      <div className="inner-wrapper px-[35px] md:px-[100px]">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="lg:w-[38%]">
            <h5 className={`${clash_display.className} text-[30px] font-bold`}>
              get <span className="text-themepurple">linked</span>
            </h5>
            <p className="paragraph mb-[74px]">
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
            <div className="flex gap-3 items-center paragraph">
              <span>Terms of Use</span>{" "}
              <p className="w-[2px] h-[20px] bg-themepurple" />{" "}
              <span> Privacy Policy</span>
            </div>
          </div>
          <div>
            <h6 className="text-[14px] text-themepurple mt-8 lg:mt-[0px] mb-[6px] font-semibold">
              Useful Links
            </h6>
            <p className="text-[12px] mt-[11px]">Overview</p>
            <p className="text-[12px] mt-[11px]">Timeline</p>
            <p className="text-[12px] mt-[11px]">FAQs</p>
            <p className="text-[12px] mt-[11px]">Register</p>
            <div className="flex mt-4 items-center gap-4">
              <p className="text-[12px] text-themepurple font-bold">
                Follow us
              </p>
              <div className="">
                <Image
                  src="/images/insta.png"
                  alt="Sample Image"
                  width={24}
                  height={24}
                  className=" object-cover w-[16px] md:w-[24px] "
                />
              </div>
              <div className="">
                <Image
                  src="/images/x.png"
                  alt="Sample Image"
                  width={19}
                  height={17}
                  className=" object-cover w-[14px] md:w-[19px]"
                />{" "}
              </div>{" "}
              <div className="">
                <Image
                  src="/images/fb.png"
                  alt="Sample Image"
                  width={10}
                  height={20}
                  className=" object-cover w-[9px] md:w-[10px]"
                />{" "}
              </div>{" "}
              <div className="">
                <Image
                  src="/images/link.png"
                  alt="Sample Image"
                  width={24}
                  height={24}
                  className=" object-cover w-[16px] md:w-[24px]"
                />{" "}
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/gray_star.png"
              alt="Sample Image"
              width={20}
              height={20}
              className="absolute w-[14px]  lg:w-[16px] left-[-80px] top-[-40px] lg:top-[30px]"
            />
            <Image
              src="/images/white_star.png"
              alt="Sample Image"
              width={20}
              height={20}
              className="absolute w-[14px]  lg:w-[20px] left-[320px] md:left-[180px] top-[40px] lg:top-[60px]"
            />
            <h6 className="text-[14px] mt-8 lg:mt-[0px] text-themepurple mb-[6px] font-semibold">
              Contact Us
            </h6>
            <div className="flex gap-[16px] mt-[11px]">
              <div className="">
                <Image
                  src="/images/phone.png"
                  alt="Sample Image"
                  width={12}
                  height={12}
                  className=" object-cover "
                />{" "}
              </div>
              <p className="text-[12px]">+234 6707653444</p>
            </div>
            <div className="flex gap-[16px] mt-[11px]">
              <div className="">
                <Image
                  src="/images/locash.png"
                  alt="Sample Image"
                  width={13}
                  height={15}
                  className=" object-cover "
                />{" "}
              </div>
              <p className="text-[12px]">
                27,Alara Street
                <br /> Yaba 100012
                <br /> Lagos State
              </p>
            </div>
          </div>
        </div>
        <div className=" relative lg:mt-[30px] mt-16 text-start flex md:text-center text-[12px]">
          <Image
            src="/images/purplestar.png"
            alt="Sample Image"
            width={20}
            height={20}
            className="absolute w-[14px]  lg:w-[16px] left-[80px] top-[-40px] lg:top-[-30px]"
          />
          <p>All rights reserved. © getlinked Ltd.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
