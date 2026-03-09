import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Plus, Edit2, Trash2 } from 'lucide-react';

const YourAddresses = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "Shopper Doe",
      street: "123 Commerce Avenue, Suite 100",
      city: "San Francisco",
      state: "CA",
      zip: "94107",
      country: "United States",
      phone: "+1 (555) 123-4567",
      isDefault: true
    }
  ]);

  const handleRemove = (id) => {
    setAddresses(addresses.filter(addr => addr.id !== id));
    toast.success("Address removed successfully!");
  };

  const handleSetDefault = (id) => {
    setAddresses(addresses.map(addr => ({
      ...addr,
      isDefault: addr.id === id
    })));
    toast.success("Default address updated!");
  };

  const handleAddMock = () => {
    const newAddr = {
      id: Date.now(),
      name: "Shopper Doe",
      street: "456 Market Street, Apt 12B",
      city: "San Francisco",
      state: "CA",
      zip: "94104",
      country: "United States",
      phone: "+1 (555) 987-6543",
      isDefault: false
    };
    setAddresses([...addresses, newAddr]);
    toast.success("New address added!");
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900">Your Addresses</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Add New Address Card */}
        <div 
          onClick={handleAddMock}
          className="h-72 border-2 border-dashed border-gray-300 rounded-3xl flex flex-col items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-400 hover:bg-blue-50 cursor-pointer transition-all group"
        >
          <Plus size={48} className="mb-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
          <h3 className="font-bold text-lg">Add Address</h3>
        </div>

        {/* Saved Addresses */}
        {addresses.map((address) => (
          <div key={address.id} className="h-72 bg-white border border-gray-200 rounded-3xl p-8 flex flex-col relative shadow-sm hover:shadow-md transition-shadow">
            {address.isDefault && (
              <span className="absolute top-4 right-4 bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full">
                Default
              </span>
            )}
            <h3 className="font-bold text-lg text-gray-900 mb-4">{address.name}</h3>
            <div className="text-gray-600 text-sm space-y-1 mb-auto">
              <p>{address.street}</p>
              <p>{address.city}, {address.state} {address.zip}</p>
              <p>{address.country}</p>
              <p className="mt-2">Phone number: {address.phone}</p>
            </div>
            <div className="flex items-center gap-4 mt-6 pt-4 border-t border-gray-100">
              <button className="text-blue-600 hover:underline text-sm font-semibold flex items-center gap-1">
                <Edit2 size={14} /> Edit
              </button>
              <span className="text-gray-300">|</span>
              <button 
                onClick={() => handleRemove(address.id)}
                className="text-red-600 hover:underline text-sm font-semibold flex items-center gap-1"
              >
                <Trash2 size={14} /> Remove
              </button>
              {!address.isDefault && (
                <>
                  <span className="text-gray-300">|</span>
                  <button onClick={() => handleSetDefault(address.id)} className="text-gray-600 hover:underline text-sm font-semibold">
                    Set Default
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourAddresses;
