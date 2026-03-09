import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-16 pb-8">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16">
        {/* Company Info */}
        <div className="space-y-6">
          <Link to="/" className="text-3xl font-extrabold tracking-tighter inline-block">
            Shoora<span className="text-blue-500">Shop</span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            Your one-stop destination for the best deals on electronics, fashion, beauty, and more. Quality products delivered straight to your door.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 transition-colors">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-700 transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6">Quick Links</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/todays-deals" className="hover:text-white transition-colors">Today's Deals</Link></li>
            <li><Link to="/categories" className="hover:text-white transition-colors">All Categories</Link></li>
            <li><Link to="/gift-cards" className="hover:text-white transition-colors">Gift Cards</Link></li>
            <li><Link to="/registry" className="hover:text-white transition-colors">Registry & Gifting</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className="text-lg font-bold mb-6">Customer Service</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><Link to="/account" className="hover:text-white transition-colors">My Account</Link></li>
            <li><Link to="/track-order" className="hover:text-white transition-colors">Track Your Order</Link></li>
            <li><Link to="/returns" className="hover:text-white transition-colors">Returns & Replacements</Link></li>
            <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping Rates & Policies</Link></li>
            <li><Link to="/help" className="hover:text-white transition-colors">Help Center</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-bold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-blue-500 mt-1 flex-shrink-0" />
              <span>123 Commerce Avenue, Suite 100, San Francisco, CA 94107</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-blue-500 flex-shrink-0" />
              <span>+1 (800) 123-4567</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-blue-500 flex-shrink-0" />
              <span>support@shoorashop.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20 mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between text-gray-500 text-xs sm:text-sm">
        <p>&copy; {new Date().getFullYear()} ShooraShop. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
