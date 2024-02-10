import React from "react";

const Featured = () => {
  return (
    <div className="w-full py-10">
      <div className="w-full px-10 border-b-[2px] pb-10 border-zinc-700">
        <h1 className="text-6xl tracking-tighter">Featured Projects</h1>
        <div className="border-b-[2px] pb-10 border-zinc-700"></div>
        <div className="cards flex gap-7 mt-10">
          <h1 className="uppercase mb-5 text-lg mr-[-80px]">Fyde</h1>
          <div className="cardContainer w-1/2 h-[60vh] rounded-lg mt-10">
            <div className="card w-full h-full bg-[url('https://images.unsplash.com/photo-1502163140606-888448ae8cfe?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] rounded-lg hover:scale-95 transition all ease duration-[0.5s] overflow-hidden bg-cover bg-center"></div>
          </div>
          <h1 className="uppercase mr-[-80px] text-lg">Wise</h1>
          <div className="cardContainer w-1/2 h-[60vh] mt-10 rounded-lg">
            <div className="card w-full h-full bg-[url('https://images.unsplash.com/photo-1502323777036-f29e3972d82f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center rounded-lg hover:scale-95 transition all ease duration-[0.5s] overflow-hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
