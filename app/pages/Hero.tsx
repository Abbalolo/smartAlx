import { AiFillStar } from "react-icons/ai"; 
import { IoMdClose } from "react-icons/io"; 
import { FaCheck } from "react-icons/fa"; 
import { TbWorldWww } from "react-icons/tb";

import { SiNintendogamecube } from "react-icons/si";
import { FaWaveSquare } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";

import { AiFillCheckCircle } from "react-icons/ai";
import Image from "next/image";
import React, { useEffect } from "react";
import heroImage from "../asset/homeimg.png";
import Image1 from "../asset/download3.png";
import Image2 from "../asset/download4.png";
import Image3 from "../asset/download6.png";
import Aos from "aos"
import "aos/dist/aos.css"


import { aboutData, testimonialData } from "../components/Data";

function Hero() {
  useEffect(() => {
Aos.init();
  }, [])
  return (
    <>
    {/* home */}
      <section id="home" className="bg-[#493E81] text-white px-5 pt-16 lg:pt-28 flex flex-col justify-center items-center">
        <div  data-aos="fade-in" className="flex flex-col items-center  gap-5 lg:px-[220px]">
          <h1 className="text-[27px] lg:text-5xl font-bold text-center">
            START YOUR DATA JOURNEY WITH SMARTAIX
          </h1>
          <p className="py-3 text-center text-sm lg:text-lg ">
            Equip business professionals across departments with the Data Ai
            insights they need to make the decisions that count
          </p>
        </div>
        <Image
        data-aos="fade-down"
          src={heroImage}
          width={850}
          height={500}
          alt="dashboard overview"
        />
      </section>


    {/* about */}
      <section id="about" className="px-5 pt-10 lg:flex lg:items-center justify-between lg:gap-16">
        <div className="flex flex-col items-start gap-5 lg:w-[65%]">
          <h2 className="text-[#493E81] text-2xl font-bold">
            DRIVE YOUR BUSINESS GROWTH WITH US
          </h2>

          <p className="text-gray-400">
            Parsed, structured, and clean all data from sources organized into
            data categories. Our datasets cover all essential aspects of
            information about companies, professionals.
          </p>
          <p className="text-gray-400">
            Parsed, structured, and clean all data from sources organized into
            data categories. Our datasets cover.
          </p>
          <button className="bg-[#493E81] text-white px-3 py-2 rounded-md font-semibold">
            Get Started For Free
          </button>
        </div>  
        <div className="grid md:grid-cols-2 gap-5 mt-3 ">
          {aboutData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 shadow-md p-5 rounded-md"
            >
              <p className="bg-purple-100 rounded-sm w-8 h-8   flex justify-center items-center  text-[#493E81] ">
                {item.icon}
              </p>
              <h3 className="text-[#493E81] font-bold">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.dis}</p>
              <div className="text-gray-400 text-sm">
                {item.check.map((check, index) => (
                  <div key={index} className="flex gap-1 items-center">
                    <AiFillCheckCircle className="text-[#493E81] " />
                    {check}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

         
          {/* home */}
      <section id="use-cases" className="px-5 md:my-10 pt-20 flex flex-col lg:items-center justify-between lg:gap-16 gap-10">
        <h2 className="text-[#493E81] text-center  text-2xl md:text-3xl  font-bold">
          BASE DATA THAT YOU CAN CREATE
        </h2>
        <div className="flex items-center flex-col lg:flex-row lg:gap-20 gap-10">
          <div className="flex flex-col items-start gap-3 lg:w-[60%]">
            <h3 className="text-[#493E81] text-xl md:text-3xl    font-bold">
              MANAGE YOUR BUSINESS AND FINANCE DATA
            </h3>

            <p className="text-gray-400">
              Parsed, structured and clean all data from sources organized into
              data categories. Our datasets cover all essential aspects of
              information abo Drive your career & learn industry.
            </p>
            <p className="text-gray-400">
              From instructor with theres experience top Fortune companies. Our
              business and finance courses include guidance.
            </p>
          </div>

          <Image src={Image1} width={550} height={500} alt="dashboard overview" />
        </div>

        <div className="flex items-center flex-col lg:flex-row lg:gap-20 gap-10">
          <Image
            src={heroImage}
            width={550}
            height={500}
            alt="dashboard overview"
          />
          <div className="flex flex-col items-start gap-3 lg:w-[60%]">
            <h2 className="text-[#493E81] text-2xl md:text-3xl font-bold">
              UNLIMITED POWER OF REPORT AND DATA SHARING
            </h2>

            <p className="text-gray-400">
              Parsed, structured & clean all data from sources organized into
              data categories. Our datasets cover all essential aspects of
              information abo Drive your career & learn industry.
            </p>
            <p className="text-gray-400">
              From instructor with there&apos;s experience top Fortune companies. Our
              business & finance courses include guidance.
            </p>
          </div>
        </div>

        <div className="flex items-center flex-col lg:flex-row lg:gap-20 gap-10">
          <div className="flex flex-col items-start gap-3 lg:w-[60%]">
            <h2 className="text-[#493E81] text-2xl md:text-3xl  font-bold">
              PRACTICE USING REAL-LIFE SCENARIOS
            </h2>

            <p className="text-gray-400">
              Parsed, structured & clean all data from sources organized into
              data categories. Our datasets cover all essential aspects of
              information abo Drive your career & learn industry.
            </p>
            <p className="text-gray-400">
              From instructor with there&apos;s experience top Fortune companies. Our
              business & finance courses include guidance.
            </p>
          </div>
          <Image src={Image2} width={550} height={500} alt="dashboard overview" />
        </div>
      </section>

      <section className="bg-[#493E81] text-white px-5 py-16  mt-10 flex flex-col justify-center items-center">
        <div className="flex md:flex-row flex-col items-center   gap-5 w-full">
          <div className="text-white flex flex-col w-full items-center justify-center bg-[#5B518E] p-7 rounded-md">
            <HiUserGroup className="text-5xl" />
            <span className="text-[40px] font-bold">22+</span>
            <p className="text-xl font-semibold">Business Users</p>
          </div>

          <div className="text-white flex flex-col w-full items-center justify-center bg-[#5B518E] p-7 rounded-md">
            <FaWaveSquare className="text-5xl" />
            <span className="text-[40px] font-bold">88+</span>
            <p className="text-xl font-semibold">Year In Business</p>
          </div>

          <div className="text-white flex flex-col w-full items-center justify-center bg-[#5B518E] p-7 rounded-md">
            <SiNintendogamecube className="text-5xl" />
            <span className="text-[40px] font-bold">15+</span>
            <p className="text-xl font-semibold">UI Components</p>
          </div>
          <div className="text-white flex flex-col w-full items-center justify-center bg-[#5B518E] p-7 rounded-md">
            <TbWorldWww className="text-5xl" />
            <span className="text-[40px] font-bold">120+</span>
            <p className="text-xl font-semibold">Country used</p>
          </div>
        </div>
      </section>

      <section className="px-5 py-10 md:flex-row flex flex-col lg:items-center justify-between gap-5 md:gap-16">
        <div className="flex flex-col items-start gap-3 lg:w-[65%]">
          <h2 className="text-[#493E81] text-2xl md:text-3xl  font-bold">
            DASHBOARDS FOR YOU
          </h2>
          <p className="text-gray-400">
            An insights dashboard is a visual representation of key data
            metrics, trends, performance indicator.
          </p>

          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-[#493E81]">
              Visual Representation
            </h4>
            <p className="text-gray-400">
              Dashboards use visual element to present data in a comprehensible
              and visually appealing manner. These visuals make it easier to
              spot trends, patterns, and anomalies.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-[#493E81]">Real-time Updates</h4>
            <p className="text-gray-400">
              Many insights dashboard offer real time near real time data
              updates, ensuring that users have access to the most current
              information.
            </p>
          </div>

          <button className="bg-[#493E81] text-white px-3 py-2 rounded-md font-semibold">
            Learn For Free
          </button>
        </div>
        <Image src={Image3} width={550} height={500} alt="dashboard overview" />
      </section>


  {/* pricing */}
      <section id="pricing" className="bg-[#493E81] px-5 py-10">
        <h2 className="text-white text-center text-3xl font-bold my-10">
          OUR PRICE PLAN
        </h2>

<div className="flex flex-col md:flex-row gap-4  ">

        <div className="mt-5 flex flex-col w-full gap-3 bg-[#5B518E] rounded-lg py-8 px-5 shadow-md">
          <h4 className="text-2xl text-center font-bold text-white">Start Free</h4>
          <h4 className="text-6xl font-bold text-center text-white">$0</h4>
          <div className="mt-3 flex flex-col gap-2 p-3">
            <p className="flex items-center gap-2 text-gray-400 ">
              <FaCheck className="text-white"/>
              Up to 10 monthly events
            </p>
            <p className="flex items-center gap-2 text-gray-400">
            <FaCheck className="text-white"/>
              Up to 3 websites
            </p>
            <p className="flex items-center gap-2 text-gray-400">
             <FaCheck className="text-white"/>1 year data retention
            </p>
            <p className="flex items-center gap-2 text-gray-400">
            <IoMdClose  className="text-white"/>
              Unlimited team members
            </p>
            <p className="flex items-center gap-2 text-gray-400">
             <FaCheck className="text-white"/>
              Community support
            </p>
            <p className="flex items-center gap-2 text-gray-400">
            <IoMdClose  className="text-white"/>
              Community support
            </p>
            <p className="flex items-center gap-2 text-gray-400">
             <FaCheck className="text-white"/>
              Code generate with AI
            </p>
            <p className="flex items-center gap-2 text-gray-400">
              
              <IoMdClose  className="text-white"/>
              
              Email support
            </p>
          </div>
          <button className="border py-2 rounded-md text-white bg-[#5B518E] hover:text-[#5B518E] hover:bg-white font-semibold mt-5 transition-all duration-300 ease-in-out ">
         
  Purchase Now
</button>

        </div>

        <div className="mt-5 flex flex-col gap-3 w-full bg-[#423874] rounded-lg py-8 px-5 shadow-md">
          <h4 className="text-2xl text-center font-bold text-white">Pro</h4>
          <h4 className="text-6xl font-bold text-center text-white">$129</h4>
          <div className="mt-3 flex flex-col gap-2 p-3">
            <p className="flex items-center gap-2 text-gray-400">
              <FaCheck className="text-white"/>
              Up to 10 monthly events
            </p>
            <p className="flex items-center gap-2 text-gray-400">
            <FaCheck className="text-white"/>
              Up to 3 websites
            </p>
            <p className="flex items-center gap-2 text-gray-400">
             <FaCheck className="text-white"/>1 year data retention
            </p>
            <p className="flex items-center gap-2 text-gray-400">
            <FaCheck className="text-white"/>
              Unlimited team members
            </p>
            <p className="flex items-center gap-2 text-gray-400">
             <FaCheck className="text-white"/>
              Community support
            </p>
            <p className="flex items-center gap-2 text-gray-400">
            <FaCheck className="text-white"/>
              Community support
            </p>
            <p className="flex items-center gap-2 text-gray-400">
             <FaCheck className="text-white"/>
              Code generate with AI
            </p>
            <p className="flex items-center gap-2 text-gray-400">
              
              <IoMdClose  className="text-white"/>
              
              Email support
            </p>
          </div>
          <button className="border hover:border-none py-2 rounded-md bg-white text-[#423874] hover:bg-[#423874]  hover:text-white font-semibold mt-5  shadow-md transition-all duration-300 ease-in-out">
       
  Purchase Now
</button>

        </div>


        <div className="mt-5 flex flex-col gap-3 bg-[#5B518E] w-full rounded-lg py-8 px-5  shadow-md">
          <h4 className="text-2xl text-center font-bold text-white">Business</h4>
          <h4 className="text-6xl font-bold text-center text-white">$949</h4>
          <div className="mt-3 flex flex-col gap-2 p-3">
            <p className="flex items-center gap-2 text-gray-400">
              <FaCheck className="text-white"/>
              Up to 10 monthly events
            </p>
            <p className="flex items-center gap-2 text-gray-400">
            <FaCheck className="text-white"/>
              Up to 3 websites
            </p>
            <p className="flex items-center gap-2 text-gray-400">
             <FaCheck className="text-white"/>1 year data retention
            </p>
            <p className="flex items-center gap-2 text-gray-400">
            <FaCheck className="text-white"/>
              Unlimited team members
            </p>
            <p className="flex items-center gap-2 text-gray-400">
             <FaCheck className="text-white"/>
              Community support
            </p>
            <p className="flex items-center gap-2 text-gray-400">
            <FaCheck className="text-white"/>
              Community support
            </p>
            <p className="flex items-center gap-2 text-gray-400">
             <FaCheck className="text-white"/>
              Code generate with AI
            </p>
            <p className="flex items-center gap-2 text-gray-400">
              
            <FaCheck className="text-white"/>
              
              Email support
            </p>
          </div>
          <button className="border py-2 rounded-md text-white bg-[#5B518E] hover:text-[#5B518E] hover:bg-white font-semibold mt-5 transition-all duration-300 ease-in-out">
         
  Purchase Now
</button>

        </div>

        </div> 
      </section>

  {/* testimonial */}
<section id="testimonial" className="px-5 py-10" >
<h2 className="text-[#493E81] text-center  text-2xl md:text-3xl  font-bold">
WHAT CLIENTS ARE SAYING ABOUT US
        </h2>

        <div className="">

<div className="flex overflow-hidden p-5 marquee ">
 
<div className="mt-5 flex gap-5 marquee-content   ">
{testimonialData.map((test, index) => (
<div key={index} className="flex flex-col gap-3 border rounded-md p-5 shadow-md  w-[400px] h-full">
  <div className="flex items-center gap-3">
<Image width={100} height={100} className="object-cover rounded-full" src={test.unsplashLink} alt="pgo"/>
<div className="">
  <h4 className="text-semibold text-sm text-[#493E81]">{test.user}</h4>
  <p className="text-bold text-sm">{test.role}</p>
</div>
</div>
<p className="text-gray-400">
 {test.testimonial}
</p>
<div className="flex items-center">
  <AiFillStar className="text-[#493E81]" />
  <AiFillStar className="text-[#493E81]" />
  <AiFillStar className="text-[#5f46dd]" />
  <AiFillStar className="text-[#493E81]" />
  <AiFillStar className="text-[#493E81]" />

</div>
</div>

))}


</div>

<div className="mt-5 flex gap-5 marquee-content   ">
{testimonialData.map((test, index) => (
<div key={index} className="flex flex-col gap-3 border rounded-md p-5 shadow-md  w-[400px] h-full">
  <div className="flex items-center gap-3">
<Image width={100} height={100} className="object-cover rounded-full" src={test.unsplashLink} alt="pgo"/>
<div className="">
  <h4 className="text-semibold text-sm text-[#493E81]">{test.user}</h4>
  <p className="text-bold text-sm">{test.role}</p>
</div>
</div>
<p className="text-gray-400">
 {test.testimonial}
</p>
<div className="flex items-center">
  <AiFillStar className="text-[#493E81]" />
  <AiFillStar className="text-[#493E81]" />
  <AiFillStar className="text-[#5f46dd]" />
  <AiFillStar className="text-[#493E81]" />
  <AiFillStar className="text-[#493E81]" />

</div>
</div>

))}


</div>

</div>


{/* second */}
<div className="flex overflow-hidden p-5 marquee2 ">
 
<div className="mt-5 flex gap-5 marquee-content2   ">
{testimonialData.map((test, index) => (
<div key={index} className="flex flex-col gap-3 border rounded-md p-5 shadow-md  w-[400px] h-full">
  <div className="flex items-center gap-3">
<Image width={100} height={100} className=" object-cover rounded-full" src={test.unsplashLink} alt="pgo"/>
<div className="">
  <h4 className="text-semibold text-sm text-[#493E81]">{test.user}</h4>
  <p className="text-bold text-sm">{test.role}</p>
</div>
</div>
<p className="text-gray-400">
 {test.testimonial}
</p>
<div className="flex items-center">
  <AiFillStar className="text-[#493E81]" />
  <AiFillStar className="text-[#493E81]" />
  <AiFillStar className="text-[#5f46dd]" />
  <AiFillStar className="text-[#493E81]" />
  <AiFillStar className="text-[#493E81]" />

</div>
</div>

))}


</div>

<div className="mt-5 flex gap-5 marquee-content2   ">
{testimonialData.map((test, index) => (
<div key={index} className="flex flex-col gap-3 border rounded-md p-5 shadow-md  w-[400px] h-full">
  <div className="flex items-center gap-3">
<Image width={100} height={100} className="object-cover rounded-full" src={test.unsplashLink} alt="pgo"/>
<div className="">
  <h4 className="text-semibold text-sm text-[#493E81]">{test.user}</h4>
  <p className="text-bold text-sm">{test.role}</p>
</div>
</div>
<p className="text-gray-400">
 {test.testimonial}
</p>
<div className="flex items-center">
  <AiFillStar className="text-[#493E81]" />
  <AiFillStar className="text-[#493E81]" />
  <AiFillStar className="text-[#5f46dd]" />
  <AiFillStar className="text-[#493E81]" />
  <AiFillStar className="text-[#493E81]" />

</div>
</div>

))}


</div>

</div>


        </div>
</section>
    </>
  );
}

export default Hero;
