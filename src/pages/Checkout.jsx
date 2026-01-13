import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  selectCartItems,
  selectCartTotal,
  selectCartItemsCount,
  updateCartQuantity,
  removeFromCart,
} from "../store/slices/cartSlice";
import { Trash2, ShieldCheck, Truck, HeadphonesIcon, ChevronRight, MapPin, CreditCard, User, Mail, Phone } from "lucide-react";
import { Button, Input, Container, QuantityControl, EmptyState } from "../components/ui";

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const totalItems = useSelector(selectCartItemsCount);

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Customer Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    // Shipping Address
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
    // Payment
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  const TAX_RATE = 0.08;
  const SHIPPING_FEE = total >= 299 ? 0 : 15;
  const tax = total * TAX_RATE;
  const grandTotal = total + tax + SHIPPING_FEE;

  const steps = [
    { number: 1, title: "Cart Review", icon: "🛒" },
    { number: 2, title: "Shipping Info", icon: "📦" },
    { number: 3, title: "Payment", icon: "💳" },
    { number: 4, title: "Review", icon: "✓" },
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleIncreaseQty = (productId) => {
    const isProductObject = typeof cartItems[0]?.product === 'object';
    const id = isProductObject ? productId : productId;
    dispatch(updateCartQuantity({ productId: id, delta: 1 }));
  };

  const handleDecreaseQty = (productId) => {
    const isProductObject = typeof cartItems[0]?.product === 'object';
    const id = isProductObject ? productId : productId;
    dispatch(updateCartQuantity({ productId: id, delta: -1 }));
  };

  const handleRemoveItem = (productId) => {
    const isProductObject = typeof cartItems[0]?.product === 'object';
    const id = isProductObject ? productId : productId;
    dispatch(removeFromCart(id));
  };

  // Redirect if cart is empty
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
        <Container size="sm">
          <EmptyState
            icon="🛒"
            title="Your cart is empty"
            description="Add some products to proceed with checkout"
            actionLabel="Continue Shopping"
            onAction={() => navigate("/shop")}
          />
        </Container>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-10">
      <Container>
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Secure Checkout
            </h1>
            <p className="text-gray-600 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-green-600" />
              <span>256-bit SSL Encrypted Payment</span>
            </p>
          </div>
          <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-xl border border-green-200">
            <span className="text-2xl">🔒</span>
            <span className="font-semibold">SSL Secured</span>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm border border-gray-200">
          <div className="flex justify-between items-center">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-xl mb-2 transition-all duration-300 ${
                      currentStep >= step.number
                        ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-lg scale-110"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {step.icon}
                  </div>
                  <p
                    className={`text-xs sm:text-sm font-medium text-center ${
                      currentStep >= step.number ? "text-blue-600" : "text-gray-400"
                    }`}
                  >
                    {step.title}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`h-1 flex-1 mx-2 rounded-full transition-all duration-300 ${
                      currentStep > step.number ? "bg-blue-600" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Step 1: Cart Review */}
            {currentStep === 1 && (
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span>🛒</span>
                  Review Your Cart ({cartItems.length} items)
                </h2>

                <div className="space-y-4">
                  {cartItems.map((item, index) => {
                    const isProductObject = typeof item?.product === 'object' && item?.product !== null;
                    const productData = isProductObject ? item.product : item?.data;
                    const productId = isProductObject ? item.product._id : item?.product;
                    const itemPrice = (productData?.price || 0) * (item?.quantity || 0);

                    return (
                      <div
                        key={productId}
                        className="flex gap-4 p-4 border-2 border-gray-200 rounded-xl hover:border-blue-300 transition-all duration-300 hover:shadow-md"
                      >
                        <img
                          src={productData?.image}
                          alt={productData?.name}
                          className="w-24 h-24 object-contain rounded-lg bg-gray-50 p-2"
                        />

                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-gray-900 mb-1 line-clamp-2">
                            {productData?.name}
                          </h3>
                          <p className="text-sm text-gray-600 mb-3">
                            ${(productData?.price || 0).toFixed(2)} each
                          </p>

                          <QuantityControl
                            quantity={item?.quantity}
                            onIncrease={() => handleIncreaseQty(productId)}
                            onDecrease={() => handleDecreaseQty(productId)}
                            size="md"
                          />
                        </div>

                        <div className="flex flex-col items-end justify-between">
                          <button
                            onClick={() => handleRemoveItem(productId)}
                            className="text-gray-400 hover:text-red-500 transition-colors p-2"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                          <p className="font-bold text-xl text-blue-600">
                            ${itemPrice.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  className="w-full mt-6"
                  onClick={() => setCurrentStep(2)}
                  icon={<ChevronRight className="w-5 h-5" />}
                >
                  Continue to Shipping
                </Button>
              </div>
            )}

            {/* Step 2: Shipping Info */}
            {currentStep === 2 && (
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span>📦</span>
                  Shipping Information
                </h2>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="First Name"
                      icon={<User className="w-4 h-4" />}
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                    />
                    <Input
                      label="Last Name"
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                    />
                  </div>

                  <Input
                    label="Email Address"
                    icon={<Mail className="w-4 h-4" />}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john.doe@example.com"
                  />

                  <Input
                    label="Phone Number"
                    icon={<Phone className="w-4 h-4" />}
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(555) 123-4567"
                  />

                  <Input
                    label="Street Address"
                    icon={<MapPin className="w-4 h-4" />}
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="123 Main Street"
                  />

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <Input
                      label="City"
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="New York"
                    />
                    <Input
                      label="State"
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      placeholder="NY"
                    />
                    <Input
                      label="ZIP Code"
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      placeholder="10001"
                    />
                  </div>
                </form>

                <div className="flex gap-4 mt-6">
                  <Button
                    variant="secondary"
                    size="md"
                    className="flex-1"
                    onClick={() => setCurrentStep(1)}
                  >
                    Back
                  </Button>
                  <Button
                    variant="primary"
                    size="md"
                    className="flex-1"
                    onClick={() => setCurrentStep(3)}
                    icon={<ChevronRight className="w-5 h-5" />}
                  >
                    Continue to Payment
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Payment */}
            {currentStep === 3 && (
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span>💳</span>
                  Payment Information
                </h2>

                <form className="space-y-4">
                  <Input
                    label="Card Number"
                    icon={<CreditCard className="w-4 h-4" />}
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    placeholder="1234 5678 9012 3456"
                    maxLength="19"
                  />

                  <Input
                    label="Cardholder Name"
                    type="text"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      label="Expiry Date"
                      type="text"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      placeholder="MM/YY"
                      maxLength="5"
                    />
                    <Input
                      label="CVV"
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      placeholder="123"
                      maxLength="4"
                    />
                  </div>
                </form>

                <div className="flex gap-4 mt-6">
                  <Button
                    variant="secondary"
                    size="md"
                    className="flex-1"
                    onClick={() => setCurrentStep(2)}
                  >
                    Back
                  </Button>
                  <Button
                    variant="primary"
                    size="md"
                    className="flex-1"
                    onClick={() => setCurrentStep(4)}
                    icon={<ChevronRight className="w-5 h-5" />}
                  >
                    Review Order
                  </Button>
                </div>
              </div>
            )}

            {/* Step 4: Review */}
            {currentStep === 4 && (
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span>✓</span>
                  Review & Place Order
                </h2>

                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <h3 className="font-bold text-gray-900 mb-3">Shipping Address</h3>
                    <p className="text-gray-700">
                      {formData.firstName} {formData.lastName}<br />
                      {formData.address}<br />
                      {formData.city}, {formData.state} {formData.zipCode}
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4">
                    <h3 className="font-bold text-gray-900 mb-3">Payment Method</h3>
                    <p className="text-gray-700">
                      Card ending in {formData.cardNumber.slice(-4)}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 mt-6">
                  <Button
                    variant="secondary"
                    size="md"
                    className="flex-1"
                    onClick={() => setCurrentStep(3)}
                  >
                    Back
                  </Button>
                  <Button
                    variant="success"
                    size="md"
                    className="flex-1"
                    onClick={() => alert("Order placed successfully! (Demo)")}
                  >
                    Place Order ${grandTotal.toFixed(2)}
                  </Button>
                </div>
              </div>
            )}

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
                <ShieldCheck className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-xs font-semibold text-gray-700">Secure Payment</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
                <Truck className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-xs font-semibold text-gray-700">Fast Delivery</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
                <HeadphonesIcon className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <p className="text-xs font-semibold text-gray-700">24/7 Support</p>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 sticky top-4">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6">
                {cartItems.slice(0, 3).map((item) => {
                  const isProductObject = typeof item?.product === 'object' && item?.product !== null;
                  const productData = isProductObject ? item.product : item?.data;
                  const productId = isProductObject ? item.product._id : item?.product;

                  return (
                    <div key={productId} className="flex justify-between text-sm">
                      <span className="text-gray-700 line-clamp-1">
                        {productData?.name} × {item?.quantity}
                      </span>
                      <span className="font-semibold text-gray-900">
                        ${((productData?.price || 0) * item?.quantity).toFixed(2)}
                      </span>
                    </div>
                  );
                })}
                {cartItems.length > 3 && (
                  <p className="text-sm text-gray-500">+{cartItems.length - 3} more items</p>
                )}
              </div>

              <div className="border-t-2 border-gray-200 pt-4 space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal ({totalItems} items)</span>
                  <span className="font-semibold">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className={`font-semibold ${SHIPPING_FEE === 0 ? 'text-green-600' : ''}`}>
                    {SHIPPING_FEE === 0 ? 'FREE' : `$${SHIPPING_FEE.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax (8%)</span>
                  <span className="font-semibold">${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t-2 border-gray-200 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Total</span>
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    ${grandTotal.toFixed(2)}
                  </span>
                </div>
              </div>

              {total < 299 && (
                <div className="bg-blue-50 rounded-xl p-4 mb-6 border border-blue-200">
                  <p className="text-sm text-blue-700">
                    <strong>💡 Tip:</strong> Add ${(299 - total).toFixed(2)} more for FREE shipping!
                  </p>
                </div>
              )}

              <div className="space-y-2 text-xs text-gray-600">
                <p className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> Secure checkout
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> Money-back guarantee
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-green-600">✓</span> Easy returns within 30 days
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-2">Need Help?</p>
                <p className="text-sm text-gray-600">📞 (518) 417-1344</p>
                <p className="text-sm text-gray-600">✉️ support@myshop.com</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
