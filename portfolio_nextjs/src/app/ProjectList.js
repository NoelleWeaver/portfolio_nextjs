import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectList({ jsonUrl }) {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch(jsonUrl);
        if (!res.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        setError(err.message);
      }
    }

    fetchProjects();
  }, [jsonUrl]);

  return (
    <div className="flex flex-wrap gap-[2rem] w-[80vw] m-[5%] ml-[10%]">
      {projects.map((project) => (
        <Link key={project.id} href={project.projectURL} target="_blank" className="relative">
        <Image 
          src={project.image} 
          alt={project.title} 
          width={500} 
          height={300} 
          className="w-[20vw] h-[25vh] bg-[#ACFFAF] rounded-[20px] drop-shadow-lg hover:scale-110 duration-300 ease-in-out"
        />
        <p className="absolute top-0 left-0 z-10 text-left font-bold mt-[11rem] ml-[1rem] text-black">
          {project.title}
        </p>
      </Link>
      
      ))}
    </div>
  );
}
