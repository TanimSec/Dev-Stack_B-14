import logo from "../../assets/logo-text.png";

function Navbar() {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      {/* Mobile Menu Button */}
      <button
        className="text-2xl lg:hidden"
        aria-label="Open navigation menu"
      >
        ☰
      </button>

      {/* Brand */}
      <div className="lg:mr-auto">
        <img
          src={logo}
          alt="Dev Stack logo"
          className="w-28"
        />
      </div>

      {/* Navigation */}
      <div className="hidden items-center gap-8 lg:flex">
        <p className="cursor-pointer text-sm font-medium">Home</p>
        <p className="cursor-pointer text-sm font-medium">
          Technologies
        </p>
        <p className="cursor-pointer text-sm font-medium">Projects</p>
        <p className="cursor-pointer text-sm font-medium">About</p>
        <p className="cursor-pointer text-sm font-medium">Contact</p>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <button className="cursor-pointer text-sm font-medium">
          Sign In
        </button>

        <button className="brand-gradient cursor-pointer rounded-full px-5 py-2 text-sm font-medium text-white">
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;