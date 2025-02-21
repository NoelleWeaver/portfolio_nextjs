"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-none ml-[2rem] mt-[1rem] z-10">
        <Link href="#home" className="text-black text-lg hover:text-[#4CAF50] transition duration-300">Home</Link>
        <Link href="#projects" className="text-black ml-[2rem] text-lg hover:text-[#4CAF50] transition duration-300">Projects</Link>
        <Link href="#contact" className="text-black ml-[2rem] text-lg hover:text-[#4CAF50] transition duration-300">Contact</Link>
    </nav>
  );
}