"use client";

import { useState, useEffect } from "react";

export default function Typewriter() {
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
    <div className="mt-[-20rem] ml-[2rem]">
      <p className="text-7xl font-thin">I'm</p>
      <p className="text-8xl font-normal">{text}</p>
    </div>
  );
}