import type { Technology } from "../types/technology";

interface StackProps {
  selectedTechnologies: Technology[];
  onRemove: (technology: Technology) => void;
  onRemoveAll: () => void;
}

function Stack({
  selectedTechnologies,
  onRemove,
  onRemoveAll,
}: StackProps) {
  return (
    <aside className="rounded-xl border border-gray-200 p-5">
      <h3 className="font-semibold">Your Stack</h3>

      <p className="mt-1 text-xs text-gray-400">
        {selectedTechnologies.length} technologies selected.
      </p>

      {selectedTechnologies.length === 0 ? (
        <div className="mt-6 rounded-lg border border-dashed border-gray-200 p-6 text-center">
          <p className="text-xs text-gray-400">
            Your stack is empty.
          </p>
        </div>
      ) : (
        <>
          <div className="mt-6 space-y-3">
            {selectedTechnologies.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center justify-between gap-3 rounded-lg border border-gray-200 p-3"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={technology.icon}
                    alt={`${technology.name} icon`}
                    className="h-7 w-7 object-contain"
                  />

                  <p className="text-sm font-medium">
                    {technology.name}
                  </p>
                </div>

                <button
                  onClick={() => onRemove(technology)}
                  className="text-xs font-medium text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={onRemoveAll}
            className="mt-5 w-full rounded-lg border border-red-200 px-4 py-2 text-xs font-medium text-red-500 hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}

export default Stack;