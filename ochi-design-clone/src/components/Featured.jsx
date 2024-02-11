import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Featured = () => {
  let [isHovering1, setHovering1] = useState(false);
  let [isHovering2, setHovering2] = useState(false);

  const hoverImg1 =() => {
    setHovering1(true)
    document.querySelector('#box2').style.display = 'none'
    document.querySelector('#box1').style.display = 'flex'
  }

  const hoverOutImg1 = () => {
    setHovering1(false)
    // document.querySelector('#box2').style.display = 'none'
    setTimeout(() => {
      document.querySelector('#box1').style.display = 'none'
    }, 1000);
  }

  const hoverOutImg2 = () => {
    setHovering2(false)
    // document.querySelector('#box2').style.display = 'none'
    // document.querySelector('#box1').style.display = 'none'
    setTimeout(() => {
      document.querySelector('#box2').style.display = 'none'
    }, 1000);
  }

  const hoverImg2 = () => {
    setHovering2(true)
    document.querySelector('#box1').style.display = 'none'
    document.querySelector('#box2').style.display = 'flex'
  }
  return (
    <div className="w-full py-10">
      <div className="w-full px-10 border-b-[2px] pb-10 border-zinc-700">
        <h1 className="text-6xl tracking-tighter">Featured Projects</h1>
        <div className="border-b-[2px] pb-10 border-zinc-700"></div>
        <div className="cards flex gap-7 mt-10 relative">
          <h1 className="uppercase mb-5 text-lg mr-[-80px]">Fyde</h1>
          <div className="cardContainer w-1/2 h-[60vh] rounded-lg mt-10">
            <div
              onMouseEnter={() => hoverImg1()}
              onMouseLeave={() => hoverOutImg1()}
              className="card w-full h-full bg-[url('https://images.unsplash.com/photo-1502163140606-888448ae8cfe?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] rounded-lg hover:scale-95 transition all ease duration-[0.5s] overflow-hidden bg-cover bg-center"
            ></div>
          </div>
          <h1 id="box1" className="absolute top-1/2 left-[48%] z-50 -translate-x-1/2 -translate-y-1/2 text-5xl text-red-500 flex justify-center items-center">
            {"FYDE".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={isHovering1 ? { y: "0" } : { y: "100%" }}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                key={index}
                // style={isHovering1 ? {display: "block"} : {display: "hidden"}}
              >
                {item}
              </motion.span>
            ))}
          </h1>

          <h1 className="uppercase mr-[-80px] text-lg">Wise</h1>
          <div className="cardContainer w-1/2 h-[60vh] mt-10 rounded-lg">
            <div
              onMouseEnter={() => hoverImg2()}
              onMouseLeave={() => hoverOutImg2()}
              className="card w-full h-full bg-[url('https://images.unsplash.com/photo-1502323777036-f29e3972d82f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center rounded-lg hover:scale-95 transition all ease duration-[0.5s] overflow-hidden"
            ></div>
            <h1 id="box2" className="absolute top-1/2 left-[48%] z-50 -translate-x-1/2 -translate-y-1/2 text-5xl text-red-500 flex justify-center items-center">
            {"WISE".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={isHovering2 ? { y: "0" } : { y: "100%" }}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .06 }}
                // style={isHovering2 ? {display: "block"} : {display: "hidden"}}
                key={index}
                
              >
                {item}
              </motion.span>
            ))}
          </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
