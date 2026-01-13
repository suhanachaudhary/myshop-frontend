import { Link, useNavigate, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { openCart, selectCartItemsCount, selectCartItemCount } from "../store/slices/cartSlice";
import { useState } from "react";
import { SearchBar } from "./ui";

function Navbar() {
  const dispatch = useDispatch();
  const cartItemsCount = useSelector(selectCartItemsCount);
  const cartItemCount = useSelector(selectCartItemCount);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = !!localStorage.getItem("token");

  // Helper function to check if a path is active
  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  // Get active link classes
  const getLinkClasses = (path) => {
    const baseClasses =
      "px-3 py-2 rounded-xl transition-all duration-300 font-medium";
    const activeClasses =
      "bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 shadow-sm";
    const inactiveClasses =
      "hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:shadow-sm";

    return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`;
  };

  // Get mobile link classes
  const getMobileLinkClasses = (path) => {
    const baseClasses =
      "block px-3 py-2.5 rounded-xl transition-all duration-300";
    const activeClasses =
      "bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 font-semibold border border-blue-200";
    const inactiveClasses = "hover:bg-gray-50 font-medium";

    return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`;
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("cart"); // optional
    navigate("/login");
  };

  return (
    <header className="w-full bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-40 border-b border-gray-100">
      <Toaster position="bottom-center" />

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-white font-bold shadow-lg shadow-blue-200 hover:scale-110 transition-transform duration-300">
              MY
            </div>
            <span className="text-lg font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Myshop
            </span>
          </div>

          <div className="hidden md:flex flex-1 mx-8">
            <SearchBar
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full max-w-md"
            />
          </div>

          <div className="flex items-center gap-3 relative">
            <button
              onClick={() => dispatch(openCart())}
              className="relative border-2 border-gray-200 rounded-xl p-2.5 hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 transition-all duration-300 hover:border-blue-400 hover:shadow-lg group"
            >
              <span className="group-hover:scale-110 transition-transform inline-block text-xl">
                🛒
              </span>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 min-w-[24px] h-6 flex items-center justify-center bg-gradient-to-br from-red-500 to-red-600 text-white text-xs font-bold px-2 rounded-full shadow-lg border-2 border-white animate-bounce">
                  {cartItemsCount}
                </span>
              )}
            </button>

            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="hidden sm:block border-2 border-red-500 text-red-500 rounded-xl px-4 py-2 hover:bg-red-500 hover:text-white transition-all duration-300 font-medium"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="hidden sm:block border-2 border-gray-300 hover:border-blue-500 rounded-xl px-4 py-2 hover:bg-blue-50 transition-all duration-300 font-medium"
                >
                  Sign In
                </Link>

                <Link
                  to="/signup"
                  className="hidden sm:block bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl px-4 py-2 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 font-medium hover:scale-105 transform"
                >
                  Sign Up
                </Link>
              </>
            )}

            <button
              className="sm:hidden text-2xl hover:bg-gray-100 p-2 rounded-lg transition-all duration-300"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        <div className="md:hidden py-3">
          <SearchBar
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
          />
        </div>

        <nav className="hidden md:flex gap-6 py-3 text-[16px] font-medium text-gray-600">
          <Link className={getLinkClasses("/")} to="/">
            Home
          </Link>
          <Link className={getLinkClasses("/shop")} to="/shop">
            Shop
          </Link>
          <Link className={getLinkClasses("/about")} to="/about">
            About
          </Link>
          <Link className={getLinkClasses("/contact")} to="/contact">
            Contact Us
          </Link>
        </nav>

        {menuOpen && (
          <div className="md:hidden border-t py-4 space-y-3 animate-fadeIn">
            <Link
              onClick={() => setMenuOpen(false)}
              className={getMobileLinkClasses("/")}
              to="/"
            >
              Home
            </Link>
            <Link
              onClick={() => setMenuOpen(false)}
              className={getMobileLinkClasses("/shop")}
              to="/shop"
            >
              Shop
            </Link>
            <Link
              onClick={() => setMenuOpen(false)}
              className={getMobileLinkClasses("/about")}
              to="/about"
            >
              About
            </Link>
            <Link
              onClick={() => setMenuOpen(false)}
              className={getMobileLinkClasses("/contact")}
              to="/contact"
            >
              Contact
            </Link>

            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="block border-2 border-red-500 text-red-500 rounded-xl px-4 py-2 hover:bg-red-500 hover:text-white transition-all duration-300 font-medium"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block border-2 border-gray-300 hover:border-blue-500 rounded-xl px-4 py-2 hover:bg-blue-50 transition-all duration-300 font-medium text-center"
                >
                  Sign In
                </Link>

                <Link
                  to="/signup"
                  className="block bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl px-4 py-2 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-medium text-center"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
