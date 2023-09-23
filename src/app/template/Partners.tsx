import React from "react";
import { clash_display } from "../fonts";
import Image from "next/image";
import Blur from "../components/Blur";

const Partners = () => {
  return (
    <div id="partners" className="top-wrapper relative">
      <div className="absolute top-[60px] left-[-140px]">
        <Blur />
      </div>

      <div className="inner-wrapper">
        <div className="text-center mb-[40px]">
          <p className={`${clash_display.className} font-bold text-[32px]`}>
            Partners and Sponsors
          </p>
          <p className="text-[14px] font-normal w-[40ch] mt-[12px]">
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </div>

        <div className="max-w-[1255px] darkbg py-[50px] lg:py-[144px] px-[60px] lg:px-[100px] xl:px-[200px] border border-themepurple">
          <div className="relative flex justify-center gap-[30px] lg:gap-[40px]  items-center">
            <Image
              src="/images/purplestar.png"
              alt="Sample Image"
              width={20}
              height={20}
              className="absolute animate-blink w-[14px] z-[100]  lg:w-[16px] left-[-80px] top-[-40px] lg:top-[-170px]"
            />
            <Image
              src="/images/purplestar.png"
              alt="Sample Image"
              width={20}
              height={20}
              className="absolute w-[14px] z-[100] animate-blink  lg:w-[16px] left-[370px] top-[40px] lg:top-[10px]"
            />
            <Image
              src="/images/white_star.png"
              alt="Sample Image"
              width={20}
              height={20}
              className="absolute w-[14px] animate-blink z-[100]  lg:w-[18px] left-[380px] top-[40px] lg:top-[320px]"
            />
            <div className="absolute bottom-[-20px] right-[-10px]">
              <Blur />
            </div>
            <Image
              src="/images/partner1.png"
              alt="Sample Image"
              width={147}
              height={109}
              className="w-[65px] md:w-[80px] lg:w-[147px]  object-contain"
            />{" "}
            <div className="h-[112px] relative w-[2px] lg:w-[4px] bg-themepurple" />
            <Image
              src="/images/partner2.png"
              alt="Sample Image"
              width={213}
              height={40}
              className="w-[65px] md:w-[80px] lg:w-[147px] object-contain "
            />{" "}
            <div className="h-[112px] w-[2px] lg:w-[4px] bg-themepurple" />
            <Image
              src="/images/partner3.png"
              alt="Sample Image"
              width={131}
              height={109}
              className="w-[65px] md:w-[80px] lg:w-[147px] object-contain "
            />
          </div>
          <div className="flex gap-[50px] justify-between lg:gap-[55px] my-[30px]">
            <div className="lg:h-[4px] h-[2px] w-full lg:w-[200px] bg-themepurple" />
            <div className="lg:h-[4px] h-[2px] w-full lg:w-[180px] bg-themepurple" />
            <div className="lg:h-[4px] h-[2px] w-full lg:w-[200px] bg-themepurple" />
          </div>
          <div className="flex justify-center gap-[30px] lg:gap-[40px]  items-center">
            <Image
              src="/images/partner6.png"
              alt="Sample Image"
              width={147}
              height={109}
              className="w-[65px] md:w-[80px] lg:w-[147px]  object-contain"
            />{" "}
            <div className="h-[112px] relative w-[2px] lg:w-[4px] bg-themepurple" />
            <Image
              src="/images/partner5.png"
              alt="Sample Image"
              width={213}
              height={40}
              className="w-[65px] z-[1] md:w-[80px] lg:w-[147px] object-contain "
            />{" "}
            <div className="h-[112px] w-[2px] lg:w-[4px] bg-themepurple" />
            <Image
              src="/images/partner4.png"
              alt="Sample Image"
              width={131}
              height={109}
              className="w-[65px] md:w-[80px] lg:w-[147px] object-contain "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
