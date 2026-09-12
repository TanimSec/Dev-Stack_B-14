import banner from "../../assets/banner-stack.png";

function Hero() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 py-16 lg:flex-row">
      {/* Left side */}
      <div className="w-full max-w-xl">
        <h1 className="text-5xl font-bold leading-tight">
          Build Your Ideal
          <span className="brand-gradient-text block">
            Development Stack
          </span>
        </h1>

        <p className="mt-6">
          Explore frontend, backend, database, and tooling options,
          compare them side by side, and put together the stack that fits your
          next project.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          <a
            href="#technologies"
            className="brand-gradient inline-block cursor-pointer rounded-xl px-6 py-3 font-medium text-white transition hover:opacity-95"
          >
            Explore Technologies
          </a>

          <button className="cursor-pointer rounded-xl border border-gray-300 px-6 py-3 font-medium transition hover:bg-gray-50">
            Learn More
          </button>
        </div>
      </div>

      {/* Right side */}
      <div className="flex w-full items-center justify-center max-w-lg lg:max-w-xl">
        <img
          src={banner}
          alt="Developer technology stack"
          className="w-full object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>
    </section>
  );
}

export default Hero;