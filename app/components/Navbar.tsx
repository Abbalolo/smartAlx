"use client"
import React, { useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../asset/logo.png';

function Navbar() {
  const [toggleCaret, setToggleCaret] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(false);
    setToggleCaret(false);
  };

  return (
    <div className="bg-[#493E81] fixed top-0 left-0 w-full p-5 flex justify-between items-centerc z-50">
      <Link href="/">
        <Image src={logo} className="w-40" alt="logo image" />
      </Link>

      <div className="flex items-center gap-10">
        <nav
          className={
            isOpen
              ? `text-white absolute left-0 top-16 w-full h-screen lg:h-full lg:p-0 p-5 flex flex-col md:flex-row bg-[rgb(73,62,129)] z-50 lg:static transition-all duration-500 ease-in-out`
              : `text-white absolute left-0 top-16 w-full h-screen lg:h-full lg:p-0 p-5 flex-col lg:flex-row hidden lg:flex bg-[#493e81] z-50 lg:static transition-all duration-500 ease-in-out`
          }
        >
          <ul className="flex flex-col lg:flex-row lg:gap-5 gap-5 text-[15px]">
            <li>
              <Link className="font-semibold transition-all duration-300" onClick={handleMenu} href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="font-semibold transition-all duration-300" onClick={handleMenu} href="#about">
                About
              </Link>
            </li>
            <li>
              <Link className="font-semibold transition-all duration-300" onClick={handleMenu} href="#use-cases">
                Use Cases
              </Link>
            </li>
            <li>
              <Link className="font-semibold transition-all duration-300" onClick={handleMenu} href="#testimonial">
                Testimonials
              </Link>
            </li>
            <li>
              <Link className="font-semibold transition-all duration-300" onClick={handleMenu} href="#pricing">
                Pricing
              </Link>
            </li>
            <li className="relative">
              <div className="cursor-pointer flex items-center font-semibold" onClick={() => setToggleCaret(!toggleCaret)}>
                Pages {toggleCaret ? <FaCaretUp /> : <FaCaretDown />}
              </div>
              {toggleCaret && (
                <div className="absolute top-7 lg:-left-10 text-center justify-center shadow-md rounded-md flex flex-col gap-2 text-[#493E81] bg-white w-[180px] px-10 py-5">
                  <Link className="font-semibold" onClick={handleMenu} href="/login">
                    Login
                  </Link>
                  <Link className="font-semibold" onClick={handleMenu} href="/register">
                    Register
                  </Link>
                </div>
              )}
            </li>
            <li>
              <Link className="border ring-1 rounded-sm px-7 py-2 font-semibold" href="#">
                Start for free
              </Link>
            </li>
            
          </ul>
        </nav>

        <button className="text-white text-2xl lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <AiOutlineClose onClick={handleMenu} /> : <BiMenuAltRight />}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
