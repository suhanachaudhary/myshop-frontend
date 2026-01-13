
import { useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function Checkout1() {
    const location = useLocation();
    const { cartItems } = useCart();

    const isBuyNow = location.state?.type === "buynow";
    const buyNowProduct = location.state?.product;
    const buyNowQty = location.state?.qty || 1;

    const items = isBuyNow
        ? [{ product: buyNowProduct, quantity: buyNowQty }]
        : cartItems;

    const subtotal = items.reduce(
        (sum, i) => sum + i.product.price * i.quantity,
        0
    );

    const taxRate = 0.08;
    const tax = +(subtotal * taxRate).toFixed(2);
    const shipping = subtotal > 299 ? 0 : 40;
    const total = +(subtotal + tax + shipping).toFixed(2);

    return (
        <div className="max-w-7xl mx-auto p-6">

            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-bold">Secure Checkout</h1>
                    <p className="text-gray-500 text-sm">
                        Complete your order in 5 simple steps
                    </p>
                </div>
                <span className="text-green-600 text-sm font-medium">
                    🔒 SSL Secured
                </span>
            </div>

            <div className="flex justify-between items-center mb-8">
                {["Cart", "Customer", "Billing", "Payment", "Review"].map((s, i) => (
                    <div key={i} className="flex-1 flex items-center">
                        <div
                            className={`h-10 w-10 flex items-center justify-center rounded-full ${i === 0 ? "bg-black text-white" : "border text-gray-400"
                                }`}
                        >
                            {i + 1}
                        </div>
                        {i !== 4 && <div className="flex-1 h-px bg-gray-300 mx-2" />}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* LEFT */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-blue-50 border border-blue-200 text-blue-700 p-3 rounded text-sm">
                        <strong>Fraud Protection:</strong> Max 3 orders/day per email
                    </div>

                    <div className="border rounded-lg p-6">
                        <h2 className="font-semibold mb-4">
                            Review Your Cart ({items.length} item)
                        </h2>

                        {items.map((item) => (
                            <div
                                key={item.product._id}
                                className="flex items-center gap-4 mb-6"
                            >
                                <img
                                    src={item.product.image}
                                    className="w-20 h-20 object-contain border rounded"
                                />

                                <div className="flex-1">
                                    <h3 className="font-medium">{item.product.name}</h3>
                                    <p className="text-sm text-gray-500">
                                        ₹{item.product.price} each
                                    </p>

                                    <p className="text-sm mt-1">
                                        Quantity: <strong>{item.quantity}</strong>
                                    </p>
                                </div>

                                <div className="font-semibold">
                                    ₹{(item.product.price * item.quantity).toFixed(2)}
                                </div>
                            </div>
                        ))}

                        <div className="text-right">
                            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                                Continue →
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border rounded-lg p-6 h-fit sticky top-6">
                    <h3 className="font-semibold mb-4">Order Summary</h3>

                    <div className="flex justify-between mb-2 text-sm">
                        <span>Subtotal</span>
                        <span>₹{subtotal.toFixed(2)}</span>
                    </div>

                    <div className="flex justify-between mb-2 text-sm">
                        <span>Tax (8%)</span>
                        <span>₹{tax}</span>
                    </div>

                    <div className="flex justify-between mb-2 text-sm">
                        <span>Shipping</span>
                        <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
                    </div>

                    <hr className="my-3" />

                    <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>₹{total}</span>
                    </div>

                    <ul className="text-sm text-gray-500 mt-4 space-y-2">
                        <li>🔒 Secure checkout</li>
                        <li>🚚 Fast delivery</li>
                        <li>↩ Easy returns</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}


