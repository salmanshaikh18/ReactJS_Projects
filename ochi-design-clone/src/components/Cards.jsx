import React from "react";

const Cards = () => {
  return (
    <div className="w-full h-screen bg-zinc-100 flex justify-center items-center h-90vh gap-4">
      <div className="bg-[#004D43] h-[60%] w-[50%] rounded-lg relative">
        <h1 className="text-[#CDEA68] text-7xl font-semibold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          ochi
        </h1>
        <h2 className="text-[#CDEA68] rounded-full px-2 py-1 border-[1px] border-[#CDEA68] absolute bottom-6 left-6">
          &copy;2019-2022
        </h2>
      </div>
      <div className="bg-zinc-900 h-[60%] w-1/5 rounded-lg relative">
        <img
          src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          alt=""
        />
        <button className="uppercase border-[1px] rounded-full text-sm tracking-tighter px-2 py-1 absolute bottom-6 left-6">Rating 5.0 on clutch</button>
      </div>

      <div className="bg-[#212121] h-[60%] w-1/5 rounded-lg relative">
        <img
          src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
          className="absolute top-[50%]  h-[20vh] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          alt=""
        />
        <button className="uppercase border-[1px] rounded-full text-sm tracking-tighter px-2 py-1 absolute bottom-6 left-6">Business Bootcamp Alumini</button>
      </div>
      
    </div>
  );
};

export default Cards;
