import React from 'react';
import { ArrowLeftRight, HelpCircle, PackageX } from 'lucide-react';
import { Link } from 'react-router-dom';

const Returns = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
      <PackageX size={64} className="mx-auto text-gray-400 mb-6" />
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Returns & Replacements</h1>
      <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
        We want you to be completely satisfied with your purchase. If you're not happy, you can return most items within 30 days of delivery for a full refund or exchange.
      </p>

      <div className="bg-white border border-gray-200 rounded-3xl p-8 mb-12 text-left">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Return an Item</h2>
        <ol className="space-y-6 list-decimal list-inside text-gray-700 text-lg">
          <li><strong>Go to Your Orders:</strong> Find the item you want to return and click "Return or Replace items".</li>
          <li><strong>Select a Reason:</strong> Choose the reason for your return from the drop-down menu.</li>
          <li><strong>Choose your Return Method:</strong> Select how you'd like to return the item (drop-off, pickup).</li>
          <li><strong>Print Label & Pack:</strong> Print your return label, pack your item securely, and attach the label.</li>
        </ol>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/track-order" className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
          <ArrowLeftRight size={20} />
          Start a Return
        </Link>
        <Link to="/help" className="bg-white border-2 border-gray-200 text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
          <HelpCircle size={20} />
          Return Policy Info
        </Link>
      </div>
    </div>
  );
};

export default Returns;
