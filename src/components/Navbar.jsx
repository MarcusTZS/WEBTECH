import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, X, Search, Menu } from 'lucide-react';

const Navbar = () => {
  const [isBagOpen, setIsBagOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // 控制手机菜单

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] border-b border-white/5 bg-black/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          
          <Link to="/" className="text-sm font-bold tracking-[0.3em] uppercase text-white">
            EDU<span className="text-gray-500 italic">TECH</span>
          </Link>
          
          {/* 桌面端导航 */}
          <div className="hidden md:flex items-center gap-10">
            <Link to="/" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">HOME</Link>
            <Link to="/courses" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">COURSES</Link>
            <Link to="/bookstore" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">BOOKSTORE</Link>
            <Link to="/portal" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">PORTAL</Link>
            <Link to="/forum" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">FORUM</Link>
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            <div className="hidden lg:flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-2 focus-within:bg-white/10 focus-within:border-white/30 transition-all">
              <Search size={14} className="text-gray-400 mr-2" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-transparent outline-none text-white text-xs w-24 focus:w-40 transition-all placeholder:text-gray-600" 
              />
            </div>

            <button onClick={() => setIsBagOpen(true)} className="relative text-gray-400 hover:text-white transition-colors cursor-pointer p-2">
              <ShoppingBag size={18} />
              <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-white rounded-full text-[8px] font-bold flex items-center justify-center text-black">0</span>
            </button>
            
            <Link to="/login" className="hidden md:block bg-white text-black px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-gray-200 transition-all active:scale-95">
              Login
            </Link>

            {/* 手机端汉堡菜单按钮 */}
            <button 
              className="md:hidden text-gray-400 hover:text-white p-2"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* 手机端全屏菜单 (Requirement 1: Responsive) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[200] bg-[#0a0a0c] flex flex-col items-center justify-center animate-in fade-in duration-200">
          <button 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="absolute top-6 right-8 text-gray-500 hover:text-white"
          >
            <X size={32} />
          </button>
          <div className="flex flex-col items-center gap-8">
            <Link onClick={() => setIsMobileMenuOpen(false)} to="/" className="text-2xl font-bold uppercase tracking-widest text-white">HOME</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} to="/courses" className="text-2xl font-bold uppercase tracking-widest text-gray-400 hover:text-white">COURSES</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} to="/bookstore" className="text-2xl font-bold uppercase tracking-widest text-gray-400 hover:text-white">BOOKSTORE</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} to="/portal" className="text-2xl font-bold uppercase tracking-widest text-gray-400 hover:text-white">PORTAL</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} to="/forum" className="text-2xl font-bold uppercase tracking-widest text-gray-400 hover:text-white">FORUM</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} to="/login" className="mt-8 bg-white text-black px-10 py-3 rounded-full text-sm font-bold uppercase tracking-widest">Login</Link>
          </div>
        </div>
      )}

      {/* 购物车侧边栏 */}
      {isBagOpen && (
        <div className="fixed inset-0 z-[200] flex justify-end">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsBagOpen(false)} />
          <div className="relative w-full max-w-sm h-full bg-[#0a0a0c] border-l border-white/10 p-12 flex flex-col">
            <div className="flex justify-between items-center mb-12 text-white">
              <h2 className="text-2xl font-semibold tracking-tight">Bag</h2>
              <button onClick={() => setIsBagOpen(false)} className="text-gray-500 hover:text-white"><X size={20} /></button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center opacity-30 text-white">
              <ShoppingBag size={40} className="mb-4" />
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase">Your bag is empty</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;