import React from 'react';
import { Package, User, CreditCard, Settings, MapPin, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const MyAccount = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      <div className="flex items-center gap-4 mb-12">
        <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
          <User size={40} className="text-gray-500" />
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">Welcome back, Shopper!</h1>
          <p className="text-gray-500 mt-1">user@shoorashop.com</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { icon: Package, title: 'Your Orders', desc: 'Track, return, or buy things again', link: '/track-order' },
          { icon: Settings, title: 'Login & Security', desc: 'Edit login, name, and mobile number', link: '/account/security' },
          { icon: MapPin, title: 'Your Addresses', desc: 'Edit addresses for orders and gifts', link: '/account/addresses' },
          { icon: CreditCard, title: 'Payment Methods', desc: 'Manage payment methods and settings', link: '#' },
          { icon: Heart, title: 'Your Lists', desc: 'View and manage your saved items', link: '/account/lists' },
        ].map((block, idx) => (
          <Link to={block.link} key={idx} className="bg-white border text-left border-gray-200 p-8 rounded-3xl hover:shadow-lg transition-shadow group flex items-start gap-4 cursor-pointer">
             <div className="p-3 bg-gray-50 rounded-full group-hover:bg-black group-hover:text-white transition-colors duration-300">
               <block.icon size={24} />
             </div>
             <div>
               <h3 className="text-xl font-bold text-gray-900 mb-2">{block.title}</h3>
               <p className="text-gray-500 text-sm leading-relaxed">{block.desc}</p>
             </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MyAccount;
