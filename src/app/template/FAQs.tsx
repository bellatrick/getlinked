import Image from "next/image";
import React from "react";
import { clash_display } from "../fonts";

const FAQs = () => {
  const questions = [
    { question: "Can I work on a project I started before the hackathon?" },
    { question: "What happens if I need help during the hackathon?" },
    { question: "What happens if I don't have an idea for a project?" },
    { question: "Can I join a team or do I have to come with one?" },
    { question: "What happens after the hackathon ends" },
    { question: "Can I work on a project I started before the hackathon?" },
  ];
  return (
    <div id="faq" className="top-wrapper">
      <div className="inner-wrapper px-6 sm:px-[80px]">
        <div className="flex flex-col lg:flex-row w-full items-center justify-center lg:items-start gap-[10px] lg:gap-[60px]">
          <div className="lg:w-[44%] px-4 mx-auto lg:text-start text-center w-[80%] md:mt-1">
          <div className="relative">
          <h4
              className={`${clash_display.className} text-[20px] md:text-[32px] font-bold`}
            >
              Frequently Ask <br />{" "}
              <span className="text-themepurple">Question</span>
            </h4>
            <Image
            src="/images/purplestar.png"
            alt="Sample Image"
            width={20}
            height={20}
            className="absolute object-contain w-[14px]  lg:w-[20px] left-[-14px] top-[-20px] lg:top-[-23px]"
          />
          </div>
            <p className="paragraph">
              We got answers to the questions that you might want to ask about
              <span className="font-semibold">getlinked Hackathon 1.0</span>
            </p>
            <div className="mt-[86px]">
              {questions.map(({ question }, i) => (
                <div className="" key={i}>
                  <div className="flex mt-[25px] items-end md:items-center justify-between">
                    {" "}
                    <p className="text-start">{question}</p>
                    <p className="text-themepurple text-[20px]">+</p>
                  </div>
                  <div className="w-full h-[1px] bg-themepurple mt-[13px]" />
                </div>
              ))}
            </div>
          </div>
          <div className="self-center mt-[50px] md:mt-[0px]">
            <Image
              src="/images/questions.png"
              alt="Sample Image"
              width={602}
              height={633}
              className=" object-contain md:w-[602px] w-[350px] "
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
