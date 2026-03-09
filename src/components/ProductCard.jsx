import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  
  return (
    <div className="bg-[#F9FAFB] rounded-2xl p-6 group hover:shadow-lg transition-shadow flex flex-col h-full relative">
      <Link to={`/product/${product.id}`} className="flex-grow flex flex-col block cursor-pointer">
        <div className="h-48 mb-6 flex items-center justify-center relative">
          <div className="absolute inset-0 bg-black/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md relative z-10" 
          />
        </div>
        <div className="space-y-2 mt-auto">
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{product.type || product.category}</p>
          <h4 className="font-bold text-black group-hover:text-blue-600 transition-colors line-clamp-2">{product.name}</h4>
          
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400 text-xs">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < Math.floor(product.rating) ? "" : "text-gray-300"}>★</span>
              ))}
            </div>
            <span className="text-xs text-gray-500">{product.reviews} Reviews</span>
          </div>
          
          <div className="flex items-center justify-between mt-2">
            <div className="text-xl font-bold text-black flex items-baseline gap-2">
              ${product.price.toFixed(2)}
            </div>
          </div>
        </div>
      </Link>
      <button 
        onClick={() => addToCart(product)}
        className="w-full mt-4 py-2 border-2 border-black rounded-full text-black font-semibold hover:bg-black hover:text-white transition-colors"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
