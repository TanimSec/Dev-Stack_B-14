import type { Technology } from "../types/technology";

interface TechnologyCardProps {
  technology: Technology;
  onAdd: (technology: Technology) => void;
}

function TechnologyCard({
  technology,
  onAdd,
}: TechnologyCardProps) {
  return (
    <div className="flex min-h-[260px] flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      {/* Badge */}
      <div>
        <span className="rounded-full bg-blue-50 px-2 py-1 text-[10px] font-medium text-blue-500">
          {technology.badge}
        </span>
      </div>

      {/* Icon */}
      <img
        src={technology.icon}
        alt={`${technology.name} icon`}
        className="mt-4 h-9 w-9 object-contain"
      />

      {/* Name */}
      <h3 className="mt-3 text-base font-semibold">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-2 line-clamp-2 text-xs leading-5 text-gray-500">
        {technology.description}
      </p>

      {/* Category + Difficulty */}
      <div className="mt-4 flex items-center justify-between text-[10px]">
        <span className="rounded bg-gray-100 px-2 py-1 text-gray-500">
          {technology.category}
        </span>

        <span className="text-gray-500">
          {technology.difficulty}
        </span>
      </div>

      {/* Rating */}
      <p className="mt-3 text-xs font-medium text-gray-700">
        ⭐ {technology.rating}
      </p>

      {/* Add button */}
      <button
        onClick={() => onAdd(technology)}
        className="mt-auto w-full rounded-lg bg-gray-900 px-4 py-2 text-xs font-medium text-white transition hover:bg-gray-800"
      >
        Add to Stack
      </button>
    </div>
  );
}

export default TechnologyCard;