"use client";
import Link from "next/link";
import React, { useState } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function SideBar() {

  return (
    <div className="md:fixed">
    <div className="flex justify-center flex-col gap-1 items-start h-screen text-white absolute">
      <Link target="_blank" href="https://github.com/talalzafar16">
      <span className=" wroup hover:bg-transparent hover:text-SecondaryColor hover:border-SecondaryColor hover:border-3 hover:border-l-0 bg-SecondaryColor border-2 border-white border-l-0 flex items-center xl:w-12 xl:h-10 w-9 md:w-10 md:h-9 h-8 rounded-r-3xl">
      <GitHubIcon className="ml-1 xl:ml-2" />
      </span>
      </Link>
      <Link target="_blank" href="https://www.linkedin.com/in/talal-zafar-436912253/">
      <span className="wroup hover:bg-transparent hover:text-SecondaryColor hover:border-SecondaryColor hover:border-3 hover:border-l-0 bg-SecondaryColor border-2 border-white border-l-0 flex items-center  w-9 md:w-10 xl:w-12 xl:h-10 md:h-9 h-8 rounded-r-3xl">     
      <LinkedInIcon className="ml-1 xl:ml-2" />
      </span>
      </Link>
      <Link target="_blank" href="https://www.instagram.com/talal_zafar_16/">
      <span className="wroup hover:bg-transparent hover:text-SecondaryColor hover:border-SecondaryColor hover:border-3 hover:border-l-0 bg-SecondaryColor border-2 border-white border-l-0 flex items-center  w-9 md:w-10 md:h-9 h-8 xl:w-12 xl:h-10 rounded-r-3xl">
      <InstagramIcon className="ml-1 xl:ml-2" />
      </span>
      </Link>
      <Link target="_blank" href="https://twitter.com/TalalZa31517473">
      <span className="wroup hover:bg-transparent hover:text-SecondaryColor hover:border-SecondaryColor hover:border-3 hover:border-l-0 bg-SecondaryColor border-2 border-white border-l-0 flex items-center xl:w-12 xl:h-10 w-9 md:w-10 md:h-9 h-8 rounded-r-3xl">      
      <TwitterIcon className="ml-1 xl:ml-2"  />
      </span>
      </Link>
    </div>
    </div>
    );
}
export default SideBar;
