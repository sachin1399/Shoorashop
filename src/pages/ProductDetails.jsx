import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockProducts } from '../data/mockProducts';
import { ChevronRight, Heart, Share2, Truck, ShieldCheck, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useRecentViews } from '../context/RecentContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { addRecentView } = useRecentViews();
  const [quantity, setQuantity] = useState(1);
  
  // Try to find by integer ID first, fall back to string comparison 
  // (to handle those test links we added like shoe-1 etc if needed)
  const product = mockProducts.find(p => p.id.toString() === id) || mockProducts[0];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (product) {
      addRecentView(product);
    }
  }, [id, product]);

  if (!product) {
    return <div className="p-12 text-center text-xl">Product not found</div>;
  }

  const finalPrice = product.discount > 0 
    ? (product.price * (1 - product.discount / 100)).toFixed(2)
    : product.price.toFixed(2);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-8">
      <Link to="/categories" className="inline-flex items-center text-gray-500 hover:text-black mb-8 transition-colors">
        <ArrowLeft size={16} className="mr-2" /> Back to Categories
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image Gallery (Simplified to one main image) */}
        <div className="bg-[#F9FAFB] rounded-3xl p-12 flex items-center justify-center relative min-h-[500px]">
          {product.discount > 0 && (
            <div className="absolute top-6 left-6 bg-red-500 text-white px-4 py-1 rounded-full font-bold shadow-sm">
              Save {product.discount}%
            </div>
          )}
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full max-w-md h-auto object-contain drop-shadow-2xl" 
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 font-medium tracking-wider uppercase">
            <span>{product.category}</span>
            <ChevronRight size={14} />
            <span>{product.type}</span>
          </div>

          <h1 className="text-4xl font-extrabold text-[#1A1A1A] leading-tight">
            {product.name}
          </h1>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < Math.floor(product.rating) ? "" : "text-gray-300"}>★</span>
                ))}
              </div>
              <span className="font-bold text-gray-700 ml-1">{product.rating}</span>
            </div>
            <a href="#" className="text-blue-600 hover:underline text-sm">{product.reviews} customer reviews</a>
          </div>

          <div className="pt-4 border-t border-gray-100">
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-black">${finalPrice}</span>
              {product.discount > 0 && (
                <span className="text-xl text-gray-400 line-through">
                  ${product.price.toFixed(2)}
                </span>
              )}
            </div>
            <p className="text-sm text-gray-500 mt-2">Inclusive of all taxes</p>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed">
            {product.description}
          </p>

          <div className="pt-6 flex items-center gap-4">
            <div className="flex items-center border-2 border-gray-200 rounded-full w-32 justify-between px-4 py-3">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="text-gray-500 hover:text-black font-bold text-xl"
              >-</button>
              <span className="font-bold">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="text-gray-500 hover:text-black font-bold text-xl"
              >+</button>
            </div>
            <button 
              onClick={() => addToCart(product, quantity)}
              className="flex-1 bg-black text-white font-bold text-lg rounded-full py-4 hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"
            >
              Add to Cart
            </button>
            <button className="w-14 h-14 border-2 border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:text-red-500 hover:border-red-500 transition-colors">
              <Heart size={24} />
            </button>
          </div>

          <div className="pt-8 border-t border-gray-100 grid grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <Truck className="text-blue-600 mt-1" />
              <div>
                <h5 className="font-bold text-sm">Free Delivery</h5>
                <p className="text-xs text-gray-500 mt-1">Enter code FREEGIFT at checkout</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="text-green-600 mt-1" />
              <div>
                <h5 className="font-bold text-sm">Return Delivery</h5>
                <p className="text-xs text-gray-500 mt-1">Free 30 days delivery returns</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
