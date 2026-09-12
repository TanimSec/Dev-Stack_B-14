import { useEffect, useState } from "react";
import type { Technology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";

function Technologies() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/src/data/technologies.json")
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-center">Loading technologies...</p>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      {/* Section heading */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold">
          Explore the{" "}
          <span className="brand-gradient-text">Technologies</span>
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Pick one technology category to build your ideal stack.
        </p>
      </div>

      {/* Technologies + Stack */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        {/* Technology cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-3">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
            />
          ))}
        </div>

        {/* Your Stack */}
        <aside className="rounded-xl border border-gray-200 p-5">
          <h3 className="font-semibold">Your Stack</h3>

          <p className="mt-1 text-xs text-gray-400">
            No technologies selected yet.
          </p>

          <div className="mt-6 rounded-lg border border-dashed border-gray-200 p-6 text-center">
            <p className="text-xs text-gray-400">
              Your stack is empty.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Technologies;