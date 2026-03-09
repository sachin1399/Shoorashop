import React from 'react';
import { Gift, Mail, CreditCard } from 'lucide-react';

const GiftCards = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-4">
          ShooraShop Gift Cards
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          The perfect gift for any occasion. Choose from physical cards, e-gifts, or specialty cards.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* eGift Card */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
          <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
            <Mail size={32} />
          </div>
          <h3 className="text-xl font-bold mb-2">eGift Cards</h3>
          <p className="text-gray-500 mb-6 flex-1">
            Delivered instantly by email or text message. You can even choose a custom design and message!
          </p>
          <button className="w-full py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors">
            Shop eGift Cards
          </button>
        </div>

        {/* Physical Gift Card */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
            <Gift size={32} />
          </div>
          <h3 className="text-xl font-bold mb-2">Physical Gift Cards</h3>
          <p className="text-gray-500 mb-6 flex-1">
            A classic choice. Mail a real gift card for them to unwrap on their special day with free shipping.
          </p>
          <button className="w-full py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors">
            Shop By Mail
          </button>
        </div>

        {/* Specialty Gift Card */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
          <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-6">
            <CreditCard size={32} />
          </div>
          <h3 className="text-xl font-bold mb-2">Specialty Brand Cards</h3>
          <p className="text-gray-500 mb-6 flex-1">
            Give them an evening out or a shopping spree at their favorite restaurants and stores.
          </p>
          <button className="w-full py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors">
            Shop Brands
          </button>
        </div>
      </div>
    </div>
  );
};

export default GiftCards;
