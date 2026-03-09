import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const LoginSecurity = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Shopper',
    email: 'user@shoorashop.com',
    phone: '+1 (555) 123-4567',
    password: '••••••••'
  });

  const handleSave = (e) => {
    e.preventDefault();
    setIsEditing(false);
    toast.success('Security settings updated successfully!');
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Login & Security</h1>
      
      <div className="bg-white border text-left border-gray-200 rounded-3xl overflow-hidden shadow-sm">
        {isEditing ? (
          <form onSubmit={handleSave} className="p-8 space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
              <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-black" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
              <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-black" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
              <input type="text" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-black" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
              <input type="password" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-black" />
            </div>
            <div className="flex gap-4 pt-4">
              <button type="submit" className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">Save Changes</button>
              <button type="button" onClick={() => setIsEditing(false)} className="px-6 py-3 bg-gray-100 text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors">Cancel</button>
            </div>
          </form>
        ) : (
          <div className="divide-y divide-gray-200">
            <div className="p-8 flex justify-between items-center group hover:bg-gray-50 transition-colors">
              <div>
                <h3 className="font-bold text-gray-900">Name</h3>
                <p className="text-gray-500 mt-1">{formData.name}</p>
              </div>
              <button onClick={() => setIsEditing(true)} className="px-4 py-2 text-sm border border-gray-300 rounded-lg font-semibold hover:bg-gray-200 transition-colors">Edit</button>
            </div>
            <div className="p-8 flex justify-between items-center group hover:bg-gray-50 transition-colors">
              <div>
                <h3 className="font-bold text-gray-900">Email</h3>
                <p className="text-gray-500 mt-1">{formData.email}</p>
              </div>
              <button onClick={() => setIsEditing(true)} className="px-4 py-2 text-sm border border-gray-300 rounded-lg font-semibold hover:bg-gray-200 transition-colors">Edit</button>
            </div>
            <div className="p-8 flex justify-between items-center group hover:bg-gray-50 transition-colors">
              <div>
                <h3 className="font-bold text-gray-900">Phone Number</h3>
                <p className="text-gray-500 mt-1">{formData.phone}</p>
              </div>
              <button onClick={() => setIsEditing(true)} className="px-4 py-2 text-sm border border-gray-300 rounded-lg font-semibold hover:bg-gray-200 transition-colors">Edit</button>
            </div>
            <div className="p-8 flex justify-between items-center group hover:bg-gray-50 transition-colors">
              <div>
                <h3 className="font-bold text-gray-900">Password</h3>
                <p className="text-gray-500 mt-1">{formData.password}</p>
              </div>
              <button onClick={() => setIsEditing(true)} className="px-4 py-2 text-sm border border-gray-300 rounded-lg font-semibold hover:bg-gray-200 transition-colors">Edit</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSecurity;
