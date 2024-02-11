import React from 'react'

const About = () => {
  return (
    <div className='w-full px-10 py-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='text-5xl w-[80vw] text-zinc-800'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className='w-full border-t-[2px] border-[#738d15] mt-20 flex gap-5'>
            <div className='w-1/2 mt-5'>
                <h1 className='text-6xl mb-3 text-zinc-800'>Our approach:</h1>
                <button className='flex justify-center items-center gap-5 px-5 py-4 bg-zinc-800 rounded-full text-white'>Read More
                    <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                </button>
            </div>
            <div className='w-1/2 mt-5 h-[70vh] bg-green-500 rounded-xl overflow-hidden'>
                <img className='w-full h-full' src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About