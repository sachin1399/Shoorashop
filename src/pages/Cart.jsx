import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Minus, Plus, Trash2, ArrowRight } from 'lucide-react';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="w-full max-w-7xl mx-auto px-6 py-16 flex flex-col items-center justify-center min-h-[50vh]">
        <div className="bg-gray-100 p-8 rounded-full mb-6">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
        <p className="text-gray-500 mb-8 max-w-md text-center">Looks like you haven't added anything to your cart yet. Browse our categories and find something you love!</p>
        <Link 
          to="/categories" 
          className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-colors flex items-center gap-2"
        >
          Start Shopping
          <ArrowRight size={20} />
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">Shopping Cart</h1>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Cart Items List */}
        <div className="flex-1 space-y-6">
          {cartItems.map((item) => {
            const priceVal = parseFloat(item.price.replace(/,/g, ''));
            const itemTotal = priceVal * item.quantity;

            return (
              <div key={item.id} className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-32 h-32 bg-gray-50 rounded-2xl flex items-center justify-center p-4 flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                </div>
                
                <div className="flex-1 w-full text-center sm:text-left">
                  <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2">{item.productName || item.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{item.productType || item.category || 'Accessories'}</p>
                  
                  <div className="flex items-center justify-center sm:justify-between w-full flex-wrap gap-4">
                    <div className="flex items-center bg-gray-100 rounded-full px-2 py-1">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white hover:shadow-sm transition-all"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-10 text-center font-semibold">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white hover:shadow-sm transition-all"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <div className="flex items-center gap-6">
                      <span className="font-bold text-xl">${itemTotal.toFixed(2)}</span>
                      <button 
                        onClick={() => removeFromCart(item.id, item.productName || item.name)}
                        className="w-10 h-10 flex items-center justify-center rounded-full text-red-500 hover:bg-red-50 transition-colors"
                        title="Remove item"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Order Summary Checkout Box */}
        <div className="w-full lg:w-96 flex-shrink-0">
          <div className="bg-gray-50 rounded-3xl p-8 sticky top-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal ({cartItems.reduce((acc, item) => acc + item.quantity, 0)} items)</span>
                <span className="font-semibold">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping estimate</span>
                <span className="font-semibold text-green-600">Free</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax estimate</span>
                <span className="font-semibold">${(cartTotal * 0.08).toFixed(2)}</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6 mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-bold">Order Total</span>
                <span className="text-2xl font-extrabold">${(cartTotal * 1.08).toFixed(2)}</span>
              </div>
              <p className="text-xs text-gray-500 text-right">Taxes included (8%)</p>
            </div>

            <Link 
              to="/checkout"
              className="w-full bg-black text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
            >
              Proceed to Checkout
              <ArrowRight size={20} />
            </Link>

            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path></svg>
              Secure checkout guarantee
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
