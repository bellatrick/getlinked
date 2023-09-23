import Image from "next/image";
import React from "react";
import { clash_display } from "../fonts";
import FAQ from "../components/FAQ";

const FAQs = () => {
  const questions = [
    {
      question: "Can I work on a project I started before the hackathon?",
      answer:
        "Yes, you're allowed to work on pre-existing projects. However, there are often rules regarding how much progress you can have made on the project before the event.",
    },
    {
      question: "What happens if I need help during the hackathon?",
      answer:
        "You can usually seek help from mentors or organizers if you encounter challenges or have questions. There may also be online forums or communication channels where you can connect with other participants for assistance.",
    },
    {
      question: "What happens if I don't have an idea for a project?",
      answer:
        "If you don't have a project idea, don't worry! We facilitate team formation, allowing you to join a team with participants who have project ideas. It's a great opportunity to collaborate and learn from others.",
    },
    {
      question: "Can I join a team or do I have to come with one?",
      answer:
        "Yes. You're allowed to join a team or form one at the event. You don't necessarily have to come with a pre-formed team. Many participants find team formation to be an exciting part of the hackathon experience.",
    },
    {
      question: "What happens after the hackathon ends?",
      answer:
        "After the hackathon concludes, there will be judging and awards ceremonies where projects are evaluated. There will be prizes for winners. Additionally, you can continue working on your project, refine it, and potentially bring it to life beyond the event.",
    },
    {
      question: "Can I work on a project I started before the hackathon?",
      answer: "Yes. You're allowed to work on pre-existing projects.",
    },
  ];

  return (
    <div id="faq" className="top-wrapper">
      <div className="inner-wrapper px-6 sm:px-[80px]">
        <div className="flex flex-col lg:flex-row w-full items-center justify-center lg:items-start gap-[10px] lg:gap-[60px]">
          <div className="lg:w-[44%] px-4 mx-auto lg:text-start text-center w-[86%] md:mt-1">
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
              {questions.map(({ question, answer }, i) => (
                <div className="" key={i}>
                  <FAQ question={question} answer={answer} />
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
