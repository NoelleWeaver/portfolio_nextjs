"use client";
import React from "react";

const SkillProgress = ({ percentage, label }) => {
  const radius = 40;
  const strokeWidth = 8;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <svg width="100" height="100" className="rotate-[-90deg] ml-[3rem] place-self-center">
        <circle cx="50" cy="50" r={radius} fill="none" stroke="#e5e7eb" strokeWidth={strokeWidth} />
        <circle cx="50" cy="50" r={radius} fill="none" stroke="#4CAF50" strokeWidth={strokeWidth} strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" className="transition-all duration-500 ease-in-out" />
      </svg>
      <p className="text-xl font-bold mt-2 ml-12">{label}</p>
    </div>
  );
};

export default SkillProgress;
