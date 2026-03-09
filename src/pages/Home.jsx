import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRecentViews } from '../context/RecentContext';

const heroSlides = [
  {
    id: 1,
    title: "SHOP PREMIUM \n AUDIO & GEAR",
    description: "Experience absolute clarity and deep bass with our top-of-the-line wireless headphones.",
    image: "/assets/media__1773008721677.png",
    discount: "40",
    productType: "WIRELESS HEADPHONES",
    productName: "JBL T460BT Black\nHeadphones",
    rating: 4.0,
    reviews: 1311,
    price: "125.00"
  },
  {
    id: 2,
    title: "NEW GAMING \n CONSOLES & GEAR",
    description: "Experience next-gen gaming with our latest collection of consoles and controllers.",
    image: "/assets/media__1773008697929.png",
    discount: "25",
    productType: "GAMING ACCESSORY",
    productName: "Xbox Wireless\nController",
    rating: 4.8,
    reviews: 2450,
    price: "59.99"
  },
  {
    id: 3,
    title: "VIRTUAL REALITY \n HEADSETS",
    description: "Immerse yourself in new worlds with cutting-edge VR technology.",
    image: "/assets/media__1773008591326.png",
    discount: "30",
    productType: "VR SYSTEM",
    productName: "Advanced VR Headset\nWith Motion Tracking",
    rating: 4.5,
    reviews: 890,
    price: "299.00"
  },
  {
    id: 4,
    title: "SMART HOME \n APPLIANCES",
    description: "Cook meals faster and easier with our multi-use pressure cookers.",
    image: "/assets/media__1773008709679.png",
    discount: "15",
    productType: "KITCHEN",
    productName: "Instant Pot\nMulti-Cooker",
    rating: 4.9,
    reviews: 5120,
    price: "89.99"
  }
];

