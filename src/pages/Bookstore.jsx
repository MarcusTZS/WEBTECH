import React from 'react';
import { Search } from 'lucide-react';

const Bookstore = () => {
  const books = [1, 2, 3, 4, 5, 6, 7, 8];
  const categories = ["All", "Computer Science", "Mathematics", "Business", "Design"];

  return (
    <div className="min-h-screen bg-[#000000] text-white pt-32 px-8 pb-20">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-white mb-2">Smart Bookstore</h1>
            <p className="text-sm text-gray-500 font-light">Search and purchase your academic materials.</p>
          </div>
          <div className="px-5 py-2 bg-white/10 rounded-full text-gray-300 text-xs font-semibold border border-white/5">
            Balance: RM 150.00
          </div>
        </div>

        {/* Search and Categories */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-12 border-b border-white/10 pb-8">
          <div className="relative flex items-center bg-white/5 border border-white/10 rounded-2xl px-5 py-3 w-full md:w-96 focus-within:border-white/30 transition-all">
            <Search size={16} className="text-gray-500 mr-3" />
            <input 
              type="text" 
              placeholder="Search books by title or ISBN..." 
              className="bg-transparent outline-none flex-1 text-sm text-white placeholder:text-gray-600"
            />
          </div>
          
          <div className="flex overflow-x-auto gap-3 w-full pb-2 md:pb-0 scrollbar-hide">
            {categories.map((cat, i) => (
              <button 
                key={i} 
                className={`px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${i === 0 ? 'bg-white text-black' : 'bg-transparent border border-white/10 text-gray-400 hover:text-white hover:border-white/30'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Book Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {books.map((book) => (
            <div 
              key={book} 
              className="p-5 bg-[#0a0a0c] border border-white/10 rounded-[2rem] hover:bg-[#111115] hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:border-white/20 transition-all duration-300 group cursor-pointer flex flex-col"
            >
              <div className="w-full aspect-[3/4] bg-white/5 rounded-2xl mb-5 group-hover:bg-white/10 transition-colors relative overflow-hidden">
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[9px] uppercase tracking-widest font-bold text-gray-300">New</div>
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">Academic Textbook Vol.{book}</h3>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-4">Computer Science</p>
              
              <div className="mt-auto flex items-center justify-between">
                <p className="text-white font-bold text-sm">RM 45.00</p>
                <button className="px-5 py-2 bg-white text-black text-xs font-bold rounded-full hover:bg-gray-200 transition-all active:scale-95">
                  Add to Bag
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookstore;