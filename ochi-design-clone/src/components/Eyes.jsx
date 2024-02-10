import React, { useEffect, useState } from "react";

const Eyes = () => {
    const [rotate, setRotate] = useState(0)
    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            let clientX = e.clientX
            let clientY = e.clientY

            // delta means difference
            
            let deltaX = clientX - window.innerWidth / 2  // it give a distance of center to cursor
            let deltaY = clientY - window.innerHeight / 2  // it give a distance of center to cursor

            // Math.atan2(y, x) : Returns the angle (in radians) from the X axis to a point.
            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)

            setRotate(angle - 180)

            console.log(deltaX, deltaY)
        })
    }, [])
  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div className='relative w-full h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] bg-cover bg-center'>
        <div className="absolute flex gap-10 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <div className="flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-200 rounded-full">
            <div className="flex justify-center items-center w-2/3 h-2/3 bg-zinc-900 rounded-full">
              <div className="w-full h-5" style={{transform: `rotate(${rotate}deg)`}}>
                <div className="w-7 h-7 bg-zinc-200 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center w-[15vw] h-[15vw] bg-zinc-200 rounded-full">
            <div className="flex justify-center items-center w-2/3 h-2/3 bg-zinc-900 rounded-full">
              <div className={`w-full h-5 `} style={{transform: `rotate(${rotate}deg)`}}>
                <div className="w-7 h-7 bg-zinc-200 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
