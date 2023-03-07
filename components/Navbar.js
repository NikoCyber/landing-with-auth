'use client'
import { useState } from 'react'
import { MenuIcon, XIcon } from './Icons'
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll'

const menuItems = [
  { title: 'Home', redTo: 'home' },
  { title: 'About', redTo: 'about' },
  { title: 'Support', redTo: 'test1' },
  { title: 'Platform', redTo: 'test1' },
  { title: 'Pricing', redTo: 'test1' },
]

export default function Navbar() {
  const [show, setShow] = useState(false)
  return (
    <div className="w-screen h-[80px] bg-zinc-200 fixed drop-shadow-md">
      <div className="px-2 flex items-center w-full h-full justify-between">
        {/* <div className="flex items-center "> */}
        <h1 className="text-3xl font-bold sm:text-4xl">BRAND.</h1>
        <ul className="hidden md:flex">
          {menuItems.map((i) => (
            <li key={i.title} className="cursor-pointer">
              <Link to={i.redTo} smooth={true} offset={50} duration={500}>
                {i.title}
              </Link>
            </li>
          ))}
        </ul>
        {/* </div> */}
        <div className="pr-4 hidden md:flex">
          <button className="p-4">Sign In</button>
          <button
            className="p-4 bg-indigo-600 text-white border border-indigo-600 hover:bg-transparent 
          hover:text-indigo-600 rounded-md"
          >
            Sign Up
          </button>
        </div>
        <div
          className="md:hidden p-4 hover:scale-110"
          onClick={() => setShow(!show)}
        >
          {!show ? <MenuIcon /> : <XIcon />}
        </div>
      </div>
      {show && (
        <ul className="bg-zinc-200 md:hidden absolute w-full px-8">
          <li className="border-b-2 border-zinc-300">
            <Link
              onClick={() => setShow(!show)}
              to="home"
              smooth={true}
              offset={50}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="border-b-2 border-zinc-300">
            <Link
              onClick={() => setShow(!show)}
              to="about"
              smooth={true}
              offset={50}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="border-b-2 border-zinc-300">Support</li>
          <li className="border-b-2 border-zinc-300">Platform</li>
          <li>Pricing</li>
          <div className="flex flex-col my-4">
            <button className="p-4 border border-indigo-600 text-indigo-600 rounded-md mb-4">
              Sign In
            </button>
            <button
              className="p-4 bg-indigo-600 text-white border border-indigo-600 hover:bg-transparent 
          hover:text-indigo-600 rounded-md"
            >
              Sign Up
            </button>
          </div>
        </ul>
      )}
    </div>
  )
}
