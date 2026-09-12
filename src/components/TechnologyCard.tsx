import type { Technology } from "../types/technology";

interface TechnologyCardProps {
  technology: Technology;
}

function TechnologyCard({ technology }: TechnologyCardProps) {
  return (
    <div className="flex flex-col rounded-xl border border-gray-200 p-5">
      <span className="text-xs font-medium">
        {technology.badge}
      </span>

      <img
        src={technology.icon}
        alt={`${technology.name} icon`}
        className="my-4 h-10 w-10"
      />

      <h3 className="text-lg font-semibold">
        {technology.name}
      </h3>

      <p className="mt-2 text-sm text-gray-600">
        {technology.description}
      </p>

      <div className="mt-4 flex justify-between">
        <p className="text-xs text-gray-500">
          {technology.category}
        </p>

        <p className="text-xs text-gray-500">
          {technology.difficulty}
        </p>
      </div>

      <p className="mt-3 text-sm font-medium">
        ⭐ {technology.rating}
      </p>

      <button className="mt-5 w-full rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white">
        Add to Stack
      </button>
    </div>
  );
}

export default TechnologyCard;