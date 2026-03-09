import React, { useState } from 'react';
import { Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { mockProducts } from '../../data/mockProducts';
import { useCart } from '../../context/CartContext';

const YourLists = () => {
  const { addToCart } = useCart();
  
  // Initialize list with some mock products (e.g., items 2, 4, and 7)
  const initialList = mockProducts.filter(p => [2, 4, 7].includes(p.id));
  const [savedItems, setSavedItems] = useState(initialList);

  const handleRemove = (id) => {
    setSavedItems(savedItems.filter(item => item.id !== id));
    toast.success("Item removed from your list!");
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">Your Saved Items</h1>
        <span className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full font-bold text-sm">
          {savedItems.length} items
        </span>
      </div>

      {savedItems.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-300">
          <Heart size={64} className="mx-auto text-gray-300 mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your list is empty</h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">Looks like you haven't saved any items yet. Start exploring our store to find things you love!</p>
          <Link to="/categories" className="px-8 py-3 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-colors">
            Explore Products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {savedItems.map((item) => (
            <div key={item.id} className="bg-white border text-left border-gray-200 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
              <Link to={`/product/${item.id}`} className="w-40 h-40 flex-shrink-0 bg-gray-50 rounded-xl p-4 cursor-pointer">
                <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply hover:scale-105 transition-transform" />
              </Link>
              
              <div className="flex-1 text-center md:text-left">
                <p className="text-xs font-bold text-gray-500 tracking-wider uppercase mb-1">{item.category}</p>
                <Link to={`/product/${item.id}`}>
                  <h3 className="text-xl font-extrabold text-gray-900 hover:text-blue-600 transition-colors mb-2">{item.name}</h3>
                </Link>
                <div className="flex items-center justify-center md:justify-start gap-1 mb-2">
                  <div className="flex text-yellow-400 text-sm">
                    {Array.from({ length: Math.floor(item.rating) }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <span className="text-xs text-gray-400 font-medium ml-2">{item.reviews} Reviews</span>
                </div>
                <div className="font-black text-2xl text-black">${item.price.toFixed(2)}</div>
              </div>

              <div className="flex flex-col gap-3 w-full md:w-auto">
                <button 
                  onClick={() => handleAddToCart(item)}
                  className="w-full md:w-48 py-3 bg-black text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
                >
                  <ShoppingBag size={18} />
                  Move to Cart
                </button>
                <button 
                  onClick={() => handleRemove(item.id)}
                  className="w-full md:w-48 py-3 bg-white border border-gray-300 text-gray-700 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 hover:text-red-600 hover:border-red-200 transition-colors"
                >
                  <Trash2 size={18} />
                  Remove from List
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default YourLists;
