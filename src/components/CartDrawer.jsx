import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  closeCart,
  selectCartIsOpen,
  selectCartItems,
  selectCartTotal,
  selectCartItemsCount,
  updateCartQuantity,
  removeFromCart,
  clearCart,
} from "../store/slices/cartSlice";
import { ShoppingBag, Trash2, X, ShoppingCart, Package } from "lucide-react";
import { QuantityControl, Button, EmptyState } from "./ui";

const CartDrawer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isOpen = useSelector(selectCartIsOpen);
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const totalItems = useSelector(selectCartItemsCount);

  // Debug: Log cart items structure
  if (isOpen && cartItems.length > 0) {
    console.log('Cart Items:', cartItems);
    console.log('First item structure:', cartItems[0]);
  }

  if (!isOpen) return null;

  const handleCheckout = () => {
    dispatch(closeCart());
    navigate("/checkout");
  };

  const handleIncreaseQty = (productId) => {
    console.log('Increasing quantity for product:', productId);
    dispatch(updateCartQuantity({ productId, delta: 1 }));
  };

  const handleDecreaseQty = (productId) => {
    console.log('Decreasing quantity for product:', productId);
    dispatch(updateCartQuantity({ productId, delta: -1 }));
  };

  const handleRemoveItem = (productId) => {
    console.log('Removing product:', productId);
    dispatch(removeFromCart(productId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 animate-fadeIn"
      onClick={() => dispatch(closeCart())}
    >
      <div
        className="absolute right-0 top-0 h-full bg-gradient-to-b from-white to-gray-50 p-0 w-full sm:w-[460px] lg:w-[440px] flex flex-col shadow-2xl animate-slideInRight"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
          
          <div className="relative flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <ShoppingBag className="w-6 h-6" />
                <h2 className="text-2xl font-bold">Shopping Cart</h2>
              </div>
              <div className="flex items-center gap-4 text-blue-100">
                <span className="flex items-center gap-1.5 text-sm">
                  <Package className="w-4 h-4" />
                  {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
                </span>
                <span className="text-sm">
                  • {totalItems} {totalItems === 1 ? "product" : "products"}
                </span>
              </div>
            </div>
            <button
              onClick={() => dispatch(closeCart())}
              className="text-white hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:rotate-90"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Clear Cart Button */}
        {cartItems.length > 0 && (
          <div className="px-6 py-3 bg-white border-b border-gray-200">
            <button
              onClick={handleClearCart}
              className="text-red-500 hover:text-red-600 text-sm flex items-center gap-2 hover:bg-red-50 px-3 py-2 rounded-xl transition-all duration-300 font-medium"
            >
              <Trash2 className="w-4 h-4" />
              Clear All Items
            </button>
          </div>
        )}

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {cartItems.length === 0 && (
            <EmptyState
              icon={<ShoppingCart className="w-12 h-12 text-blue-600" />}
              title="Your cart is empty"
              description="Add some products to get started"
              actionLabel="Start Shopping"
              onAction={() => {
                dispatch(closeCart());
                navigate("/shop");
              }}
            />
          )}

          {cartItems.map((item, index) => {
            // Handle both local storage and server cart structures
            // Local storage: item.product = ID (string), item.data = product object
            // Server cart: item.product = product object with _id
            const isProductObject = typeof item?.product === 'object' && item?.product !== null;
            const productData = isProductObject ? item.product : item?.data;
            const productId = isProductObject ? item.product._id : item?.product;
            const itemPrice = (productData?.price || 0) * (item?.quantity || 0);

            // Safety check
            if (!productData || !productId) {
              console.warn('Invalid cart item:', item);
              return null;
            }

            return (
              <div
                key={productId}
                className="group bg-white border-2 border-gray-200 rounded-2xl p-4 flex gap-4 hover:shadow-xl hover:border-blue-300 transition-all duration-300 animate-slideInUp"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Product Image */}
                <div className="relative flex-shrink-0">
                  <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 p-2 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={productData?.image}
                      alt={productData?.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* Quick remove button */}
                  <button
                    onClick={() => handleRemoveItem(productId)}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-md opacity-0 group-hover:opacity-100"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>

                {/* Product Details */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-gray-800 line-clamp-2 mb-2 group-hover:text-blue-600 transition-colors">
                    {productData?.name}
                  </h4>

                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="text-xs text-gray-500">Unit Price</p>
                      <p className="text-sm font-semibold text-gray-700">
                        ${(productData?.price || 0).toFixed(2)}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">Total</p>
                      <p className="text-lg font-bold text-blue-600">
                        ${itemPrice.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center justify-between">
                    <QuantityControl
                      quantity={item?.quantity}
                      onIncrease={() => handleIncreaseQty(productId)}
                      onDecrease={() => handleDecreaseQty(productId)}
                      size="md"
                    />

                    <button
                      onClick={() => handleRemoveItem(productId)}
                      className="text-gray-400 hover:text-red-500 text-xs font-medium transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer / Checkout Section */}
        <div className="border-t-2 border-gray-200 bg-white p-6 space-y-4">
          {/* Order Summary */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 border-2 border-blue-200">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600 text-sm font-medium">Subtotal:</span>
              <span className="font-semibold text-gray-800">
                ${total.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600 text-sm font-medium">Shipping:</span>
              <span className="font-semibold text-green-600">FREE</span>
            </div>
            <div className="border-t-2 border-blue-200 my-2"></div>
            <div className="flex justify-between items-center">
              <span className="text-gray-900 font-bold text-lg">Total:</span>
              <span className="font-bold text-3xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                ${total.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <Button
            variant="primary"
            size="lg"
            className="w-full"
            onClick={handleCheckout}
            disabled={cartItems.length === 0}
            icon={<ShoppingBag className="w-5 h-5" />}
          >
            Proceed to Checkout
          </Button>

          <Button
            variant="secondary"
            size="md"
            className="w-full"
            onClick={() => dispatch(closeCart())}
          >
            Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
