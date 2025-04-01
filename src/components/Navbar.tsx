import { FC, useState } from "react";
import { Link } from "react-router-dom";

const Navbar: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      enable-xr
      debugName="navbar"
      className={
        "" +
        (import.meta.env.XR_ENV !== "avp" ? "bg-indigo-600 w-full" : "navbar")
      }
    >
      <div className="w-full px-6 sm:px-8 md:px-12 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl sm:text-2xl font-bold text-white">
            TechShop
          </Link>

          <div className="hidden md:flex space-x-8 lg:space-x-12">
            <Link
              to="/"
              className="text-white hover:text-indigo-200 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/"
              className="text-white hover:text-indigo-200 transition-colors font-medium"
            >
              Products
            </Link>
            <Link
              to="/"
              className="text-white hover:text-indigo-200 transition-colors font-medium"
            >
              Categories
            </Link>
            <Link
              to="/"
              className="text-white hover:text-indigo-200 transition-colors font-medium"
            >
              About
            </Link>
            <Link
              to="/"
              className="text-white hover:text-indigo-200 transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="hover:text-indigo-200 transition-colors bg-transparent p-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button className="hover:text-indigo-200 transition-colors relative bg-transparent p-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center">
                0
              </span>
            </button>
            <button
              className="md:hidden hover:text-indigo-200 transition-colors bg-transparent p-0"
              onClick={toggleMobileMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    mobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* 移动端菜单 */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pb-3 border-t border-indigo-500">
            <div className="flex flex-col space-y-3 mt-3">
              <Link
                to="/"
                className="text-white hover:text-indigo-200 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/"
                className="text-white hover:text-indigo-200 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/"
                className="text-white hover:text-indigo-200 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Categories
              </Link>
              <Link
                to="/"
                className="text-white hover:text-indigo-200 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/"
                className="text-white hover:text-indigo-200 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
