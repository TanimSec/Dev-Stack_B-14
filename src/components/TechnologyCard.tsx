import type { Technology } from "../types/technology";

interface TechnologyCardProps {
  technology: Technology;
  onAdd: (technology: Technology) => void;
  isAdded: boolean;
}

function TechnologyCard({
  technology,
  onAdd,
  isAdded,
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

      {/* Bottom Section: Rating + Action */}
      <div className="mt-auto pt-4 flex flex-col gap-3">
        {/* Rating */}
        <p className="text-xs font-medium text-gray-700 leading-none">
          ⭐ {technology.rating}
        </p>

        {/* Add button */}
        <button
          onClick={() => onAdd(technology)}
          disabled={isAdded}
          className={`w-full rounded-lg px-4 py-2.5 text-xs font-medium transition ${
            isAdded
              ? "cursor-not-allowed bg-gray-200 text-gray-500"
              : "cursor-pointer bg-gray-900 text-white hover:bg-gray-800 active:scale-[0.99]"
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
}

export default TechnologyCard;