import React from 'react';
import { Search, MessageSquare, ChevronUp, Plus, Flag, Trash2 } from 'lucide-react';

const Forum = () => {
  const posts = [
    { title: "How to properly pass props in React Hooks?", author: "Alex Wong", replies: 12, votes: 34, tag: "Web Technology" },
    { title: "Understanding Time Complexity in Binary Trees", author: "Sarah Lee", replies: 8, votes: 21, tag: "Data Structures" },
    { title: "Any tips for the Midterm Quiz?", author: "John Doe", replies: 24, votes: 15, tag: "Database Systems" },
    { title: "Error running Android Studio emulator", author: "Emma Chen", replies: 3, votes: 5, tag: "Mobile Computing" }
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-white pt-32 px-8 pb-20">
      <div className="max-w-5xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 border-b border-white/10 pb-8">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-white mb-2">Discussion Forum</h1>
            <p className="text-sm text-gray-500 font-light">Peer-to-peer learning and Q&A community.</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-white text-black text-xs font-semibold rounded-full hover:bg-gray-200 transition-all active:scale-95">
            <Plus size={16} /> Ask a Question
          </button>
        </div>

        {/* 搜索条 */}
        <div className="relative flex items-center bg-white/5 border border-white/10 rounded-2xl px-6 py-4 mb-10 focus-within:border-white/30 transition-all">
          <Search size={18} className="text-gray-500 mr-4" />
          <input 
            type="text" 
            placeholder="Search discussions..." 
            className="bg-transparent outline-none flex-1 text-sm text-white placeholder:text-gray-600"
          />
        </div>

        {/* 帖子列表 (加入了 Moderation Tools) */}
        <div className="space-y-4">
          {posts.map((post, index) => (
            <div key={index} className="p-6 bg-[#0a0a0c] border border-white/10 rounded-3xl hover:bg-[#111115] hover:border-white/20 transition-all duration-300 flex items-start gap-6 cursor-pointer group">
              
              {/* 点赞 */}
              <div className="flex flex-col items-center justify-center min-w-[50px] p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors">
                <ChevronUp size={18} className="text-gray-400 group-hover:text-white mb-1" />
                <span className="text-sm font-semibold">{post.votes}</span>
              </div>

              {/* 内容 */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-white/10 text-gray-300 text-[10px] uppercase tracking-widest font-bold rounded-full">
                    {post.tag}
                  </span>
                  <span className="text-xs text-gray-500 font-medium">Posted by {post.author}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{post.title}</h3>
              </div>

              {/* Requirement 4: Moderation Tools (只有悬浮时才出现，保持极简) */}
              <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-4">
                <button className="flex items-center gap-1.5 text-gray-500 hover:text-white text-[10px] uppercase tracking-widest font-bold transition-colors">
                  <Flag size={12} /> Report
                </button>
                <button className="flex items-center gap-1.5 text-gray-600 hover:text-red-500 text-[10px] uppercase tracking-widest font-bold transition-colors">
                  <Trash2 size={12} /> Mod Delete
                </button>
              </div>

              {/* 回复数 */}
              <div className="flex items-center gap-2 text-gray-500">
                <MessageSquare size={16} />
                <span className="text-sm font-medium">{post.replies}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forum;