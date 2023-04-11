import React from 'react'
import styles from "./Home.module.css";
import Image from 'next/image';
import profilePic from '../../public/profile.png';


type Props = {}

export default function Home({}: Props) {
  return (
      <div className='px-5 py-3 flex justify-around items-center h-screen'>
        <div className="text-white">
            <h1 className="md:text-6xl text-2xl font-Kurale">Hello! I’m</h1>
            <br/>
            <h1 className={`${styles.name} font-bold text-4xl md:text-8xl font-Kurale`}>Talal Zafar</h1>
            <br/>
            <h3 className="text-center md:text-3xl text-xl font-Kurale">MERN Stack Developr</h3>
        </div>
    <Image src={profilePic}  alt="profile pic" className='h-80	w-auto'/>
    </div>
  )
}