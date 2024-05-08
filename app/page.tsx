"use client"
// import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
// import PreLoader from "./components/PreLoader";
import Footer from "./components/Footer";

// Assume "useClient" is a function or hook related to client-side logic

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
       <Navbar />
          <main className=" ">
            <Hero />
          </main>
          <Footer/>
    </>
  );
}
