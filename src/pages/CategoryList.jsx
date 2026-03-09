import React, { useState } from 'react';
import { mockProducts } from '../data/mockProducts';
import ProductCard from '../components/ProductCard';
import { Filter } from 'lucide-react';

const CategoryList = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...new Set(mockProducts.map(p => p.category))];

  const filteredProducts = activeCategory === 'All' 
    ? mockProducts 
    : mockProducts.filter(p => p.category === activeCategory);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row gap-8">
      {/* Sidebar Filters */}
      <aside className="w-full md:w-64 flex-shrink-0">
        <div className="bg-[#F9FAFB] rounded-2xl p-6 sticky top-8">
          <div className="flex items-center gap-2 mb-6 text-black font-bold text-lg">
            <Filter size={20} />
            <h2>Filters</h2>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-800">CATEGORIES</h3>
            <ul className="space-y-2">
              {categories.map(category => (
                <li key={category}>
                  <button 
                    onClick={() => setActiveCategory(category)}
                    className={`block w-full text-left px-2 py-1.5 rounded-lg transition-colors text-sm ${
                      activeCategory === category 
                        ? 'bg-blue-100 text-blue-700 font-medium' 
                        : 'text-gray-600 hover:bg-gray-100 hover:text-black'
                    }`}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        <div className="mb-8 border-b pb-4 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              {activeCategory} Products
            </h2>
            <p className="text-gray-500 mt-2">Showing {filteredProducts.length} results</p>
          </div>
          <select className="bg-white border rounded-lg px-4 py-2 text-sm text-gray-700 shadow-sm outline-none focus:ring-2 focus:ring-blue-400">
            <option>Sort by: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Customer Reviews</option>
          </select>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default CategoryList;
