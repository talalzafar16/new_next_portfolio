import React from 'react'
import styles from "./Home.module.css";
import Image from 'next/image';
import profilePic from '../../public/profile.png';


type Props = {}

export default function Home({}: Props) {
  return (
      <div className='px-5 py-3 flex flex-col-reverse'>
        <div className="text-white mt-3 gap-3">
            <h1 className="md:text-6xl text-3xl font-Kurale">Hello! I’m</h1>
            <h2 className={`${styles.name}  leading-relaxed font-bold text-5xl md:text-8xl font-Kurale`}>Talal Zafar</h2>
            <h3 className="text-xl font-Kurale ">MERN Stack Developr And Designer</h3>
        </div>
        <div className='flex justify-center mt-3'>
    <Image src={profilePic}  alt="profile pic" className='h-2/6	w-auto'/>
        </div>
    </div>
  )
}