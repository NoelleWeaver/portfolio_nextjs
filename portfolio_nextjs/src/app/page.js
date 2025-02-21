"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Projects from "./Projects";
import ProgressBar from "./components/skill"; 
import Typewriter from "./components/typewriter"; 
import Navbar from "./components/navbar";

export default function Home() {


  return (
    <main className="grid overflow-x-hidden">
      <header className="w-[100vw] h-[2vh] mb-[2rem]">
        <Navbar />
      </header>
      {/* Profile picture section */}
      <div id="home" className="bg-[#ACFFAF] w-[35vw] h-[85vh] rounded-[60px] ml-[60rem] mt-[3rem] z-0">
        <Image src="/images/portfolio.jpg" alt="Example Image" width={300} height={300} className="rounded-[100%] float-right mt-[2rem] mr-[2rem]" />
        {/* Social links */}
        <div className="flex items-center ml-[3rem] mt-[40rem] z-40">
        <Link href="https://github.com/NoelleWeaver" target="_blank" className="hover:scale-110 duration-300 ease-in-out">
            <Image src="/images/github.png" alt="Github Icon" width={30} height={30} />
          </Link>
          <Link className="w-30 h-30 hover:scale-110 duration-300 ease-in-out" href="https://google.com" target="_blank">
            <Image className="ml-5" src="/images/instagram.png" alt="Instagram Icon" width={30} height={30} />
          </Link>
          <Link className="hover:scale-110 duration-300 ease-in-out" href="https://google.com" target="_blank">
            <Image className="ml-5" src="/images/social.png" alt="Facebook Icon" width={30} height={30} />
          </Link>
        </div>
        {/* Name section */}
        <Typewriter />
      </div>
      <p className="text-9xl font-semibold mt-[-45rem] ml-[7rem] uppercase">Portfolio</p>
      {/* Skills Section */}
      <div className="flex items-center mt-[-57rem] ml-[10rem]">
        <ProgressBar percentage={90} label="HTML & CSS" />
        <ProgressBar percentage={50} label="Python" />
        <ProgressBar percentage={60} label="JavaScript" />
      </div>
      {/* About Me text */}
      <div className="w-[40vw] h-[35vh] mt-[-20rem] ml-[9rem] border-[5px] border-[#ACFFAF] rounded-tr-[70px] rounded-bl-[70px]">
        <p className="w-[30rem] text-center ml-[3.5rem] mt-[3.5rem]">Hello! I'm Noelle Weaver. I'm a passionate developer with experience in Python, JavaScript, HTML, CSS, React, and MongoDB. I love building interactive and user-friendly web applications, constantly learning new technologies, and solving challenging problems through code. When I'm not coding, you can find me at a coffee shop drinking matcha. Feel free to reach out—I'd love to connect!</p>
      </div>
      {/* Projects */}
      <p id="projects" className="text-7xl font-semibold ml-[70%] mt-[8rem] uppercase">Projects</p>
      <Projects />
      <footer id="contact" className="mt-[6rem] bg-[#ACFFAF]">
        <p className="text-6xl font-semibold ml-[4rem] mt-4">Noelle Weaver</p>
        <p className="ml-[4rem] mt-2 flex"> <Image className="mr-[3px]" src="/images/email.png" alt="Facebook Icon" width={25} height={5} />noelle.e.weaver@gmail.com</p>
        <p className="ml-[4rem] mt-2 flex">+1 (123) 456-7899</p>
        <div className="w-[90vw] h-[0.5vh] bg-black place-self-center"></div>
        <p className="mt-[1rem] ml-[5rem]">2025 Noelle Inc.</p>
        {/* Social links */}
        <div className="flex items-center ml-[82rem] mt-[-1rem] mb-[1rem]">
          <Link href="https://github.com/NoelleWeaver" target="_blank" className="hover:scale-110 duration-300 ease-in-out">
            <Image src="/images/github.png" alt="Github Icon" width={30} height={30} />
          </Link>
          <Link className="w-30 h-30 hover:scale-110 duration-300 ease-in-out" href="https://google.com" target="_blank">
            <Image className="ml-5" src="/images/instagram.png" alt="Instagram Icon" width={30} height={30} />
          </Link>
          <Link className="w-30 h-30 hover:scale-110 duration-300 ease-in-out" href="https://google.com" target="_blank">
            <Image className="ml-5" src="/images/social.png" alt="Facebook Icon" width={30} height={30} />
          </Link>
        </div>
      </footer>
    </main>

  );
}
