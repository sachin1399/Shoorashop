import React, { useState } from 'react';
import { Search, Heart, Gift, Loader2 } from 'lucide-react';
import { toast } from 'react-hot-toast';

const RegistryGifting = () => {
  const [searchName, setSearchName] = useState('');
  const [searchType, setSearchType] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  const handleSearch = () => {
    if (!searchName.trim()) {
      toast.error("Please enter a name to search.");
      return;
    }
    if (!searchType) {
      toast.error("Please select an event type.");
      return;
    }

    setIsSearching(true);
    // Simulate network delay
    setTimeout(() => {
      setIsSearching(false);
      toast.error(`No registry found for "${searchName}" under ${searchType}.`);
    }, 1500);
  };

  const handleCreate = (type) => {
    setIsCreating(type);
    // Simulate creation delay
    setTimeout(() => {
      setIsCreating(false);
      toast.success(`Successfully created your new ${type} registry!`);
    }, 1500);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Registry & Gifting
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Celebrate life's biggest moments. Create a registry to let your loved ones know exactly what you need, or find a registry to start gifting.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Find a Registry */}
        <div className="bg-[#EEF2FC] rounded-3xl p-10 flex flex-col items-center text-center">
          <div className="bg-white p-4 rounded-full text-blue-600 mb-6 shadow-sm">
            <Search size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-4">Find a Registry</h3>
          <p className="text-gray-600 mb-8">
            Search for an upcoming wedding, baby shower, or birthday to find the perfect gift they actually want.
          </p>
          
          <div className="w-full space-y-4">
            <input 
              type="text" 
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              placeholder="Registrant's First or Last Name" 
              className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-blue-400"
            />
            <select 
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-blue-400 bg-white"
            >
              <option value="">Select Event Type</option>
              <option value="Wedding">Wedding</option>
              <option value="Baby Shower">Baby Shower</option>
              <option value="Custom Event">Custom Event</option>
            </select>
            <button 
              onClick={handleSearch}
              disabled={isSearching}
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center disabled:opacity-70"
            >
              {isSearching ? <Loader2 className="animate-spin w-5 h-5" /> : "Search Registry"}
            </button>
          </div>
        </div>

        {/* Create a Registry */}
        <div className="bg-[#FAE9E9] rounded-3xl p-10 flex flex-col items-center text-center">
           <div className="bg-white p-4 rounded-full text-red-500 mb-6 shadow-sm">
            <Heart size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-4">Create a Registry</h3>
          <p className="text-gray-600 mb-8 flex-1">
            Planning a big event? Create a custom registry in minutes, add products from our store, and share it with friends and family.
          </p>
          
          <div className="w-full space-y-4">
            <button 
              onClick={() => handleCreate('Wedding')}
              disabled={isCreating}
              className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center disabled:opacity-70"
            >
              {isCreating === 'Wedding' ? <Loader2 className="animate-spin w-5 h-5" /> : "Wedding Registry"}
            </button>
            <button 
              onClick={() => handleCreate('Baby')}
              disabled={isCreating}
              className="w-full py-3 bg-gray-200 text-black font-semibold rounded-lg hover:bg-gray-300 transition-colors flex items-center justify-center disabled:opacity-70"
            >
              {isCreating === 'Baby' ? <Loader2 className="animate-spin w-5 h-5" /> : "Baby Registry"}
            </button>
            <button 
              onClick={() => handleCreate('Custom')}
              disabled={isCreating}
              className="w-full py-3 bg-white text-black font-semibold rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors flex items-center justify-center disabled:opacity-70"
            >
              {isCreating === 'Custom' ? <Loader2 className="animate-spin w-5 h-5" /> : "Custom Registry"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistryGifting;
