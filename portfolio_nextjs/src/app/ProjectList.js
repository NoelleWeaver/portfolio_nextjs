import { useState, useEffect } from "react";
import Image from "next/image";

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

  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="flex flex-wrap gap-[2rem] w-[80vw] m-[5%] ml-[10%]">
      {projects.map((project) => (
        <div key={project.id} className="flex flex-col w-[20vw] h-[25vh] bg-[#ACFFAF] rounded-[20px] hover:scale-110 duration-300 ease-in-out relative">
            <p className="text-left font-bold mt-[11rem] ml-[1rem]">{project.title}</p>
        </div>
      ))}
    </div>
  );
}
