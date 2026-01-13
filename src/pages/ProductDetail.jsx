
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";

import {
    getAdminProducts,
} from "../api/adminProductApi";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export default function ProductDetail() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const [product, setProduct] = useState(null);
    const [mainImg, setMainImg] = useState("");
    const [qty, setQty] = useState(1);


    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    const fetchSingleProduct = async () => {
        try {
            const res = await axios.get(
                `https://myshop-backend-cdz8.onrender.com/api/admin/products/${id}`
            );

            console.log("siin.", res.data)
            setProduct(res.data.product);
            setMainImg(res.data.product.image);
        } catch (error) {
            toast.error("Product not found");
            navigate("/");
        }
    };


    const handleAddToCart = async (product) => {
        try {
            await dispatch(addToCart({ product, quantity: qty })).unwrap();
            toast.success("Added to cart! 🛒");
        } catch (error) {
            toast.error("Failed to add to cart");
        }
    };



    const fetchProducts = async () => {
        const res = await getAdminProducts();
        setProducts(res.data.products);
    };

    useEffect(() => {
        fetchSingleProduct();
        fetchProducts();
    }, [id]);

    if (!product) {
        return (
            <div className="text-center py-20 text-lg font-semibold">
                Loading product...
            </div>
        );
    }

    const oldPrice = product.discount
        ? Math.round(product.price / (1 - product.discount / 100))
        : product.price;

    const saveAmount = oldPrice - product.price;

    return (
        <>
            <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-10">

                <div>
                    <div className="border rounded-xl p-6 mb-4">
                        <img src={mainImg} className="w-full h-80 object-contain" />
                    </div>

                    <div className="flex gap-3 mt-4">
                        {[product.image].map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                onClick={() => setMainImg(img)}
                                className={`h-20 w-20 object-contain border rounded cursor-pointer ${mainImg === img && "ring-2 ring-blue-500"
                                    }`}
                            />
                        ))}
                    </div>

                </div>

                <div key={product._id}>
                    <div className="flex items-center gap-2 mb-2 text-yellow-400">
                        ★★★★☆ <span className="text-sm text-gray-500">5 reviews</span>
                    </div>

                    <h1 className="text-2xl font-bold mb-2">{product?.name}</h1>

                    <p className="text-gray-600 mb-4">{product.description}
                    </p>

                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-3xl font-bold">${product?.price}</span>
                        <span className="line-through text-gray-400">${oldPrice}</span>
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                            Save ${saveAmount}
                        </span>
                    </div>

                    <p className="text-sm text-gray-500 mb-3">
                        Free shipping on orders over $299
                    </p>

                    <p className="text-green-600 font-medium mb-6">
                        ✔ In Stock – Ready to Ship
                    </p>


                    <div className="flex items-center gap-4 mb-6">
                        <span>Quantity:</span>
                        <div className="flex border rounded">
                            <button
                                className="px-3"
                                onClick={() => qty > 1 && setQty(qty - 1)}
                            >
                                -
                            </button>
                            <span className="px-4">{qty}</span>
                            <button
                                className="px-3"
                                onClick={() => setQty(qty + 1)}
                            >
                                +
                            </button>
                        </div>
                    </div>

                    <div className="flex gap-4 mb-6">
                        <button onClick={() => handleAddToCart(product)} className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
                            🛒 Add to Cart
                        </button>
                        <button className="flex-1 border py-3 rounded-lg" onClick={() =>
                            navigate("/checkout-1", {
                                state: {
                                    type: "buynow",
                                    product,
                                    qty,
                                },
                            })
                        }>
                            Buy Now
                        </button>
                    </div>

                    <div className="grid grid-cols-4 gap-4 text-center text-sm text-gray-500">
                        <div>🚚 Free Shipping</div>
                        <div>🛡 OEM Warranty</div>
                        <div>↩ 30-Day Returns</div>
                        <div>🔒 Secure Pay</div>
                    </div>
                </div>
            </div>

            <section className="mt-20 max-w-7xl mx-auto mb-6">
                <h2 className="text-xl font-bold text-[#0F172A] mb-6">
                    Related Products
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.slice(0, 4).map((product) => (
                        <Link
                            key={product._id}
                            to={`/product/${product._id}`}
                            className="bg-white border border-[#E5E7EB] rounded-xl p-4 hover:shadow-md transition block"
                        >
                            <div className="bg-[#F8FAFC] rounded-lg p-4 mb-3">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-28 mx-auto object-contain"
                                />
                            </div>

                            <h3 className="text-sm font-medium text-[#0F172A] mb-1 line-clamp-2">
                                {product.name}
                            </h3>

                            <p className="text-sm font-semibold text-[#0F172A]">
                                ${product.price}
                            </p>
                        </Link>
                    ))}
                </div>
            </section>

        </>
    );
}
