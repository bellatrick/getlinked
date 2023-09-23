import React from "react";
import Point from "./Point";

type props = {
  details: {
    left: { title: string; details: string | null };
    right: { title: string; details: string | null };
    number: number;
  };
};
const PointDetails = ({ details }: props) => {
  const { left, right } = details;
  return (
    <div>
      <div className="md:grid grid-cols-2  hidden items-end  sm:grid-cols-5 mt-[20px]">
        <div className=" flex flex-col self-end text-right col-span-2 ">
          <p className="subheading">{left.title}</p>

          <div className="">
            {left.details && <p className="paragraph ">{left.details}</p>}
          </div>
        </div>
        <div className="px-[100px]">
          <Point text={`${details.number}`} />
        </div>
        <div className="self-end col-span-2">
          <p className="subheading">{right.title}</p>
          <div>
            {right.details && <p className="paragraph">{right.details}</p>}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 mt-[40px] w-full md:hidden ">
        <div className="row-start-1 px-[15px] sm:px-[100px] flex flex-col items-center gap-1 self-stretch row-end-3">
          <div className="bg-themepurple h-[calc(100%-29px)] w-[2px]"></div>
          <div className="bg-themepurple text-[12px] font-bold flex justify-center items-center h-[22px] w-[22px] rounded-full">
            {details.number}
          </div>
        </div>
        <div className="col-span-4 row-start-1 row-end-3">
          <p className="text-[12px] md:text-[24px] text-themepurple font-bold ">
            {left.title}
          </p>

          {left.details && <p className="paragraph">{left.details}</p>}
          <div className="">
            <p className="text-[12px] md:text-[24px] text-themepurple font-bold ">
              {right.title}
            </p>
            {right.details && <p className="paragraph">{right.details}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointDetails;