const Home = () => {
  const { recentItems } = useRecentViews();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const currentSlide = heroSlides[currentSlideIndex];

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-8 space-y-6 md:space-y-12">
      {/* Hero Section */}
      <section className="bg-[#EEF2FC] rounded-[2rem] p-6 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between min-h-[500px] md:min-h-[450px]">
        <div className="z-10 w-full md:w-1/2 space-y-4 md:space-y-6 pt-10 md:pt-0 pb-8 md:pb-0 pl-2 md:pl-0 text-center md:text-left flex flex-col items-center md:items-start">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A1A1A] leading-tight whitespace-pre-line">
            {currentSlide.title}
          </h2>
          <p className="text-gray-600 text-sm md:text-lg leading-relaxed max-w-sm">
            {currentSlide.description}
          </p>
          <Link to={`/product/${currentSlide.id}`} className="inline-block px-6 py-2 rounded-full border-2 border-black text-black font-semibold hover:bg-black hover:text-white transition-colors duration-300">
            View more
          </Link>
        </div>
        
        {/* Decorative Dots / Slider Controls */}
        <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 flex flex-col space-y-3 z-40">
          {heroSlides.map((slide, index) => (
            <div 
              key={slide.id}
              onClick={() => setCurrentSlideIndex(index)}
              className={`w-4 h-4 rounded-full flex items-center justify-center cursor-pointer ${currentSlideIndex === index ? 'border-2 border-blue-400' : ''}`}
            >
              <div className={`w-2 h-2 rounded-full transition-colors ${currentSlideIndex === index ? 'bg-blue-400' : 'bg-blue-400/50 hover:bg-blue-400'}`}></div>
            </div>
          ))}
        </div>
        
        {/* Hero Image & Product Card */}
        <div className="w-full md:w-[60%] flex-1 flex items-center justify-center md:justify-end relative mt-8 md:mt-0">
          
          {/* Overlay Product Card - POSITIONED TO OVERLAP LEFT SIDE OF IMAGE */}
          <div className="absolute z-30 bg-white/95 backdrop-blur-md p-4 md:p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] w-60 md:w-80 animate-slide-up right-0 md:right-[350px] bottom-[-20px] md:top-1/2 md:-translate-y-1/2 scale-90 sm:scale-100 origin-bottom-right md:origin-center">
             <p className="text-[10px] font-bold text-gray-500 mb-2 tracking-widest uppercase">WIRELESS HEADPHONES</p>
             <h3 className="font-extrabold text-lg mb-3 whitespace-pre-line leading-tight text-black">{currentSlide.productName}</h3>
             <div className="flex items-center gap-1 mb-4">
               <div className="flex text-yellow-400 text-sm">
                 <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
               </div>
               <span className="text-xs text-gray-400 font-medium ml-2">1311 Reviews</span>
             </div>
             <div className="font-extrabold text-xl mb-2 text-black">$ {currentSlide.price}</div>
             <Link to={`/product/${currentSlide.id}`} className="text-xs flex items-center gap-2 text-gray-500 hover:text-black font-medium group mt-2">
               View More <span className="w-8 h-[1px] bg-gray-300 group-hover:bg-black transition-colors inline-block"></span><ChevronRight size={12} className="-ml-1" />
             </Link>
          </div>

          {/* The main product image */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px] z-20 transition-all duration-500 ease-in-out md:-mr-8">
             <img key={currentSlide.image} src={currentSlide.image} alt={currentSlide.productName} className="w-full h-full object-contain relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] scale-110 origin-center animate-fade-in" />
             
             {/* 40% OFF Badge - Top Right of Image */}
             <div className="absolute top-0 right-0 md:top-16 md:right-16 bg-[#FFD700] text-black rounded-full w-16 h-16 md:w-24 md:h-24 flex flex-col items-center justify-center shadow-lg z-30 transform -rotate-12 border-2 md:border-4 border-white">
               <span className="text-xl md:text-3xl font-black leading-none">{currentSlide.discount}%</span>
               <span className="text-[10px] md:text-base font-bold uppercase mt-1">OFF</span>
             </div>
          </div>
        </div>
        <button 
          onClick={handleNextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md items-center justify-center z-40 text-gray-600 hover:text-black hover:scale-110 transition-transform hidden md:flex"
        >
          <ChevronRight size={18} />
        </button>
      </section>

      {/* Split Sections: Basics & Deals */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <Link to="/categories" className="bg-[#FAE9E9] rounded-2xl p-6 md:p-8 flex items-center justify-between group cursor-pointer h-36 md:h-48 block">
            <div className="space-y-1 md:space-y-2 max-w-[55%]">
              <h3 className="text-xl md:text-2xl font-bold text-black leading-tight">Shoorashop Basics</h3>
              <p className="flex items-center text-xs md:text-base text-gray-700 group-hover:text-black font-medium">
                Shop now <span className="w-8 md:w-12 h-[1px] bg-gray-500 ml-2 group-hover:bg-black transition-colors"></span><ChevronRight size={14} className="-ml-1" />
              </p>
            </div>
            <img src="/assets/media__1773010026543.png" alt="Controller" className="h-24 w-24 md:h-40 md:w-40 object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-500 rounded-lg" />
          </Link>

          <Link to="/todays-deals" className="bg-[#FAE9E9] rounded-2xl p-6 md:p-8 flex items-center justify-between group cursor-pointer h-36 md:h-48 block">
            <div className="space-y-1 md:space-y-2 max-w-[55%]">
              <h3 className="text-xl md:text-2xl font-bold text-black leading-tight">Deals & Promotion</h3>
              <p className="flex items-center text-xs md:text-base text-gray-700 group-hover:text-black font-medium">
                Shop now <span className="w-8 md:w-12 h-[1px] bg-gray-500 ml-2 group-hover:bg-black transition-colors"></span><ChevronRight size={14} className="-ml-1" />
              </p>
            </div>
            <img src="/assets/media__1773008577919.png" alt="Melting Clock" className="h-24 w-24 md:h-40 md:w-40 object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-500" />
          </Link>
        </section>

        {/* Comfy Styles for Her */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-[#FAE9E9] rounded-[2rem] p-6 md:p-10 relative overflow-hidden h-[280px] md:h-[400px]">
             <div className="space-y-2 md:space-y-4 max-w-[60%] md:max-w-[200px] z-10 relative">
               <h3 className="text-2xl md:text-3xl font-bold text-black leading-tight">Comfy Styles for Her</h3>
               <p className="text-gray-700 text-xs md:text-sm line-clamp-2 md:line-clamp-none">
                 Shop shoorashop Fashion including clothing shoes, jewelry, watches, and more
               </p>
               <Link to="/categories" className="flex items-center text-xs md:text-base text-gray-700 hover:text-black font-medium cursor-pointer">
                 see more <span className="w-8 md:w-12 h-[1px] bg-gray-500 ml-2 group-hover:bg-black transition-colors"></span><ChevronRight size={14} className="-ml-1" />
               </Link>
             </div>
             
             <div className="absolute bottom-6 md:top-1/2 left-6 md:left-10 md:translate-y-2 z-10">
                <Link to="/categories" className="bg-[#E6CAA4] rounded-xl p-2 md:p-3 shadow-lg flex items-center gap-2 md:gap-3 hover:scale-105 transition-transform max-w-[140px] md:max-w-none">
                  <img src="/assets/media__1773009880715.jpg" alt="Handbag" className="w-10 h-10 md:w-16 md:h-16 object-cover rounded-md mix-blend-multiply" />
                  <div>
                    <h4 className="font-bold text-black text-[10px] md:text-sm leading-tight">Top Handbags</h4>
                    <p className="text-gray-800 text-[8px] md:text-xs font-medium">Big save 30% off</p>
                  </div>
                </Link>
             </div>

             <div className="absolute right-[-20px] md:right-[-40px] bottom-0 h-[220px] md:h-[400px] w-[180px] md:w-[350px]">
               <img src="/assets/media__1773008835226.png" alt="Woman Shopping" className="w-full h-full object-contain rounded-tl-full object-bottom drop-shadow-2xl" />
             </div>
          </div>

          <div className="bg-[#EEF2FC] rounded-[2rem] p-6 md:p-10 relative overflow-hidden h-[280px] md:h-[400px]">
             <div className="space-y-2 md:space-y-4 max-w-[60%] md:max-w-[200px] z-10 relative">
               <h3 className="text-2xl md:text-3xl font-bold text-black leading-tight">Comfy Styles for Him</h3>
               <p className="text-gray-700 text-xs md:text-sm line-clamp-2 md:line-clamp-none">
                 Shop shoorashop Fashion including clothing shoes, jewelry, watches, and more
               </p>
               <Link to="/categories" className="flex items-center text-xs md:text-base text-gray-700 hover:text-black font-medium cursor-pointer">
                 see more <span className="w-8 md:w-12 h-[1px] bg-gray-500 ml-2 group-hover:bg-black transition-colors"></span><ChevronRight size={14} className="-ml-1" />
               </Link>
             </div>
             
             <div className="absolute bottom-6 md:top-1/2 left-6 md:left-10 md:translate-y-2 z-10">
                <Link to="/categories" className="bg-[#D1E0C4] rounded-xl p-2 md:p-3 shadow-lg flex items-center gap-2 md:gap-3 hover:scale-105 transition-transform max-w-[140px] md:max-w-none">
                  <img src="/assets/media__1773009904132.jpg" alt="Watch" className="w-10 h-10 md:w-16 md:h-16 object-cover rounded-md mix-blend-multiply" />
                  <div>
                    <h4 className="font-bold text-black text-[10px] md:text-sm leading-tight">Top Watches</h4>
                    <p className="text-gray-800 text-[8px] md:text-xs font-medium">Big save 30% off</p>
                  </div>
                </Link>
             </div>

             <div className="absolute right-[-10px] md:right-0 bottom-0 md:bottom-[-20px] h-[220px] md:h-[400px] w-[180px] md:w-[300px]">
               <img src="/assets/media__1773009183720.jpg" alt="Man with shopping bags" className="w-full h-full object-contain rounded-tl-full object-bottom" />
             </div>
          </div>
        </section>

        {/* ShooperShop Delivers Header */}
        <section className="bg-[#F0F2FC] rounded-2xl md:rounded-[2rem] p-8 md:p-12 flex items-center justify-between overflow-hidden relative min-h-[200px] md:min-h-[300px]">
           <div className="space-y-4 md:space-y-6 max-w-[50%] md:max-w-md z-10">
             <h2 className="text-2xl md:text-4xl font-extrabold text-black leading-tight">ShooraShop Delivers<br/>to You</h2>
             <Link to="/categories" className="inline-block px-4 md:px-6 py-2 rounded-full border-2 border-black text-black text-sm md:text-base font-semibold hover:bg-black hover:text-white transition-colors">
               Shop now
             </Link>
           </div>
           <div className="absolute right-0 bottom-0 h-[180px] md:h-[400px] w-[60%] md:w-[500px] flex items-end justify-end p-2 md:p-8">
             <img src="/assets/media__1773008564902.png" alt="Cardboard Boxes" className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform object-bottom right" />
           </div>
        </section>

        {/* Shop by Categories */}
        <section className="space-y-4 md:space-y-6">
          <h3 className="text-lg md:text-xl font-bold text-black">Shop by Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8 md:gap-y-10">
            {/* Category: Beauty */}
            <Link to="/categories" className="relative group block">
              <div className="h-40 md:h-64 rounded-2xl md:rounded-[2rem] overflow-hidden bg-[#E8E1DA]">
                <img src="/assets/media__1773008553610.png" alt="Beauty Picks" className="w-full h-full object-contain p-4 md:p-8 group-hover:scale-110 transition-transform duration-500 hover:drop-shadow-xl" />
              </div>
              <div className="absolute -bottom-3 md:-bottom-5 left-1/2 -translate-x-1/2 bg-white text-black font-extrabold py-2 md:py-3 px-4 md:px-8 rounded-full text-center text-[10px] md:text-sm shadow-lg whitespace-nowrap z-20 group-hover:bg-black group-hover:text-white transition-colors">
                Beauty Picks
              </div>
            </Link>
            {/* Category: Computers */}
            <Link to="/categories" className="relative group block">
              <div className="h-40 md:h-64 rounded-2xl md:rounded-[2rem] overflow-hidden bg-[#E5E7EB]">
                <img src="/assets/media__1773008721677.png" alt="Computer & Accessories" className="w-full h-full object-contain p-4 md:p-8 group-hover:scale-110 transition-transform duration-500 hover:drop-shadow-xl" />
              </div>
              <div className="absolute -bottom-3 md:-bottom-5 left-1/2 -translate-x-1/2 bg-white text-black font-extrabold py-2 md:py-3 px-4 md:px-8 rounded-full text-center text-[10px] md:text-sm shadow-lg whitespace-nowrap z-20 group-hover:bg-black group-hover:text-white transition-colors">
                Computer & Accessories
              </div>
            </Link>
            {/* Category: Video Games (VR) */}
            <Link to="/categories" className="relative group block">
              <div className="h-40 md:h-64 rounded-2xl md:rounded-[2rem] overflow-hidden bg-[#F3F4F6]">
                <img src="/assets/media__1773008697929.png" alt="Video Games" className="w-full h-full object-contain p-4 md:p-8 group-hover:scale-110 transition-transform duration-500 hover:drop-shadow-xl" />
              </div>
              <div className="absolute -bottom-3 md:-bottom-5 left-1/2 -translate-x-1/2 bg-white text-black font-extrabold py-2 md:py-3 px-4 md:px-8 rounded-full text-center text-[10px] md:text-sm shadow-lg whitespace-nowrap z-20 group-hover:bg-black group-hover:text-white transition-colors">
                Video Games
              </div>
            </Link>
            {/* Category: Toys */}
             <Link to="/categories" className="relative group block">
              <div className="h-40 md:h-64 rounded-2xl md:rounded-[2rem] overflow-hidden bg-[#FCD34D]/20">
                <img src="https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&q=80&w=400" alt="Toys" className="w-full h-full object-cover p-0 group-hover:scale-110 transition-transform duration-500 hover:drop-shadow-xl" />
              </div>
              <div className="absolute -bottom-3 md:-bottom-5 left-1/2 -translate-x-1/2 bg-white text-black font-extrabold py-2 md:py-3 px-4 md:px-8 rounded-full text-center text-[10px] md:text-sm shadow-lg whitespace-nowrap z-20 group-hover:bg-black group-hover:text-white transition-colors">
                Toys & Games
              </div>
            </Link>
          </div>
        </section>

        {/* Last Viewed Section */}
        {recentItems.length > 0 && (
          <section className="space-y-4 md:space-y-6">
            <h3 className="text-lg md:text-xl font-bold text-black mt-8">Last Viewed</h3>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {recentItems.map((item) => (
                <Link to={`/product/${item.id}`} key={item.id} className="bg-[#f4f4f4] rounded-2xl md:rounded-[2rem] p-4 md:p-6 flex flex-col items-center group relative overflow-hidden transition-all hover:-translate-y-1 block">
                  <img src={item.image} alt={item.name} className="w-24 h-24 md:w-56 md:h-56 object-contain mb-4 md:mb-8 mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
                  <div className="w-full">
                    <h4 className="font-extrabold text-black mb-1 text-[10px] md:text-base line-clamp-1">{item.name}</h4>
                    <div className="flex items-center gap-1 mb-1 md:mb-2">
                      <div className="flex text-yellow-400 text-[8px] md:text-xs shadow-sm">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < Math.floor(item.rating) ? "" : "text-gray-300"}>★</span>
                        ))}
                      </div>
                      <span className="text-[8px] md:text-[10px] text-gray-400 font-bold ml-1">{item.reviews} Revs</span>
                    </div>
                    <div className="font-extrabold text-sm md:text-2xl text-black">
                      ${item.price.toFixed(2)}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
    </div>
  );
};

export default Home;