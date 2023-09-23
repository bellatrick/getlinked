import React from "react";

type props = {
  opacity?: string;
};
const Blur = ({ opacity }: props) => {
  return (
    <div
      className={`${
         opacity  || "opacity-30"
      } absolute blur-[80px]  w-[250px] h-[340px] top-[-60px] left-[30px]  lg:left-[160px]  bg-themepurple`}
    ></div>
  );
};

export default Blur;
