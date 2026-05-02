import React, { useState } from 'react';

const Courses = () => {
  const [filter, setFilter] = useState('All');

  const courseData = [
    { id: 1, title: 'Introduction to React', module: 'Web Development', type: 'Lecture Notes', status: 'Available' },
    { id: 2, title: 'Database Systems (MySQL)', module: 'Data Science', type: 'Video Tutorial', status: 'Available' },
    { id: 3, title: 'Network Security Fundamentals', module: 'Cybersecurity', type: 'Interactive Quiz', status: 'Coming Soon' },
    { id: 4, title: 'Advanced PHP Patterns', module: 'Web Development', type: 'Lecture Notes', status: 'Available' },
  ];

  const categories = ['All', 'Web Development', 'Data Science', 'Cybersecurity'];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-black text-gray-900 mb-8">Course Resources</h1>

        {/* Category Filter */}
        <div className="flex space-x-4 mb-10 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-bold transition ${
                filter === cat ? 'bg-purple-600 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-purple-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseData
            .filter((item) => filter === 'All' || item.module === filter)
            .map((item) => (
              <div key={item.id} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl hover:-translate-y-2 transition-all">
                <span className="text-xs font-black text-purple-600 uppercase tracking-widest">{item.module}</span>
                <h3 className="text-2xl font-bold mt-2 mb-4 text-gray-900">{item.title}</h3>
                <div className="flex justify-between items-center mt-6">
                  <span className="text-sm text-gray-500 font-medium">{item.type}</span>
                  <button className={`px-4 py-2 rounded-xl text-sm font-bold ${
                    item.status === 'Available' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}>
                    {item.status === 'Available' ? 'Download' : 'Locked'}
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;