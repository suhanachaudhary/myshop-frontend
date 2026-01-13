
import { Link, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useCart } from "../context/CartContext";
import { useState } from "react";

function Navbar() {
    const { setCartOpen, cartItems } = useCart();
    const [menuOpen, setMenuOpen] = useState(false);

    const navigate = useNavigate();
    const isLoggedIn = !!localStorage.getItem("token");

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("cart"); // optional
        navigate("/login");
    };


    return (
        <header className="w-full bg-white shadow-sm sticky top-0 z-40">
            <Toaster position="bottom-center" />

            <div className="max-w-7xl mx-auto px-4">

                <div className="flex items-center justify-between h-16">

                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                            MY
                        </div>
                        <span className="text-lg font-semibold text-gray-800">
                            Myshop
                        </span>
                    </div>

                    <div className="hidden md:flex flex-1 mx-8">
                        <div className="relative w-full max-w-md">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full border rounded-lg pl-10 pr-4 py-2 text-[16px] focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                            <span className="absolute left-3 top-2.5 text-gray-400">
                                🔍
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 relative">

                        <button
                            onClick={() => setCartOpen(true)}
                            className="relative border rounded-lg p-2 hover:bg-gray-100"
                        >
                            🛒
                            {cartItems.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
                                    {cartItems.length}
                                </span>
                            )}
                        </button>

                        {isLoggedIn ? (
                            <button
                                onClick={handleLogout}
                                className="hidden sm:block border border-red-500 text-red-500 rounded-lg px-4 py-2 hover:bg-red-50"
                            >
                                Logout
                            </button>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="hidden sm:block border rounded-lg px-4 py-2"
                                >
                                    Sign In
                                </Link>

                                <Link
                                    to="/signup"
                                    className="hidden sm:block bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
                                >
                                    Sign Up
                                </Link>
                            </>
                        )}

                        <button
                            className="sm:hidden text-2xl"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            ☰
                        </button>
                    </div>
                </div>

                <div className="md:hidden py-3">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full border rounded-lg px-4 py-2"
                    />
                </div>

                <nav className="hidden md:flex gap-6 py-3 text-[16px] font-medium text-gray-600">
                    <Link className="px-3 py-2 rounded-lg bg-blue-50 text-blue-600" to="/">
                        Home
                    </Link>
                    <Link className="hover:text-blue-600 px-3 py-2 hover:bg-blue-50 rounded-lg" to="/shop">
                        Shop
                    </Link>
                    <Link className="hover:text-blue-600 px-3 py-2 hover:bg-blue-50 rounded-lg" to="/about">
                        About
                    </Link>
                    <Link className="hover:text-blue-600 px-3 py-2 hover:bg-blue-50 rounded-lg" to="/contact">
                        Contact Us
                    </Link>
                </nav>

                {menuOpen && (
                    <div className="md:hidden border-t py-4 space-y-3">
                        <Link onClick={() => setMenuOpen(false)} className="block px-3 py-2" to="/">Home</Link>
                        <Link onClick={() => setMenuOpen(false)} className="block px-3 py-2" to="/shop">Shop</Link>
                        <Link onClick={() => setMenuOpen(false)} className="block px-3 py-2" to="/about">About</Link>
                        <Link onClick={() => setMenuOpen(false)} className="block px-3 py-2" to="/contact">Contact</Link>

                        {isLoggedIn ? (
                            <button
                                onClick={handleLogout}
                                className="block border border-red-500 text-red-500 rounded-lg px-4 py-2 hover:bg-red-50"
                            >
                                Logout
                            </button>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="block border rounded-lg px-4 py-2"
                                >
                                    Sign In
                                </Link>

                                <Link
                                    to="/signup"
                                    className="block bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
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

