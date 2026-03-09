import React from 'react';
import { mockProducts } from '../data/mockProducts';
import ProductCard from '../components/ProductCard';

const TodaysDeals = () => {
  const deals = mockProducts.filter(p => p.isDealOfDay);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 mb-4">
          Today's Deals
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Incredible savings on top tech, fashion, and everyday essentials. Hurry, these deals won't last long!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {deals.length > 0 ? (
          deals.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-gray-500">
            No active deals at the moment. Please check back later!
          </div>
        )}
      </div>
    </div>
  );
};

export default TodaysDeals;
