import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CheckCircle2, ChevronLeft, CreditCard } from 'lucide-react';

const Checkout = () => {
  const { cartTotal, cartItems, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate API call for payment
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="w-full max-w-3xl mx-auto px-6 py-24 flex flex-col items-center justify-center text-center">
        <CheckCircle2 size={80} className="text-green-500 mb-6" />
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Payment Successful!</h1>
        <p className="text-gray-600 mb-8 text-lg">Thank you for your purchase. We've sent a confirmation email with your order details.</p>
        <Link to="/" className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-colors">
          Return to Homepage
        </Link>
      </div>
    );
  }

  const finalTotal = (cartTotal * 1.08).toFixed(2);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <Link to="/cart" className="inline-flex items-center text-gray-500 hover:text-black font-medium mb-8">
        <ChevronLeft size={20} className="mr-1" />
        Back to Cart
      </Link>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Payment Form Stub */}
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Checkout</h1>
          <form onSubmit={handlePayment} className="space-y-6">
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Information</h3>
              <input type="email" placeholder="Email address" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" required />
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Shipping Address</h3>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" required />
                <input type="text" placeholder="Last Name" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" required />
                <input type="text" placeholder="Address" className="col-span-2 w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" required />
                <input type="text" placeholder="City" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" required />
                <input type="text" placeholder="Postal Code" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" required />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Payment Details</h3>
              <div className="p-4 border border-gray-300 rounded-xl bg-gray-50 mb-4 flex items-center gap-3">
                 <CreditCard className="text-gray-500" />
                 <span className="text-gray-700 font-medium">Credit Card</span>
              </div>
              <input type="text" placeholder="Card Number" className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" required />
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="MM / YY" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" required />
                <input type="text" placeholder="CVC" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" required />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isProcessing || cartItems.length === 0}
              className="w-full bg-black text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors disabled:bg-gray-400"
            >
              {isProcessing ? 'Processing Payment...' : `Pay $${finalTotal}`}
            </button>
          </form>
        </div>

        {/* Order Summary Sidebar */}
        <div className="bg-gray-50 p-8 rounded-3xl h-fit">
          <h2 className="text-xl font-bold mb-6">Order Summary</h2>
          <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto pr-2">
            {cartItems.map(item => (
              <div key={item.id} className="flex gap-4 items-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-white rounded-lg p-2 border border-gray-200">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                  </div>
                  <span className="absolute -top-2 -right-2 bg-black text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                    {item.quantity}
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-gray-900 line-clamp-1">{item.productName || item.name}</h4>
                  <p className="text-gray-500 text-xs">${item.price}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-200 pt-4 space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Taxes (8%)</span>
              <span>${(cartTotal * 0.08).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-black mt-4 pt-4 border-t border-gray-200">
              <span>Total</span>
              <span>${finalTotal}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
