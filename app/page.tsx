"use client"
// import { useEffect, useState } from "react";

import Hero from "./components/Hero";
// import PreLoader from "./components/PreLoader";



export default function Home() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 100);

  //   // Clean-up function to clear the timer when component unmounts
  //   return () => clearTimeout(timer);
  // }, []);

  // You might use `useClient` here if it's a valid hook or function

  return (
    <>
      {/* {loading ? (
        <div className="w-full h-[60vh] md:h-screen flex justify-center items-center"><PreLoader/></div>
      ) : (
        <>
          <Navbar />
          <main className=" ">
            <Hero />
          </main>
        </>
      )} */}
  
          <main className=" ">
            <Hero />
          </main>
        
    </>
  );
}
