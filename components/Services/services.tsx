"use client"
import Image from "next/image";
import pic from "../../public/second.jpg";
import styles from "./services.module.css";
import React from 'react'
import {useState,useEffect} from 'react'


function Services() {
  const [width,setWidth]=useState(10);
  useEffect(() => {
    if(typeof window !== "undefined"){
      setWidth(window.innerWidth)
    }
  },[])  
  function handleResize() {
    if(typeof window !== "undefined"){ 
    setWidth(window.innerWidth)
  }}
  if(typeof window !== "undefined"){
    window.addEventListener('resize', handleResize);
  }
  return (
    <div id="Services" className="px-5 py-4 md:px-11 flex flex-col gap-6 mt-20 items-center sm:px-8">
      <div className="border-3 xl:w-48 flex justify-center sm:w-48 sm:p-2 items-center gap-3 border-SecondaryColor w-44 rounded-3xl p-1">
        <span className="text-white material-icons">design_services</span>
        <h1 className="text-white font-bold text-center text-xl xl:text-2xl font-sans">
          SERVICES
        </h1>
      </div>
      <h1 className="text-white font-Kurale text-3xl sm:text-4xl xl:text-5xl self-start mt-6">My<span className="text-SecondaryColor"> Specializations</span> here.</h1>
      <div className="w-full mt-4">
        <div className="flex group hover:border-3 justify-around hover:border-SecondaryColor md:gap-7 items-center border-2 w-full h-52 rounded-2xl p-4 sm:p-6">
          <div className="text-white flex flex-col ">
            <h1 className="font-Kurale z-20 text-xl xl:text-3xl sm:text-2xl font-bold mb-4">
              Website Development
            </h1>
            <p className="font-Kurale text-sm text-slate-200 xl:text-lg mb-3 sm:text-base">
              I build fully responsive and properly functional websites usnig
              latest technologies.
            </p>
            <h2 className="font-Kurale sm:text-lg font-base font-bold xl:text-xl group-hover:underline group-hover:underline-offset-2">10+ Projects</h2>
          </div>
          <span
            style={width<641?{ fontSize: "49px" }:width<1280?{ fontSize: "68px" }:{ fontSize: "88px" }}
            className="z-10 text-SecondaryColor material-icons"
          >
            code_off
          </span>
        </div>
        <div className="flex group md:gap-7 items-center justify-around  hover:border-3 sm:p-6 hover:border-SecondaryColor border-2 w-full h-52 rounded-2xl p-4 mt-10">
          <div className="text-white flex flex-col md:justify-between">
            <h1 className="font-Kurale z-20 sm:text-2xl xl:text-3xl text-xl font-bold mb-4">
              App Development
            </h1>
            <p className="font-Kurale text-sm text-slate-200 xl:text-lg mb-3 sm:text-base">
              I build fully operational and hybrid appliactions utilizing react
              native.
            </p>
            <h2 className="group-hover:underline sm:text-lg font-Kurale xl:text-xl font-base font-bold group-hover:underline-offset-2">6+ Projects</h2>
          </div>
          <span
            style={width<641?{ fontSize: "49px" }:width<1280?{ fontSize: "68px" }:{ fontSize: "88px" }}
            className="z-10 text-SecondaryColor material-icons"
          >
            developer_mode
          </span>
        </div>
      </div>
    </div>
  );
}
export default Services;