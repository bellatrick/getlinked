import React from "react";

type props = {
  text: string;
  loading?: boolean;
  active?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
};
const Button = ({ text, loading, active, className, type }: props) => {
  return (
    <button
      type={type ? type : "button"}
      disabled={loading}
      className={`${className} ${
        active
          ? "bgradient"
          : "text-white bg-gradient-to-r to-[#903AFF] via-[#D434FE] from-[#FF26B9]"
      } px-[52px] border-gradient cursor-pointer py-[16px] focus:outline-none appearance-none  font-normal text-[16px] text-center  transition-all hover:to-transparent hover:from-transparent duration-400  ease-in-out rounded-[4px]`}
    >
      {!loading ? (
        text
      ) : (
        <p className="animate-pulse text-lg font-extrabold tgradient">...</p>
      )}
    </button>
  );
};

export default Button;
