import { useState, useEffect } from "react";
import type { Technology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";
import technologiesData from "../data/technologies.json";

function Technologies() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);

  useEffect(() => {
    setTechnologies(technologiesData as Technology[]);
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <h2 className="text-3xl font-bold">Explore Technologies</h2>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {technologies.map((tech) => (
          <TechnologyCard key={tech.id} technology={tech} />
        ))}
      </div>
    </section>
  );
}

export default Technologies;