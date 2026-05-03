import React from 'react';
import { ArrowUpRight, ArrowRight, Star, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative min-h-screen w-full text-[#f5f5f7] pb-10">
      
      {/* 物理隔离背景 */}
      <div 
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(10, 10, 12, 0.4), rgba(10, 10, 12, 0.95)), url('https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1920')` 
        }}
      />

      <main className="max-w-7xl mx-auto pt-48 px-8 flex flex-col">
        
        {/* 1. Hero Section: 极致居中 + Apple 级微交互 */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-32 animate-in slide-in-from-bottom-10 duration-1000">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[1.05] mb-8 text-white">
            Master your <br />
            <span className="bg-gradient-to-r from-purple-300 via-purple-500 to-purple-800 text-transparent bg-clip-text italic tracking-tight">
              Education.
            </span>
          </h1>
          
          <p className="text-lg text-gray-400 mb-12 max-w-xl leading-relaxed font-light">
            The premium ecosystem for undergraduates. Seamless access to lecture materials, a curated bookstore, and peer collaboration.
          </p>

          <div className="flex items-center gap-6">
            <Link to="/login" className="px-10 py-4 bg-white text-black text-sm font-bold rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all flex items-center gap-2 active:scale-95">
              Get Started <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* 2. 三大核心卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          
          {[
            { id: "01", title: "Learning Resources", desc: "Access high-quality lecture notes and video tutorials.", path: "/courses" },
            { id: "02", title: "Smart Bookstore", desc: "Digital and physical textbook procurement.", path: "/bookstore" },
            { id: "03", title: "Peer Collaboration", desc: "Join curated study groups and tech forums.", path: "/forum" }
          ].map((item, index) => (
            <Link key={index} to={item.path} className="group p-10 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-3xl hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 transition-all duration-300 flex flex-col h-80 relative overflow-hidden">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-700 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mb-8 shadow-lg z-10">{item.id}</div>
              <h3 className="text-2xl font-bold mb-4 text-white tracking-tight z-10">{item.title}</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed mb-auto z-10">{item.desc}</p>
              
              <div className="mt-6 flex items-center text-xs font-bold text-gray-400 group-hover:text-white transition-colors z-10 uppercase tracking-widest">
                Explore 
                <span className="ml-3 bg-white/10 rounded-full p-2 group-hover:bg-white group-hover:text-black transition-all">
                  <ArrowUpRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* 3. Featured Courses */}
        <div className="mb-32">
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-4xl font-black italic text-white uppercase relative inline-block tracking-tighter">
              FEATURED COURSES
              <div className="absolute bottom-1 left-0 w-full h-2 bg-purple-600/50 -z-10 blur-[2px]"></div>
            </h2>
            <Link to="/courses" className="text-[10px] font-bold text-purple-400 hover:text-purple-300 uppercase tracking-widest flex items-center gap-2">
              View All <span className="text-lg">›</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {["Web Technology", "Data Structures", "Database Systems", "Mobile Computing"].map((title, i) => (
              <Link key={i} to="/courses" className="group block p-5 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] transition-all duration-300">
                <div className="w-full aspect-[4/3] bg-[#2a2f42]/40 rounded-2xl mb-5 flex items-center justify-center text-[10px] font-bold text-gray-500 tracking-widest group-hover:bg-purple-900/20 transition-colors">PREVIEW</div>
                <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
                <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">
                  <Star size={12} className="text-yellow-500 fill-yellow-500" /> 4.9 (120 students)
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 4. Tech Community */}
        <div className="bg-white/5 border border-white/10 rounded-[3rem] p-12 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-12 mb-32 hover:border-white/20 transition-colors duration-500">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tighter">Join the Tech <br/> Community</h2>
            <p className="text-gray-400 text-lg mb-10 max-w-md font-light">Collaborate with university peers, ask questions, and share knowledge in real-time.</p>
            
            <Link to="/forum" className="px-8 py-4 bg-white text-black text-xs font-bold italic uppercase rounded-2xl hover:scale-105 hover:shadow-xl transition-all active:scale-95 inline-block tracking-widest">
              ENTER FORUM
            </Link>
          </div>
          <div className="md:w-1/2 w-full space-y-4">
            {[1, 2].map((item) => (
              <div key={item} className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center text-purple-400">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold italic mb-1 text-sm tracking-tight">How to master React Hooks & API?</h4>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Active Discussion</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. 升级版的高级 Footer */}
        <footer className="border-t border-white/10 pt-16 pb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="col-span-2 md:col-span-1">
              <h2 className="text-xl font-bold tracking-widest text-white mb-4">
                EDU<span className="text-gray-500 italic">TECH</span>
              </h2>
              <p className="text-xs text-gray-500 leading-relaxed max-w-xs">Empowering the next generation of software engineers through a seamless digital ecosystem.</p>
            </div>
            
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold mb-2">Explore</h4>
              <Link to="/courses" className="text-sm text-gray-500 hover:text-white transition-colors">Courses</Link>
              <Link to="/bookstore" className="text-sm text-gray-500 hover:text-white transition-colors">Bookstore</Link>
              <Link to="/forum" className="text-sm text-gray-500 hover:text-white transition-colors">Community</Link>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold mb-2">Account</h4>
              <Link to="/login" className="text-sm text-gray-500 hover:text-white transition-colors">Sign In</Link>
              <Link to="/login" className="text-sm text-gray-500 hover:text-white transition-colors">Register</Link>
              <button className="text-sm text-gray-500 hover:text-white transition-colors text-left">My Bag</button>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold mb-2">Legal</h4>
              <span className="text-sm text-gray-500 hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
              <span className="text-sm text-gray-500 hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            </div>
          </div>
          
          {/* 修改点：删除了吉隆坡，并将版权文字居中对齐 */}
          <div className="border-t border-white/5 pt-8 flex justify-center items-center">
            <p className="text-[10px] font-bold tracking-[0.2em] text-gray-600 uppercase text-center">
              © 2026 GLOBAL INSTITUTE OF TECHNOLOGY
            </p>
          </div>
        </footer>

      </main>
    </div>
  );
};

export default Home;