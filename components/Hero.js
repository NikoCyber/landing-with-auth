'use client'
import Image from 'next/image'
// import bgImage from '/pages/cyber-bg.png'

export default function Hero() {
  return (
    <div
      name="home"
      className="w-full h-screen bg-zinc-200 flex flex-col justify-between py-32"
    >
      <div className="grid md:grid-cols-2 m-auto max-w-[1240px]">
        <div className="flex flex-col justify-center md:items-start w-full px-2">
          <p className="text-2xl">Unique Sequencing & Production</p>
          <h1 className="py-3 text-5xl md:text-6xl font-bold">
            Cloud Management
          </h1>
          <p className="text-2xl">This is our Tech brand</p>
          <button
            className="py-3 px-6 sm:w-[60%] bg-indigo-500 text-white rounded-md hover:bg-transparent
          border border-indigo-600 hover:text-indigo-600 my-4"
          >
            Get Started
          </button>
        </div>
        <div>
          <img src={'/cyber-bg.png'} alt="" />
        </div>
        {/* <div>
          <p>App Security</p>
          <p>Dash Design</p>
          <p>Cloud Data</p>
          <p>App</p>
        </div> */}
      </div>
    </div>
  )
}
