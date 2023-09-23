import React from "react";
type props = {
  text: string;
};
const Point = ({ text }: props) => {
  return (
   <div className="flex flex-col items-center gap-1">
    <div className="bg-themepurple max-h-[186px] h-[86px] w-[4px]"></div>
     <div className="bg-themepurple text-[24px] font-bold flex justify-center items-center h-[53px] w-[53px] rounded-full">{text}</div>
   </div>
  );
};

export default Point;
