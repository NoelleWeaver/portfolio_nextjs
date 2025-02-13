"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [text, setText] = useState(""); 
  const fullText = "Nooelle Weaver.";
  const speed = 100;

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
      <div className="bg-blue-100 w-[38vw] h-[85vh] place-self-center">
        <Image src="/images/portfolio.jpg" alt="Example Image" width={300} height={300} className="rounded-[100%]" />
        <p className="text-7xl font-thin">I'm</p>
        <p className="text-8xl font-normal">{text}</p>
        <a href="noelle.e.weaver@gmail.com" className="">
          <Image src="/images/email.png" alt="Email Icon" width={30} height={30} />
          noelle.e.weaver@gmail.com 
        </a>
      </div>
    </main>
  );
}
