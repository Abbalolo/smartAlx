import { FaLinkedinIn } from "react-icons/fa"; 
import { AiOutlineInstagram } from "react-icons/ai"; 
import { AiOutlineTwitter } from "react-icons/ai"; 
import { GrFacebookOption } from "react-icons/gr"; 
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "../asset/logo.png"
function Footer() {
  return (
    <footer className=' bg-[#493E81] text-white py-10 px-5 flex flex-col items-center justify-center'>
        <div className="flex flex-col gap-5 items-center justify-center mt-10 mb-20 md:w-[50%]">
        <h2 className=" text-center  text-3xl md:text-4xl  font-bold">
ARE YOU READY TO START?
        </h2>
        <p className="text-center">Here, we embark on a journey to uncover the complexities of subjects ranging from thedepths of science and technology to the boundless realms of art and culture.</p>
        <div className="flex items-center justify-center"><button className="text-[#493E81] bg-white px-3 py-2 rounded-md font-semibold shadow-md">
            Get Started For Free
          </button>
          
          
          </div>
          </div>

<div className="flex flex-col md:flex-row  md:justify-between gap-5 font-semibold">

    <div className="flex flex-col gap-3 lg:w-[30%]">
    <Link href="/">
        <Image
         src={logo}
        className="w-40 "
          alt="logo image" />
      </Link>
      <p>Analytics everywhere platform for your business needs, seamlessly empowering insights.</p>
      <div className="flex gap-3">
        <p className='w-7 items-center justify-center h-7 rounded-md flex  bg-slate-500'>
            <GrFacebookOption />
        </p>
        <p className='w-7 items-center justify-center h-7 rounded-md flex  bg-slate-500'>
           <AiOutlineTwitter />
        </p>
        <p className='w-7 items-center justify-center h-7 rounded-md flex  bg-slate-500'>
            <AiOutlineInstagram />
        </p>
        <p className='w-7 items-center justify-center h-7 rounded-md flex  bg-slate-500'>
          <FaLinkedinIn />
        </p>
      </div>
      <p className="text-sm">All rights reserved by LohDev</p>
    
    </div>


    <div className="md:px-5">
        <h3 className="font-bold my-2">RESOURCES</h3>

       <ul className="text-sm font-semibold flex flex-col gap-1">
        <li><Link href={"#"}>
            Pricing
        </Link></li>
        <li><Link href={"#"}>
            Support
        </Link></li>
        <li><Link href={"#"}>
            Our Data
        </Link></li>
        <li><Link href={"#"}>
            Free Tools
        </Link></li>
        <li><Link href={"#"}>
            Data Community
        </Link></li>
        </ul>
    </div>

    <div className="md:px-5">
        <h3 className="font-bold my-2">Use CASES</h3>

       <ul  className="text-sm font-semibold flex flex-col gap-1">
        <li><Link href={"#"}>
            COnversion Track
        </Link></li>
        <li><Link href={"#"}>
            Data Enrichment
        </Link></li>
        <li><Link href={"#"}>
            Lead Scoring
        </Link></li>
        <li><Link href={"#"}>
            Personilazation
        </Link></li>
       
        </ul>

       


    </div>

    <div className="md:px-5">
        <h3 className="font-bold my-2">LEGAL</h3>

       <ul  className="text-sm font-semibold flex flex-col gap-1">
        <li><Link href={"#"}>
            Help Center
        </Link></li>
        <li><Link href={"#"}>
            Data-Sheet
        </Link></li>
        <li><Link href={"#"}>
            Terms Of USe
        </Link></li>
        <li><Link href={"#"}>
            Privacy Policy
        </Link></li>
        
        </ul>
    </div>



</div>

    </footer>
  )
}

export default Footer