import React, { useState } from 'react';
import { Search, Package, CheckCircle2, Truck } from 'lucide-react';

const TrackOrder = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setIsSearching(true);
    setTimeout(() => setIsSearching(false), 1500);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center min-h-[60vh]">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Track Your Order</h1>
      <p className="text-gray-500 mb-12 max-w-lg mx-auto">Enter your order number or tracking ID below to see the current status of your shipment.</p>
      
      <form onSubmit={handleSearch} className="max-w-2xl mx-auto flex gap-4 mb-20 relative">
         <Search size={24} className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" />
         <input 
           type="text" 
           placeholder="e.g. SH-123456789"
           className="w-full border-2 border-gray-200 rounded-full pl-16 pr-6 py-4 text-lg focus:outline-none focus:border-black transition-colors bg-white font-medium"
           value={trackingNumber}
           onChange={(e) => setTrackingNumber(e.target.value)}
         />
         <button type="submit" className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-colors shrink-0">
           {isSearching ? 'Tracking...' : 'Track Package'}
         </button>
      </form>

      {trackingNumber && !isSearching && (
        <div className="bg-white border border-gray-100 shadow-sm rounded-3xl p-8 max-w-3xl mx-auto text-left relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-green-500"></div>
          <div className="flex justify-between items-start border-b border-gray-100 pb-6 mb-8">
            <div>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Order Status</p>
              <h3 className="text-2xl font-extrabold text-green-600 flex items-center gap-2"><CheckCircle2 /> Shipped</h3>
            </div>
            <div className="text-right">
               <p className="text-sm text-gray-500 uppercase tracking-wider font-bold mb-1">Expected Delivery</p>
               <h3 className="text-xl font-bold text-gray-900">Tomorrow by 8:00 PM</h3>
            </div>
          </div>
          
          <div className="relative flex justify-between px-8 py-6">
             <div className="absolute top-1/2 left-10 right-10 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
             <div className="absolute top-1/2 left-10 w-1/2 h-1 bg-green-500 -translate-y-1/2 z-0"></div>

             <div className="relative z-10 flex flex-col items-center gap-3">
               <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center border-4 border-white shadow-sm"><Package size={20} /></div>
               <span className="text-sm font-bold text-gray-900">Ordered</span>
             </div>
             
             <div className="relative z-10 flex flex-col items-center gap-3">
               <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center border-4 border-white shadow-sm"><Truck size={20} /></div>
               <span className="text-sm font-bold text-gray-900">Shipped</span>
             </div>

             <div className="relative z-10 flex flex-col items-center gap-3">
               <div className="w-12 h-12 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center border-4 border-white shadow-sm"><CheckCircle2 size={20} /></div>
               <span className="text-sm font-medium text-gray-400">Delivered</span>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrackOrder;
