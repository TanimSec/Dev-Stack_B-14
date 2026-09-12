function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Top Footer */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold">
              Dev <span className="brand-gradient-text">Stack</span>
            </h2>

            <p className="mt-3 max-w-xs text-sm leading-6 text-gray-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="mt-5 flex gap-4">
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-gray-900"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-sm text-gray-500 hover:text-gray-900"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-sm text-gray-500 hover:text-gray-900"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold">
              Product
            </h3>

            <div className="mt-4 space-y-3">
              <a
                href="#"
                className="block text-sm text-gray-500 hover:text-gray-900"
              >
                Home
              </a>

              <a
                href="#"
                className="block text-sm text-gray-500 hover:text-gray-900"
              >
                Technologies
              </a>

              <a
                href="#"
                className="block text-sm text-gray-500 hover:text-gray-900"
              >
                Projects
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold">
              Company
            </h3>

            <div className="mt-4 space-y-3">
              <a
                href="#"
                className="block text-sm text-gray-500 hover:text-gray-900"
              >
                About
              </a>

              <a
                href="#"
                className="block text-sm text-gray-500 hover:text-gray-900"
              >
                Contact
              </a>

              <a
                href="#"
                className="block text-sm text-gray-500 hover:text-gray-900"
              >
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold">
              Legal
            </h3>

            <div className="mt-4 space-y-3">
              <a
                href="#"
                className="block text-sm text-gray-500 hover:text-gray-900"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="block text-sm text-gray-500 hover:text-gray-900"
              >
                Terms of Service
              </a>

              <a
                href="#"
                className="block text-sm text-gray-500 hover:text-gray-900"
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
              className="hover:text-gray-900"
            >
              Privacy
            </a>

            <a
              href="#"
              className="hover:text-gray-900"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;