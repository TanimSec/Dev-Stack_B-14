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
          Discover the technologies you need to build modern, powerful and
          scalable web applications.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          <button className="brand-gradient cursor-pointer rounded-xl px-6 py-3 font-medium text-white">
            Explore Technologies
          </button>

          <button className="cursor-pointer rounded-xl border border-gray-300 px-6 py-3 font-medium">
            Learn More
          </button>
        </div>
      </div>

      {/* Right side */}
      <div className="w-full max-w-md">
        <img
          src={banner}
          alt="Developer technology stack"
          className="w-full"
        />
      </div>
    </section>
  );
}

export default Hero;