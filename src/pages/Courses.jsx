import React from 'react';
import { PlayCircle, FileText, CheckSquare } from 'lucide-react';

const Courses = () => {
  const courseList = [
    { title: "Web Technology", subtitle: "Bachelor of Computer Science (Hons)", videos: 12, notes: 5, quizzes: 2 },
    { title: "Data Structures", subtitle: "Bachelor of Computer Science (Hons)", videos: 8, notes: 10, quizzes: 4 },
    { title: "Database Systems", subtitle: "Bachelor of Computer Science (Hons)", videos: 15, notes: 6, quizzes: 3 },
    { title: "Mobile Computing", subtitle: "Bachelor of Computer Science (Hons)", videos: 10, notes: 8, quizzes: 2 }
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-white pt-32 px-8 pb-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold tracking-tight text-white mb-12">
          My Courses
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courseList.map((course, index) => (
            <div 
              key={index} 
              className="p-6 bg-[#0a0a0c] border border-white/10 rounded-[2rem] hover:bg-[#111115] hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:border-white/20 transition-all duration-300 group cursor-pointer flex flex-col"
            >
              <div className="w-full aspect-[2/1] bg-white/5 rounded-2xl mb-6 flex items-center justify-center text-[10px] font-bold text-gray-600 tracking-widest group-hover:bg-white/10 transition-colors">
                PREVIEW
              </div>
              <h2 className="text-xl font-semibold mb-1 text-white">{course.title}</h2>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-medium mb-6">{course.subtitle}</p>
              
              {/* Requirement 2: 明确展示视频、笔记和测验 */}
              <div className="flex items-center gap-4 mb-8 text-xs text-gray-400 font-medium">
                <span className="flex items-center gap-1.5"><PlayCircle size={14} /> {course.videos} Videos</span>
                <span className="flex items-center gap-1.5"><FileText size={14} /> {course.notes} Notes</span>
                <span className="flex items-center gap-1.5"><CheckSquare size={14} /> {course.quizzes} Quizzes</span>
              </div>
              
              {/* Apple 风格按键 */}
              <button className="w-full py-3.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-gray-200 transition-all active:scale-95 mt-auto">
                Enter Course
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;