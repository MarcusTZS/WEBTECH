import React from 'react';
import { Clock, TrendingUp, CheckCircle } from 'lucide-react';

const Portal = () => {
  return (
    <div className="min-h-screen bg-[#000000] text-white pt-32 px-8 pb-20">
      <div className="max-w-7xl mx-auto">
        
        {/* 标题 */}
        <h1 className="text-3xl font-semibold tracking-tight text-white mb-12">
          Student Portal
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* 1. Semester Progress */}
          <div className="md:col-span-2 p-10 bg-[#0a0a0c] border border-white/10 rounded-[2rem] hover:bg-[#111115] hover:border-white/20 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-8 text-white">Semester Progress</h2>
            <div className="space-y-3 mb-8">
              <div className="flex justify-between text-xs font-medium text-gray-400 uppercase tracking-widest">
                <span>Modules Completed</span>
                <span className="text-white font-bold">75%</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="w-[75%] h-full bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.2)]"></div>
              </div>
            </div>
            <p className="text-gray-500 text-sm font-light">Keep up the good work! You are on track to complete all assigned modules for this semester.</p>
          </div>

          {/* 2. Saved Resources */}
          <div className="p-10 bg-[#0a0a0c] border border-white/10 rounded-[2rem] hover:bg-[#111115] hover:border-white/20 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-6 text-white">Saved Resources</h2>
            <div className="space-y-4">
              <div className="p-5 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 cursor-pointer transition-all hover:scale-[1.02]">
                <p className="text-sm font-semibold text-white mb-1">React Hooks Guide</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">Web Technology</p>
              </div>
              <div className="p-5 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 cursor-pointer transition-all hover:scale-[1.02]">
                <p className="text-sm font-semibold text-white mb-1">Binary Trees PDF</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">Data Structures</p>
              </div>
            </div>
          </div>

          {/* 3. 全新模块：Recent Assessments (成绩与评估追踪 - 完美契合 Req 3) */}
          <div className="md:col-span-2 p-10 bg-[#0a0a0c] border border-white/10 rounded-[2rem] hover:bg-[#111115] hover:border-white/20 transition-all duration-300 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-2 flex items-center gap-3 text-white">
                <TrendingUp size={20} className="text-gray-400"/>
                Recent Assessments
              </h2>
              <p className="text-sm text-gray-500 font-light mb-8">Track your latest quiz scores and assignment grades.</p>

              <div className="space-y-4">
                {/* 成绩卡片 1 - 优秀 */}
                <div className="flex items-center justify-between p-5 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-white/10 rounded-xl flex flex-col items-center justify-center text-white border border-white/10">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Score</span>
                      <span className="text-lg font-black">92</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-1">Web Tech Midterm Quiz</h4>
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest">Graded on Oct 20</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-1.5 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                    <CheckCircle size={12} /> Excellent
                  </div>
                </div>

                {/* 成绩卡片 2 - 良好 */}
                <div className="flex items-center justify-between p-5 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-transparent rounded-xl flex flex-col items-center justify-center text-gray-300 border border-white/10">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Score</span>
                      <span className="text-lg font-black">85</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-1">Database SQL Assignment</h4>
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest">Graded on Oct 15</p>
                    </div>
                  </div>
                  <div className="px-4 py-1.5 border border-white/20 text-gray-300 text-[10px] font-bold uppercase tracking-widest rounded-full">
                    Good
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Upcoming Deadlines (死线倒计时，纯极简风) */}
          <div className="p-10 bg-[#0a0a0c] border border-white/10 rounded-[2rem] hover:bg-[#111115] hover:border-white/20 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-8 flex items-center gap-3 text-white">
              <Clock size={20} className="text-gray-400"/>
              Deadlines
            </h2>
            
            <div className="space-y-6">
              {/* 紧急死线 */}
              <div className="relative pl-6 border-l-2 border-white">
                <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#ffffff]"></div>
                <h4 className="text-sm font-semibold text-white mb-1">Web Tech Project Phase 1</h4>
                <p className="text-xs text-gray-300 font-medium">Due Today, 11:59 PM</p>
              </div>
              
              {/* 普通死线 */}
              <div className="relative pl-6 border-l-2 border-white/10">
                <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-gray-500"></div>
                <h4 className="text-sm font-semibold text-gray-400 mb-1">Data Structures Quiz</h4>
                <p className="text-xs text-gray-500">Tomorrow, 10:00 AM</p>
              </div>

              {/* 稍远死线 */}
              <div className="relative pl-6 border-l-2 border-white/10">
                <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-gray-500"></div>
                <h4 className="text-sm font-semibold text-gray-400 mb-1">Software Engineering Report</h4>
                <p className="text-xs text-gray-500">In 3 days</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Portal;