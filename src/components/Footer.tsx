import logo from "../../assets/logo-text.png";

function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Mobile Footer (matches screenshot) */}
        <div className="block md:hidden">
          <div className="flex justify-center">
            <img
              src={logo}
              alt="Dev Stack logo"
              className="h-6 w-auto"
            />
          </div>

          <p className="mx-auto mt-4 max-w-xs text-center text-xs leading-relaxed text-gray-500">
            Curated tools, technologies, and resources for developers
            building modern software.
          </p>

          <div className="mt-5 flex items-center justify-center gap-3 text-xs text-gray-500">
            <a
              href="#"
              className="hover:text-gray-900 transition"
            >
              GitHub
            </a>
            <span className="text-gray-400">•</span>
            <a
              href="#"
              className="hover:text-gray-900 transition"
            >
              Twitter
            </a>
            <span className="text-gray-400">•</span>
            <a
              href="#"
              className="hover:text-gray-900 transition"
            >
              LinkedIn
            </a>
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-5 text-[11px] text-gray-400">
            <p>© 2026 Dev Stack. All rights reserved.</p>

            <div className="flex gap-3">
              <a
                href="#"
                className="hover:text-gray-600 transition"
              >
                Privacy
              </a>
              <a
                href="#"
                className="hover:text-gray-600 transition"
              >
                Terms
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Footer */}
        <div className="hidden md:block">
          {/* Top Footer */}
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div>
              <img
                src={logo}
                alt="Dev Stack logo"
                className="h-6 w-auto"
              />

              <p className="mt-3 max-w-xs text-sm leading-6 text-gray-500">
                Curated tools, technologies, and resources for developers
                building modern software.
              </p>

              <div className="mt-5 flex gap-4">
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900 transition"
                >
                  GitHub
                </a>

                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900 transition"
                >
                  Twitter
                </a>

                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900 transition"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Product */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                Product
              </h3>

              <div className="mt-4 space-y-3">
                <a
                  href="#"
                  className="block text-sm text-gray-500 hover:text-gray-900 transition"
                >
                  Home
                </a>

                <a
                  href="#technologies"
                  className="block text-sm text-gray-500 hover:text-gray-900 transition"
                >
                  Technologies
                </a>

                <a
                  href="#"
                  className="block text-sm text-gray-500 hover:text-gray-900 transition"
                >
                  Projects
                </a>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                Company
              </h3>

              <div className="mt-4 space-y-3">
                <a
                  href="#"
                  className="block text-sm text-gray-500 hover:text-gray-900 transition"
                >
                  About
                </a>

                <a
                  href="#"
                  className="block text-sm text-gray-500 hover:text-gray-900 transition"
                >
                  Contact
                </a>

                <a
                  href="#"
                  className="block text-sm text-gray-500 hover:text-gray-900 transition"
                >
                  Careers
                </a>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                Legal
              </h3>

              <div className="mt-4 space-y-3">
                <a
                  href="#"
                  className="block text-sm text-gray-500 hover:text-gray-900 transition"
                >
                  Privacy Policy
                </a>

                <a
                  href="#"
                  className="block text-sm text-gray-500 hover:text-gray-900 transition"
                >
                  Terms of Service
                </a>

                <a
                  href="#"
                  className="block text-sm text-gray-500 hover:text-gray-900 transition"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-10 flex flex-col gap-4 border-t border-gray-200 pt-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
            <p>
              © 2026 Dev Stack. All rights reserved.
            </p>

            <div className="flex gap-5">
              <a
                href="#"
                className="hover:text-gray-900 transition"
              >
                Privacy
              </a>

              <a
                href="#"
                className="hover:text-gray-900 transition"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;