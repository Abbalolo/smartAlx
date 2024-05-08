import React from 'react'
import Image from "next/image";
import logo from "../asset/logoLoader.png"
function PreLoader() {
  return (

    <div className="h-[80vh] w-full flex justify-center items-center">
    <Image src={logo} className=" w-[200px] animate-ping" alt="logo image"  />
    </div>

  
  );
}

export default PreLoader;

