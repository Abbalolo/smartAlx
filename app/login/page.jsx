import React from 'react'
import { FaFacebookF } from "react-icons/fa"; 
import { AiFillApple } from "react-icons/ai"; 
import { AiOutlineGoogle } from "react-icons/ai"; 
import Image from "next/image";
import { useMediaQuery } from 'react-responsive';
import authImage from "../asset/authimg.png"
import Link from "next/link";
export default function page() {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });
  const width = isSmallScreen ? 200 : 500;
  return (
    <main className="lg:flex ">
      <div className="lg:w-[100%] flex items-center justify-center bg-[#493E81] p-10">
        <Image src={authImage} width={width} height={500} alt="register background image "/>
      </div>
      <div className="px-5 pb-10 pt-5 lg:px-32 w-full">
        <h2 className='text-[#493E81] text-2xl text-center font-semibold py-5'>Welcome Back</h2>
        
        <form className="flex flex-col gap-3">
         
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className='text-[#493E81] font-semibold'>Email</label>
            <input className='border outline-none border-gray-300 rounded-md  p-2' type="email" id='email' name="email" placeholder='Abbalolo@gmail.com'/>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className='text-[#493E81] font-semibold'>Password</label>
            <input className='border outline-none border-gray-300 rounded-md  p-2' type="password" id='password' name="password" placeholder='***********'/>
          </div>
       

          <button type="submit" className='bg-[#493E81] text-white w-full p-2 rounded-md '>Login Now</button>
        </form>

        <div className="flex items-center text-gray-500 gap-2 my-5 px-5">
          <div className="w-full h-[1px] bg-gray-300"></div>
          Or
          <div className="w-full h-[1px] bg-gray-300"></div>
        </div>

        
<div className=" flex gap-3 items-center justify-center my-5 text-[#493E81] " >
  <div className="border p-2 border-gray-300  rounded-md hover:bg-[#493E81] hover:text-white transition-all duration-300">
    <AiOutlineGoogle className="text-[25px]" />
  </div>

  <div className="border p-2 border-gray-300  rounded-md hover:bg-[#493E81] hover:text-white transition-all duration-300">
    <AiFillApple className="text-[25px]" />
  </div>
  <div className="border p-2 border-gray-300  rounded-md hover:bg-[#493E81] hover:text-white transition-all duration-300">
    <FaFacebookF className="text-[25px]" />
  </div>
</div>

<p className="text-gray-400 text-center">Dont'T have an account? <Link href="/register" className="text-[#493E81] font-semibold">Log in</Link></p>

      </div>
    </main>
  );
}
