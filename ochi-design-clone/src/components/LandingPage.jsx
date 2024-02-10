import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const LandingPage = () => {
  return (
    <div className="w-full h-screen pt-1 overflow-hidden">
      <div className="textStructure mt-[180px]">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => (
          <div className="masker">
            <div className="w-fit flex justify-center items-center">
              {index === 1 && (
                <div className="w-[130px] rounded h-[5vw] mt-0.5 bg-red-500 ml-12 mr-[-30px]"></div>
              )}
              <h1 className="uppercase flex items-center h-full text-[7vw] px-10 leading-[6vw] tracking-tighter font-semibold" key="index">{item}</h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-2 border-zinc-800 mt-[110px] flex justify-between items-center py-5 px-10">
        {[
          "For Public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-1.5">
          <div className="px-4 py-2 border-[1px] border-zinc-500 rounded-full">
            Start the project
          </div>
          <div className="rounded-full flex items-center justify-center w-10 h-10 border-[1px] border-zinc-500">
            <GoArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
