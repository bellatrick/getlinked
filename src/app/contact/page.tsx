"use client";
import React, { useState } from "react";
import Header from "../template/Header";
import Image from "next/image";
import CustomInput from "../components/CustomInput";
import Textarea from "../components/Textarea";
import Button from "../components/Button";
import { clash_display } from "../fonts";
import Blur from "../components/Blur";
import Modal from "../components/Modal";
import Link from "next/link";
import Form from "./Form";

const page = () => {
  return (
    <div className="h-screen max-w-screen overflow-x-hidden bg-body">
      <Header form={true} />
      <div className="text-white px-1 md:px-[80px] mt-16 pb-4 md:pb-16  lg:mt-[128px] ">
        <Link href={"/"}>
          <div className="flex transition-all cursor-pointer px-8 self-start justify-start">
            <Image
              src="/images/back.png"
              alt="Sample Image"
              width={23}
              height={23}
              className="oject-cover block md:hidden"
            />
          </div>
        </Link>
        <div className=" flex items-center flex-col justify-center w-full mx-auto mt-4">
          <div className="flex flex-col-reverse gap-[50px] lg:gap-[225px] lg:flex-row">
            <div className="flex flex-col gap-[17px] relative">
              <div className="absolute hidden md:block top-[120px]  md:top-[40px] left-[-325px]">
                <Blur opacity={"opacity-30"} />
              </div>
              <Image
                src="/images/pinkstar.png"
                alt="Sample Image"
                width={20}
                height={20}
                className="absolute animate-blink w-[14px] top-[-64px]  lg:w-[16px] left-[80px] "
              />
              <div className="hidden md:flex flex-col gap-[17px]">
                <h4
                  className={`${clash_display.className} text-themepurple text-[32px] font-[600]`}
                >
                  Get in touch
                </h4>
                <p className="paragraph">
                  Contact <br />
                  Information
                </p>
                <p className=" paragraph">
                  27,Alara Street
                  <br /> Yaba 100012
                  <br /> Lagos State
                </p>
                <p className="paragraph">Call Us : 07067981819</p>
                <p className="paragraph">
                  we are open from Monday-Friday
                  <br /> 08:00am - 05:00pm
                </p>
              </div>
              <div className="flex md:block items-center w-full flex-col justify-center">
                <p className="md:text-[16px] text-[12px] text-themepurple">
                  Share on
                </p>
                <div className="flex mt-1 gap-[19px] items-center">
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
            </div>
            <div className="darkbackdrop relative md:shadow rounded-[12px] w-full lg:w-[617px] py-8 md:py-[75px] px-[12px] lg:px-[92px]">
              <Image
                src="/images/purplestar.png"
                alt="Sample Image"
                width={20}
                height={20}
                className="absolute animate-blink w-[14px] bottom-[84px]  lg:w-[24px] left-[-8px] "
              />
              <Image
                src="/images/gray_star.png"
                alt="Sample Image"
                width={20}
                height={20}
                className="absolute animate-blink w-[14px] top-[-84px]  lg:w-[20px] right-[18px] "
              />
              <Image
                src="/images/white_star.png"
                alt="Sample Image"
                width={20}
                height={20}
                className="absolute animate-blink w-[14px] bottom-[-54px]  lg:w-[20px] right-[-18px] "
              />
              <div className="absolute hidden md:block  bottom-[200px] right-[205px]">
                <Blur opacity={"opacity-30"} />
              </div>
              <h6
                className={`${clash_display} text-themepurple text-[20px] font-bold mb-[34px]`}
              >
                Questions or need assistance?
                <br /> Let us know about it!
              </h6>
              <h6></h6>
              <Form />
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default page;
