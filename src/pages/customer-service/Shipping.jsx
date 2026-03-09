import React from 'react';
import { Truck, Clock, ShieldCheck } from 'lucide-react';

const Shipping = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Shipping Rates & Policies</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We offer flexible shipping options to get your purchases to you as quickly as possible.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-3xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
          <Truck size={48} className="mx-auto text-black mb-6" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Standard Shipping</h3>
          <p className="text-3xl font-extrabold text-green-600 mb-4">FREE</p>
          <p className="text-gray-500">3-5 Business Days</p>
          <p className="text-sm text-gray-400 mt-4">Available on all orders over $50.</p>
        </div>

        <div className="bg-black p-8 rounded-3xl border border-gray-900 text-center hover:shadow-lg transition-shadow relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-bl-xl">POPULAR</div>
          <Clock size={48} className="mx-auto text-white mb-6" />
          <h3 className="text-xl font-bold mb-2">Express Shipping</h3>
          <p className="text-3xl font-extrabold mb-4">$9.99</p>
          <p className="text-gray-300">1-2 Business Days</p>
          <p className="text-sm text-gray-400 mt-4">Get it faster with priority processing.</p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
          <ShieldCheck size={48} className="mx-auto text-black mb-6" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Same Day Delivery</h3>
          <p className="text-3xl font-extrabold text-gray-900 mb-4">$19.99</p>
          <p className="text-gray-500">Order by 2 PM</p>
          <p className="text-sm text-gray-400 mt-4">Available in select metropolitan areas.</p>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
