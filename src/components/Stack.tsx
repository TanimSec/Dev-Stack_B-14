function Stack() {
  return (
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
  );
}

export default Stack;