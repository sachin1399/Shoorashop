import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import { Search, User, Heart, ShoppingBag, ChevronRight } from 'lucide-react'

// Pages
import Home from './pages/Home'
import TodaysDeals from './pages/TodaysDeals'
import GiftCards from './pages/GiftCards'
import RegistryGifting from './pages/RegistryGifting'
import ProductDetails from './pages/ProductDetails'
import CategoryList from './pages/CategoryList'

// Components
import Footer from './components/Footer'

// Context & Utils
import { CartProvider, useCart } from './context/CartContext'
import { RecentProvider } from './context/RecentContext'
import { Toaster } from 'react-hot-toast'

// New Pages (Cart & Customer Service)
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import MyAccount from './pages/customer-service/MyAccount'
import LoginSecurity from './pages/customer-service/LoginSecurity'
import YourAddresses from './pages/customer-service/YourAddresses'
import YourLists from './pages/customer-service/YourLists'
import TrackOrder from './pages/customer-service/TrackOrder'
import Returns from './pages/customer-service/Returns'
import Shipping from './pages/customer-service/Shipping'
import HelpCenter from './pages/customer-service/HelpCenter'
import PrivacyPolicy from './pages/customer-service/PrivacyPolicy'
import TermsOfService from './pages/customer-service/TermsOfService'
import CookiePolicy from './pages/customer-service/CookiePolicy'

function AppContent() {
  const { cartCount } = useCart();

  return (
    <Router>
      <div className="min-h-screen flex flex-col items-center">
        {/* Header / Navbar */}
        <header className="w-full max-w-7xl mx-auto py-4 px-6 flex items-center justify-between border-b border-gray-200 bg-white">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center gap-3 text-2xl font-bold text-black tracking-tight">
               <img src="/assets/media__1773008513704.png" alt="Logo" className="h-10 w-auto object-contain" />
               ShooraShop
            </Link>
            <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-600">
              <Link to="/categories" className="hover:text-black flex items-center gap-1">
                <span className="grid grid-cols-2 gap-[2px]">
                  <span className="w-1.5 h-1.5 border border-gray-600 rounded-[1px]"></span>
                  <span className="w-1.5 h-1.5 border border-gray-600 rounded-[1px]"></span>
                  <span className="w-1.5 h-1.5 border border-gray-600 rounded-[1px]"></span>
                  <span className="w-1.5 h-1.5 border border-gray-600 rounded-[1px]"></span>
                </span>
                ALL
              </Link>
              <Link to="/todays-deals" className="hover:text-black">Today's Deals</Link>
              <Link to="/gift-cards" className="hover:text-black">Gift Cards</Link>
              <Link to="/registry-gifting" className="hover:text-black">Registry & Gifting</Link>
            </nav>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-4 pr-10 py-1.5 rounded-full border border-gray-300 focus:outline-none focus:border-black text-sm w-48"
              />
              <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
            <div className="flex items-center space-x-4 text-gray-600">
              <Link to="/account" className="hover:text-black"><User size={20} /></Link>
              <button className="hover:text-black"><Heart size={20} /></button>
              <Link to="/cart" className="hover:text-black relative">
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </header>

        {/* Main Routing Content */}
        <main className="w-full flex-grow">
          <Toaster position="top-right" toastOptions={{ duration: 2500, style: { background: '#333', color: '#fff' } }} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todays-deals" element={<TodaysDeals />} />
            <Route path="/gift-cards" element={<GiftCards />} />
            <Route path="/registry-gifting" element={<RegistryGifting />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/categories" element={<CategoryList />} />
            
            {/* New Routes */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/account" element={<MyAccount />} />
            <Route path="/account/security" element={<LoginSecurity />} />
            <Route path="/account/addresses" element={<YourAddresses />} />
            <Route path="/account/lists" element={<YourLists />} />
            <Route path="/track-order" element={<TrackOrder />} />
            <Route path="/returns" element={<Returns />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/help" element={<HelpCenter />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

function App() {
  return (
    <CartProvider>
      <RecentProvider>
        <AppContent />
      </RecentProvider>
    </CartProvider>
  )
}

export default App
