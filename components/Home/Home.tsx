import React from "react";
import styles from "./Home.module.css";
import Image from "next/image";
import profilePic from "../../public/profilee.png";

type Props = {};

export default function Home({}: Props) {
  return (
    <div className="px-5 py-3 flex items-center justify-around flex-col-reverse md:flex-row sm:px-8">
      <div className="text-white mt-3 md:mt-0 gap-3">
        <h1 className="md:text-5xl text-4xl font-Kurale">Hello! I’m</h1>
        <h2 className="text-SecondaryColor md:mt-2 md:mb-2 leading-relaxed font-bold text-6xl md:text-6xl font-Kurale">
          Talal Zafar
        </h2>
        <h3 className="text-2xl font-Kurale">
          MERN Stack Developr And Designer
        </h3>
      </div>
      <div className="flex justify-center items-center">
        <Image src={profilePic} alt="profile pic" className="h-screen w-auto" />
      </div>
    </div>
  );
}
