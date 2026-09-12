import logo from "../../assets/logo-text.png";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        {/* Brand & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            className="cursor-pointer text-2xl lg:hidden"
            aria-label="Open navigation menu"
          >
            ☰
          </button>

          <img
            src={logo}
            alt="Dev Stack logo"
            className="w-28 object-contain"
          />
        </div>

        {/* Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          <a
            href="#"
            className="cursor-pointer text-sm font-medium text-gray-600 transition hover:text-gray-900"
          >
            Home
          </a>
          <a
            href="#technologies"
            className="cursor-pointer text-sm font-medium text-gray-600 transition hover:text-gray-900"
          >
            Technologies
          </a>
          <a
            href="#"
            className="cursor-pointer text-sm font-medium text-gray-600 transition hover:text-gray-900"
          >
            Projects
          </a>
          <a
            href="#"
            className="cursor-pointer text-sm font-medium text-gray-600 transition hover:text-gray-900"
          >
            About
          </a>
          <a
            href="#"
            className="cursor-pointer text-sm font-medium text-gray-600 transition hover:text-gray-900"
          >
            Contact
          </a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="cursor-pointer text-sm font-medium text-gray-700 transition hover:text-gray-900">
            Sign In
          </button>

          <button className="brand-gradient cursor-pointer rounded-full px-5 py-2 text-sm font-medium text-white transition hover:opacity-95">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;