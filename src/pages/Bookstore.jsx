import React, { useState } from 'react';

const Bookstore = () => {
  const [search, setSearch] = useState('');

  const books = [
    { id: 1, title: 'Clean Code', author: 'Robert C. Martin', price: 120, category: 'Programming' },
    { id: 2, title: 'The Pragmatic Programmer', author: 'Andrew Hunt', price: 145, category: 'Programming' },
    { id: 3, title: 'Database Design', author: 'C.J. Date', price: 95, category: 'Database' },
    { id: 4, title: 'Cybersecurity 101', author: 'Jane Doe', price: 80, category: 'Security' },
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h1 className="text-4xl font-black text-gray-900 mb-6 md:mb-0">Academic Bookstore</h1>
          
          {/* Search Bar Requirement */}
          <div className="relative w-full md:w-96">
            <input 
              type="text" 
              placeholder="Search by title or author..."
              className="w-full px-6 py-4 bg-gray-100 border-none rounded-2xl focus:ring-2 focus:ring-purple-500 outline-none transition"
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
            />
          </div>
        </div>

        {/* Book Catalogue Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {books
            .filter((b) => b.title.toLowerCase().includes(search) || b.author.toLowerCase().includes(search))
            .map((book) => (
              <div key={book.id} className="group bg-white border border-gray-100 p-6 rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-all">
                <div className="aspect-[3/4] bg-gray-200 rounded-2xl mb-6 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center text-purple-300 font-bold italic">
                    Book Cover
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">{book.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{book.author}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-black text-purple-600">RM{book.price}</span>
                  <button className="p-3 bg-gray-900 text-white rounded-xl hover:bg-purple-600 transition shadow-md">
                    Add to Cart
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