"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [text, setText] = useState(""); 
  const fullText = "Nooelle Weaver.";
  const speed = 150;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setText((prev) => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="grid">
      <header></header>
      {/* Profile picture section */}
      <div className="bg-[#ACFFAF] w-[35vw] h-[85vh] rounded-[60px] ml-[60%] mt-[3rem]">
        <Image src="/images/portfolio.jpg" alt="Example Image" width={300} height={300} className="rounded-[100%] float-right mt-[2rem] mr-[2rem]" />
        {/* Social links */}
        <div className="flex items-center ml-[3rem] mt-[120%]">
          <a>
          <Image src="/images/github.png" alt="Github Icon" width={30} height={30} />
          </a>
          <a>
          <Image className="ml-5" src="/images/instagram.png" alt="Instagram Icon" width={30} height={30} />
          </a>
          <a>
          <Image className="ml-5" src="/images/social.png" alt="Facebook Icon" width={30} height={30} />
          </a>
        </div>
        {/* Name section */}
        <div className="mt-[-65%] ml-[2rem]">
          <p className="text-7xl font-thin">I'm</p>
          <p className="text-8xl font-normal">{text}</p>
        </div>
      </div>
      <p className="text-9xl font-semibold mt-[-45%] ml-[7%] uppercase">Portfolio</p>
      {/* Skills Section */}
      <div className="flex items-center mt-[-57%] ml-[8%]">
        <div className="flex flex-col w-[180px] h-[180px] rounded-[100%] bg-[#ACFFAF]"></div>
        <div className="flex flex-col ml-[2rem] w-[180px] h-[180px] rounded-[100%] bg-[#ACFFAF]"></div>
        <div className="flex flex-col ml-[2rem] w-[180px] h-[180px] rounded-[100%] bg-[#ACFFAF]"></div>
      </div>
      {/* About Me text */}
      <div className="w-[40vw] h-[35vh] mt-[-20%] ml-[9%] border-[5px] border-[#ACFFAF] rounded-tr-[70px] rounded-bl-[70px]">
        <p className="w-[30rem] text-center ml-[3.5rem] mt-[3.5rem]">Hello! I'm Noelle Weaver. I'm a passionate developer with experience in Python, JavaScript, HTML, CSS, React, and MongoDB. I love building interactive and user-friendly web applications, constantly learning new technologies, and solving challenging problems through code. When I'm not coding, you can find me at a coffee shop drinking matcha. Feel free to reach out—I'd love to connect!</p>
      </div>
      {/* Projects */}
      <p className="text-7xl font-semibold ml-[70%] mt-[8rem] uppercase">Projects</p>
      {/* Project cards */}
      <div className="flex flex-wrap gap-[2rem] w-[80vw] m-[5%] ml-[10%] ">
        <div className="flex flex-col w-[20vw] h-[25vh] bg-[#ACFFAF] rounded-[20px] hover:scale-110 duration-300 ease-in-out"></div>
        <div className="flex flex-col w-[20vw] h-[25vh] bg-[#ACFFAF] rounded-[20px] hover:scale-110 duration-300 ease-in-out"></div>
        <div className="flex flex-col w-[20vw] h-[25vh] bg-[#ACFFAF] rounded-[20px] hover:scale-110 duration-300 ease-in-out"></div>
      </div>
      <footer className=" bg-[#ACFFAF]">
        <p className="text-6xl font-semibold ml-[4rem] mt-4">Noelle Weaver</p>
        <p className="ml-[4rem] mt-2">noelle.e.weaver@gmail.com</p>
        <p className="ml-[4rem] mt-2 flex">+1 (123) 456-7899 <Image className="ml-[3px]" src="/images/phone (2).png" alt="Facebook Icon" width={20} height={20} /></p>
        <div className="w-[90vw] h-[0.5vh] bg-black place-self-center"></div>
        <p className="mt-[1rem] ml-[5rem]">2025 Noelle Inc.</p>
        {/* Social links */}
        <div className="flex items-center ml-[70rem] mt-[-1rem] mb-[1rem]">
          <a>
            <Image src="/images/github.png" alt="Github Icon" width={30} height={30} />
          </a>
          <a>
            <Image className="ml-5" src="/images/instagram.png" alt="Instagram Icon" width={30} height={30} />
          </a>
          <a>
            <Image className="ml-5" src="/images/social.png" alt="Facebook Icon" width={30} height={30} />
          </a>
        </div>
      </footer>
    </main>

  );
}
