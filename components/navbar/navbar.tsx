"use client";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./navbar.module.css";
function Navbar() {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(false);

  function changeColor() {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  }
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeColor);
  }

  function Close() {
    const elem = document.querySelector(`.${styles.overlayNavbar}`)!;
    elem.classList.add(styles.overlayNavbarOutro)!;
    setTimeout(() => {
      setOpen(!open);
    }, 900);
  }

  return (
    <div
      className={
        color
          ? "bg-black sticky top-0 duration-700 transition-all ease-in-out "
          : `sticky top-0`
      }
    >
      <div className="flex  navbar text-white h-20 justify-between md:px-11 md:py-6 px-5 py-4 sm:px-8">
        <div className="flex justify-center items-center">
          <h3 className="font-Dancing text-3xl">Talal</h3>
        </div>
        {/*Desktop Menu  */}
        <div className="hidden md:block">
          <ul className="flex gap-6 font-Kurale">
            <Link className="hover:scale-110" href="#">
              <li>Home</li>
            </Link>
            <Link className="hover:scale-110" href="#">
              <li>About</li>
            </Link>
            <Link className="hover:scale-110" href="#">
              <li>Education</li>
            </Link>
            <Link className="hover:scale-110" href="#">
              <li>Services</li>
            </Link>
            <Link className="hover:scale-110" href="#">
              <li>Skills</li>
            </Link>
            <Link className="hover:scale-110" href="#">
              <li>Portfolio</li>
            </Link>
            <Link className="hover:scale-110" href="#">
              <li>Contact Me</li>
            </Link>
          </ul>
        </div>
        {/*HamBurger Icon  */}
        <div
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1 justify-center md:hidden"
        >
          <div className="h-0.5 w-8 bg-white rounded-xl"></div>
          <div className="h-0.5 w-8 bg-white rounded-xl"></div>
          <div className="h-0.5 w-8 bg-white rounded-xl"></div>
        </div>
      </div>
      {/*Mobile Menu  */}
      <div
        className={
          open
            ? `${styles.overlayNavbar} z-10 absolute bg-black top-0 w-full `
            : "hidden"
        }
      >
        {/*Close Button  */}
        <div className="w-full flex flex-col items-end mt-10">
          <span onClick={() => Close()} className="flex flex-col mr-9">
            <div className="h-1 w-10 cursor-pointer rounded-xl transform transition duration-300 ease-in-out bg-white rotate-45 translate-y-2.5 "></div>
            <div className="h-1 w-10 mb-7 rounded-xl absolute cursor-pointer transform transition duration-300 ease-in-out bg-white -rotate-45 translate-y-2.5"></div>
          </span>
        </div>
        {/* Menu Items  */}
        <div className="h-screen flex  justify-center items-center">
          <ul className="text-white flex gap-4 font-Kurale flex-col text-center">
            <Link href="#">
              <li>Home</li>
            </Link>
            <Link href="#">
              <li>About</li>
            </Link>
            <Link href="#">
              <li>Education</li>
            </Link>
            <Link href="#">
              <li>Services</li>
            </Link>
            <Link href="#">
              <li>Skills</li>
            </Link>
            <Link href="#">
              <li>Portfolio</li>
            </Link>
            <Link href="#">
              <li>Contact Me</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
