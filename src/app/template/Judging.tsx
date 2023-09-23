import Image from "next/image";
import React from "react";
import { clash_display } from "../fonts";
import Button from "../components/Button";
import Blur from "../components/Blur";

const Judging = () => {
  return (
    <div id="judging" className="top-wrapper px-[20px] lg:px-[80px]">
      <div className="inner-wrapper">
        <div className="flex flex-col-reverse lg:flex-row w-full items-center justify-center lg:items-start gap-[10px] lg:gap-[60px]">
          <div className="self-center relative">
            <div className="absolute  bottom-[200px] left-[-145px]">
              <Blur opacity={"opacity-30"} />
            </div>
            <Image
              src="/images/piechart.png"
              alt="Sample Image"
              width={582}
              height={593}
              className=" object-contain "
            />{" "}
          </div>
          <div className="lg:w-[44%] relative px-4 mx-auto lg:text-start text-center w-[80%] md:mt-1">
            <div className="absolute  bottom-[200px] right-[295px]">
              <Blur opacity={"opacity-30"} />
            </div>
            <h5
              className={`${clash_display.className} text-[20px] md:text-[32px] font-bold`}
            >
              Judging Criteria
              <br />
              <span className="text-themepurple">Key attributes</span>
            </h5>
            <p className="font-medium text-[14px] pt-[22px] leading-[27.76px]">
              <span className="text-themepink text-[16px] font-semibold">
                Innovation and Creativity:
              </span>{" "}
              Evaluate the uniqueness and creativity of the solution. Consider
              whether it addresses a real-world problem in a novel way or
              introduces innovative features.
            </p>
            <p className="font-medium text-[14px] pt-[22px] leading-[27.76px]">
              <span className="text-themepink text-[16px] font-semibold">
                Functionality:
              </span>{" "}
              Assess how well the solution works. Does it perform its intended
              functions effectively and without major issues? Judges would
              consider the completeness and robustness of the solution.
            </p>
            <p className="font-medium text-[14px] pt-[22px] leading-[27.76px]">
              <span className="text-themepink text-[16px] font-semibold">
                Impact and Relevance:
              </span>{" "}
              Determine the potential impact of the solution in the real world.
              Does it address a significant problem, and is it relevant to the
              target audience? Judges would assess the potential social,
              economic, or environmental benefits.
            </p>
            <p className="font-medium text-[14px] pt-[22px] leading-[27.76px]">
              <span className="text-themepink text-[16px] font-semibold">
                Technical Complexity:
              </span>{" "}
              Evaluate the technical sophistication of the solution. Judges
              would consider the complexity of the code, the use of advanced
              technologies or algorithms, and the scalability of the solution.
            </p>
            <p className="font-medium text-[14px] pt-[22px] leading-[27.76px]">
              <span className="text-themepink text-[16px] font-semibold">
                Adherence to Hackathon Rules:
              </span>{" "}
              Judges will Ensure that the team adhered to the rules and
              guidelines of the hackathon, including deadlines, use of specific
              technologies or APIs, and any other competition-specific
              requirements.
            </p>
            <div className="my-[40px]">
              <Button text="Read More" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Judging;
