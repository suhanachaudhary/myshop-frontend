
import { useCart } from "../context/CartContext";

const Checkout = () => {
    const { cartItems, increaseQty, decreaseQty, total } = useCart();

    const TAX_RATE = 0.08;
    const tax = total * TAX_RATE;
    const grandTotal = total + tax;

    return (
        <div className="bg-[#F8FAFC] min-h-screen py-10">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-[#0F172A]">
                            Secure Checkout
                        </h1>
                        <p className="text-sm text-gray-500">
                            Complete your order in 5 simple steps
                        </p>
                    </div>
                    <span className="text-green-600 text-sm font-medium">
                        🔒 SSL Secured
                    </span>
                </div>

                <div className="bg-white rounded-xl p-6 mb-6 shadow-sm flex justify-between text-center text-sm">
                    {[
                        "Cart Review",
                        "Customer Info",
                        "Billing Address",
                        "Payment",
                        "Review Order",
                    ].map((step, i) => (
                        <div key={i} className="flex-1">
                            <div
                                className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center mb-2
                ${i === 0 ? "bg-[#0284C7] text-white" : "border text-gray-400"}`}
                            >
                                {i + 1}
                            </div>
                            <p className={`${i === 0 ? "font-semibold" : "text-gray-400"}`}>
                                {step}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-3 gap-6">

                    <div className="col-span-1 md:col-span-2 space-y-4">

                        <div className="bg-blue-50 text-blue-700 p-3 rounded text-sm">
                            ⚠ Fraud Protection: Maximum 3 orders per email per day and 5 units
                            per product.
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-sm">
                            <h2 className="font-bold mb-4">
                                Review Your Cart ({cartItems.length} items)
                            </h2>

                            {cartItems.map(item => (
                                <div
                                    key={item.product._id}
                                    className="flex items-center gap-4 border-b py-4"
                                >
                                    <img
                                        src={item.product.image || item.data.image}
                                        className="w-20 h-20 object-contain"
                                        alt=""
                                    />

                                    <div className="flex-1">
                                        <h3 className="font-medium text-sm">
                                            {item.product.name || item.data.name}
                                        </h3>
                                        <p className="text-xs text-gray-500">
                                            ₹{item.product.price || item.data.price} each
                                        </p>

                                        <div className="flex items-center gap-2 mt-2">
                                            <button
                                                onClick={() => decreaseQty(item.product._id || item.data._id)}
                                                className="border px-2 rounded"
                                            >
                                                −
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button
                                                onClick={() => increaseQty(item.product._id || item.data._id)}
                                                className="border px-2 rounded"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    <div className="font-semibold">
                                        ₹{item.product.price * item.quantity || item.data.price * item.quantity}
                                    </div>
                                </div>
                            ))}

                            <div className="flex justify-end mt-4">
                                <button className="bg-[#0284C7] text-white px-6 py-2 rounded-lg flex items-center gap-2">
                                    Continue →
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm h-fit">
                        <h2 className="font-bold mb-4">Order Summary</h2>

                        {cartItems.map(item => (
                            <div
                                key={item.product._id}
                                className="flex justify-between text-sm mb-2"
                            >
                                <span>{item.product.name}</span>
                                <span>₹{item.product.price}</span>
                            </div>
                        ))}

                        <hr className="my-3" />

                        <div className="flex justify-between text-sm mb-1">
                            <span>Subtotal</span>
                            <span>₹{total.toFixed(2)}</span>
                        </div>

                        <div className="flex justify-between text-sm mb-1">
                            <span>Tax (8%)</span>
                            <span>₹{tax.toFixed(2)}</span>
                        </div>

                        <div className="flex justify-between font-bold text-lg mt-2">
                            <span>Total</span>
                            <span>₹{grandTotal.toFixed(2)}</span>
                        </div>

                        <div className="mt-4 text-sm text-green-600 space-y-1">
                            <p>✔ Secure SSL encrypted checkout</p>
                            <p>✔ Fast & reliable delivery</p>
                            <p>✔ 24/7 customer support</p>
                        </div>

                        <div className="bg-blue-50 p-3 rounded text-sm mt-4">
                            <p className="font-medium">Need Help?</p>
                            <p>📞 (518) 417-1344</p>
                            <p>✉ support@laserproguide.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
