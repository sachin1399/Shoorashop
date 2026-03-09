import React from 'react';
import { Search, MessageCircle, Phone, Mail } from 'lucide-react';

const HelpCenter = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <div className="text-center mb-16 bg-gray-900 text-white rounded-[3rem] p-12 relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">How can we help you today?</h1>
          <div className="max-w-2xl mx-auto relative">
            <Search size={24} className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search for articles, topics, or issues..." 
              className="w-full pl-16 pr-6 py-4 rounded-full text-gray-900 border-none focus:outline-none focus:ring-4 focus:ring-yellow-400/50 text-lg"
            />
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              "Where is my order?",
              "How do I return an item?",
              "What forms of payment do you accept?",
              "How do I change my account password?",
              "Can I cancel an order after it has been placed?"
            ].map((faq, idx) => (
              <details key={idx} className="group bg-white border border-gray-200 rounded-2xl p-6 cursor-pointer">
                <summary className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors outline-none list-none flex justify-between items-center">
                  {faq}
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </details>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 p-6 rounded-2xl flex items-start gap-4 hover:shadow-md transition-shadow cursor-pointer">
              <div className="bg-gray-100 p-3 rounded-full text-black"><MessageCircle size={24} /></div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">Live Chat</h3>
                <p className="text-gray-500 text-sm mb-2">Available 24/7 for immediate assistance.</p>
                <span className="text-blue-600 font-semibold text-sm hover:underline">Start a Chat</span>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 p-6 rounded-2xl flex items-start gap-4 hover:shadow-md transition-shadow cursor-pointer">
              <div className="bg-gray-100 p-3 rounded-full text-black"><Phone size={24} /></div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">Phone Support</h3>
                <p className="text-gray-500 text-sm mb-2">Mon-Fri, 8am to 8pm EST.</p>
                <span className="text-black font-semibold text-sm">+1 (800) 123-4567</span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-2xl flex items-start gap-4 hover:shadow-md transition-shadow cursor-pointer">
              <div className="bg-gray-100 p-3 rounded-full text-black"><Mail size={24} /></div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">Email Us</h3>
                <p className="text-gray-500 text-sm mb-2">We aim to respond within 24 hours.</p>
                <span className="text-blue-600 font-semibold text-sm hover:underline">support@shoorashop.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
