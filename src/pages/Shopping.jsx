
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

import {
    getAdminProducts,
} from "../api/adminProductApi";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Shopping = () => {

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");


    const handleAddToCart = async (product) => {
        const token = localStorage.getItem("token");

        const cartItem = {
            data: product,
            product: product._id,
            quantity: 1,
        };

        if (!token) {
            let localCart = JSON.parse(localStorage.getItem("cart")) || [];

            const existing = localCart.find(
                (item) => item.product === product._id
            );

            if (existing) existing.quantity += 1;
            else localCart.push(cartItem);

            localStorage.setItem("cart", JSON.stringify(localCart));
            toast.success("Added to cart (saved locally)");
            return;
        }

        await axios.post(
            "http://localhost:3000/api/cart/add",
            cartItem,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        toast.success("Added to cart");
    };



    const fetchProducts = async () => {
        const res = await getAdminProducts();
        setProducts(res.data.products);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );



    return (
        <section className="bg-[#F8FAFC] pt-10 pb-10">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#F1F5F9] flex items-center justify-center text-[#0F172A] text-3xl">
                        🖨️
                    </div>
                </div>

                <h1 className="text-center text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-4">
                    Printer Shop
                </h1>

                <p className="text-center text-[#475569] max-w-2xl mx-auto mb-12">
                    Discover the perfect HP LaserJet printer for your needs with our
                    curated selection of professional-grade printers
                </p>

                <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] p-4 md:p-5">

                    <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">

                        <div className="flex items-center gap-2 border border-[#CBD5E1] rounded-xl px-4 py-3 w-full lg:w-[380px]">
                            <span className="text-[#64748B]">🔍</span>
                            <input
                                type="text"
                                placeholder="Search printers by name, model, or features"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full text-sm text-[#0F172A] placeholder-[#94A3B8] outline-none"
                            />
                        </div>

                        <div className="flex flex-wrap gap-3 w-full">

                            <div className="flex items-center gap-2 border border-[#CBD5E1] rounded-xl px-4 py-3">
                                <select className="text-sm bg-transparent outline-none text-[#0F172A]">
                                    <option className="text-start">All Types</option>
                                </select>
                            </div>

                            <select className="border border-[#CBD5E1] rounded-xl px-8 py-3 text-sm text-[#0F172A] outline-none">
                                <option>All Prices</option>
                            </select>

                            <select className="border border-[#CBD5E1] rounded-xl px-4 py-3 text-sm text-[#0F172A] outline-none">
                                <option>All Ratings</option>
                            </select>

                            <select className="border border-[#CBD5E1] rounded-xl px-4 py-3 text-sm text-[#0F172A] outline-none">
                                <option>Most Popular</option>
                            </select>

                        </div>

                        <div className="flex gap-2">
                            <button className="w-10 h-10 rounded-xl bg-[#0284C7] text-white flex items-center justify-center">
                                ▦
                            </button>
                            <button className="w-10 h-10 rounded-xl border border-[#CBD5E1] text-[#64748B] flex items-center justify-center hover:bg-[#F1F5F9]">
                                ☰
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            <section className="bg-[#F8FAFC] py-20">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="flex items-center justify-between mb-10">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A]">
                                Featured Printers
                            </h2>
                            <p className="text-[#475569] mt-1">
                                Our professionally-recommended picks for the best printing experience
                            </p>
                        </div>

                        <div className="hidden md:flex items-center gap-2 text-sm text-[#0F172A]">
                            ⭐ <span className="font-medium">Editor's Choice</span>
                        </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredProducts.map((product) => {
                            const discount = product.discount

                            const oldPrice = discount
                                ? Math.round(product.price / (1 - discount / 100))
                                : product.price;

                            return (
                                <div key={product._id}>
                                    <Link
                                        to={`/product/${product._id}`}
                                        className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm overflow-hidden hover:shadow-lg transition block"
                                    >
                                        <div className="relative p-6">
                                            <span className="absolute top-4 left-4 bg-[#EF4444] text-white text-xs font-semibold px-3 py-1 rounded-full">
                                                {product.discount}% OFF
                                            </span>

                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="mx-auto h-44 object-contain"
                                            />
                                        </div>
                                    </Link>

                                    <div className="px-6 pb-6">
                                        <h3 className="font-semibold mt-2 text-[#0F172A] mb-1">
                                            {product.name}
                                        </h3>

                                        <div className="flex text-yellow-400 text-sm mb-2">
                                            {"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}
                                        </div>

                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="text-lg font-bold text-[#0F172A]">
                                                ${product.price}
                                            </span>
                                            <span className="text-sm line-through text-[#94A3B8]">
                                                ${oldPrice}
                                            </span>
                                        </div>

                                        <button
                                            className="w-full flex items-center justify-center gap-2 bg-[#0284C7] hover:bg-[#0369A1] text-white py-3 rounded-xl font-medium transition"
                                            onClick={() => handleAddToCart(product)}
                                        >
                                            🛒 Add to Cart
                                        </button>

                                        <div className="flex items-center justify-between text-xs text-[#64748B] mt-4">
                                            <span className="flex items-center gap-1">
                                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                                {product.stock ? "In Stock" : "Out of Stock"}
                                            </span>
                                            <span>Free Shipping</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>


            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-2">
                    <div>
                        <h2 className="text-2xl font-bold text-[#0F172A]">
                            All Printers
                        </h2>
                        <p className="text-[#475569]">
                            Complete collection of HP LaserJet printers for every need
                        </p>
                    </div>
                    <p className="text-sm text-[#64748B]">
                        Showing 25 of 25 products
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    {products.map((product) => {
                        const discount = product.discount

                        const oldPrice = discount
                            ? Math.round(product.price / (1 - discount / 100))
                            : product.price;

                        return (
                            <div key={product._id} className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm overflow-hidden">

                                <Link
                                    to={`/product/${product._id}`}
                                    className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm overflow-hidden hover:shadow-lg transition block"
                                >
                                    <div className="relative p-6">
                                        <span className="absolute top-4 left-4 bg-[#EF4444] text-white text-xs font-semibold px-3 py-1 rounded-full">
                                            {product.discount}% OFF
                                        </span>

                                        <img
                                            src={product.image}
                                            alt="HP Color LaserJet Pro 4201dw"
                                            className="mx-auto h-44 object-contain"
                                        />
                                    </div>
                                </Link>

                                <div className="px-6 pb-6">

                                    <h3 className="font-semibold text-[#0F172A] mb-1">
                                        {product.name}
                                    </h3>

                                    <div className="flex text-yellow-400 text-sm mb-2">
                                        ★★★★☆
                                    </div>

                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="text-lg font-bold text-[#0F172A]">${product.price}</span>
                                        <span className="text-sm line-through text-[#94A3B8]">${oldPrice}</span>
                                    </div>

                                    <button className="w-full flex items-center justify-center gap-2 bg-[#0284C7] hover:bg-[#0369A1] text-white py-3 rounded-xl font-medium transition" onClick={() => handleAddToCart(product)}>
                                        🛒 Add to Cart
                                    </button>

                                    <div className="flex items-center justify-between text-xs text-[#64748B] mt-4">
                                        <span className="flex items-center gap-1">
                                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                            In Stock
                                        </span>
                                        <span>Free Shipping</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

        </section >
    );
};

export default Shopping;
