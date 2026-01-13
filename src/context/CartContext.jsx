
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const token = localStorage.getItem("token");

    useEffect(() => {
        if (token) {
            fetchDBCart();
        } else {
            loadLocalCart();
        }
    }, [token]);

    const loadLocalCart = () => {
        const localCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(localCart);
    };

    const saveLocalCart = (items) => {
        localStorage.setItem("cart", JSON.stringify(items));
        setCartItems(items);
    };

    const fetchDBCart = async () => {
        const res = await axios.get(
            "http://localhost:3000/api/cart",
            { headers: { Authorization: `Bearer ${token}` } }
        );
        setCartItems(res.data.cart);
    };

    const increaseQty = (id) => updateQty(id, +1);
    const decreaseQty = (id) => updateQty(id, -1);

    const updateQty = async (id, delta) => {
        if (!token) {
            let local = [...cartItems];
            const item = local.find(i => i.product === id);
            if (!item) return;

            item.quantity += delta;
            if (item.quantity <= 0)
                local = local.filter(i => i.product !== id);

            saveLocalCart(local);
            return;
        }

        await axios.put(
            "http://localhost:3000/api/cart/update",
            { productId: id, delta },
            { headers: { Authorization: `Bearer ${token}` } }
        );

        fetchDBCart();
    };

    const removeItem = async (id) => {
        if (!token) {
            saveLocalCart(cartItems.filter(i => i.product !== id));
            return;
        }

        await axios.delete(
            `http://localhost:3000/api/cart/remove/${id}`,
            { headers: { Authorization: `Bearer ${token}` } }
        );

        fetchDBCart();
    };

    const clearCart = () => {
        localStorage.removeItem("cart");
        setCartItems([]);
    };

    // const total = cartItems.reduce(
    //     (sum, i) => { sum + i.product.price * i.quantity || sum + i.data.price * i.quantity },
    //     0
    // );

    const total = cartItems.reduce((sum, i) => {
        const price = i.product?.price || i.data?.price || 0;
        return sum + price * i.quantity;
    }, 0);


    return (
        <CartContext.Provider
            value={{
                cartOpen,
                setCartOpen,
                cartItems,
                increaseQty,
                decreaseQty,
                removeItem,
                clearCart,
                total,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
