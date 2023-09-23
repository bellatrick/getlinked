"use client"
import React, { useState } from "react";
type Props = {
  question: string;
  answer: string; // Add a prop for the answer text
};

const FAQ = ({ question, answer }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className="flex mt-[25px] items-end md:items-center justify-between cursor-pointer"
        onClick={toggleAnswer}
      >
        <p className="text-start">{question}</p>
        <p className="text-themepurple text-[20px]">
          {isOpen ? "-" : "+"}
        </p>
      </div>
      <div className={`w-full h-[1px] bg-themepurple mt-[13px]`} />
      <div
        className={`mt-2 transition-all duration-300 ${
          isOpen ? "opacity-100 max-h-[1000px]" : "opacity-0 max-h-0"
        } overflow-hidden`}
      >
        <p className="text-start">{answer}</p>
      </div>
    </div>
  );
};

export default FAQ;
