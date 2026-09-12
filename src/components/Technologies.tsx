import { useEffect, useState } from "react";
import type { Technology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";
import Stack from "./Stack";

function Technologies() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    Technology[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/src/data/technologies.json")
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      });
  }, []);

  const handleAddToStack = (technology: Technology) => {
    const alreadyAdded = selectedTechnologies.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      return;
    }

    setSelectedTechnologies((currentStack) => [
      ...currentStack,
      technology,
    ]);
  };

  const handleRemoveFromStack = (technology: Technology) => {
    setSelectedTechnologies((currentStack) =>
      currentStack.filter((item) => item.id !== technology.id)
    );
  };

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
              onAdd={handleAddToStack}
              isAdded={selectedTechnologies.some(
                (item) => item.id === technology.id
              )}
            />
          ))}
        </div>

        {/* Your Stack */}
        <Stack
          selectedTechnologies={selectedTechnologies}
          onRemove={handleRemoveFromStack}
        />
      </div>
    </section>
  );
}

export default Technologies;