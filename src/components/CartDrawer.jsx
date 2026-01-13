
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartDrawer = () => {

    const navigate = useNavigate();

    const {
        cartOpen,
        setCartOpen,
        cartItems,
        increaseQty,
        decreaseQty,
        removeItem,
        clearCart,
        total,
    } = useCart();

    if (!cartOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/40 z-50">
            <div className="absolute right-0 top-0 w-[400px] h-full bg-white p-4 w-full sm:w-[420px] lg:w-[400px]
          flex flex-col">

                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <h2 className="text-lg font-bold">
                        Shopping Cart ({cartItems.length})
                    </h2>
                    <button onClick={() => setCartOpen(false)}>✖</button>
                </div>

                <button
                    onClick={clearCart}
                    className="text-red-500 text-sm mt-2"
                >
                    🗑 Clear All
                </button>

                <div className="mt-4 space-y-4 flex-1 overflow-y-auto
            px-4 py-4">

                    {cartItems.length === 0 && (
                        <p className="text-center text-gray-500 mt-10">
                            Your cart is empty
                        </p>
                    )}

                    {cartItems.map((item) => (
                        <div
                            key={item._id}
                            className="border border-gray-200 rounded-lg p-3 flex gap-3"
                        >
                            <img
                                src={item?.product?.image || item?.data?.image}
                                alt=""
                                className="w-16 h-16 object-contain"
                            />

                            <div className="flex-1">
                                <h4 className="text-sm font-medium">
                                    {item?.product?.name || item?.data?.name}
                                </h4>

                                <p className="font-bold">
                                    ${item?.product?.price * item?.quantity || item?.data?.price * item?.quantity}
                                </p>

                                <div className="flex items-center gap-2 mt-2">
                                    <button
                                        onClick={() => decreaseQty(item?.product._id || item?.data._id)}
                                        className="border px-2"
                                    >
                                        −
                                    </button>

                                    <span>{item?.quantity}</span>

                                    <button
                                        onClick={() => increaseQty(item?.product._id || item?.data._id)}
                                        className="border px-2"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <button
                                onClick={() => removeItem(item?.product._id || item?.data._id)}
                                className="text-red-500"
                            >
                                ✖
                            </button>
                        </div>
                    ))}
                </div>

                <div className="absolute bottom-0 left-0 w-full p-4 border-t border-gray-200 bg-gray-100">
                    <div className="flex justify-between font-bold text-lg">
                        <span>Total:</span>
                        <span>${total.toFixed(2)}</span>
                    </div>

                    <button className="w-full bg-blue-600 text-white py-3 rounded mt-3" onClick={() => {
                        setCartOpen(false);
                        navigate("/checkout");
                    }}>
                        Checkout (${total.toFixed(2)})
                    </button>

                    <button
                        onClick={() => setCartOpen(false)}
                        className="w-full border py-3 rounded mt-2"
                    >
                        Continue Shopping
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartDrawer;
