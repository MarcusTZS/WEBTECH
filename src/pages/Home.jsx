const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      {/* Hero Section */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
        Master Your <span className="text-purple-600">Education</span>
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed">
        The ultimate platform for undergraduate students. Seamlessly access your course materials and academic bookstore in one powerful portal.
      </p>
      
      {/* Call to Action Buttons */}
      <div className="flex flex-col md:flex-row gap-4">
        <button className="px-8 py-4 bg-purple-600 text-white font-bold rounded-2xl shadow-lg hover:bg-purple-700 transition transform hover:scale-105">
          Get Started
        </button>
        <button className="px-8 py-4 bg-white text-purple-600 font-bold rounded-2xl border-2 border-purple-600 hover:bg-purple-50 transition">
          Browse Books
        </button>
      </div>

      {/* Feature Preview */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl text-left">
        <div className="p-8 bg-purple-50 rounded-3xl border border-purple-100">
          <div className="text-3xl mb-4 text-purple-600 font-bold">01</div>
          <h3 className="text-xl font-bold mb-2">Learning Resources</h3>
          <p className="text-gray-600">Access lecture notes and video tutorials anytime, anywhere.</p>
        </div>
        <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm">
          <div className="text-3xl mb-4 text-purple-600 font-bold">02</div>
          <h3 className="text-xl font-bold mb-2">Academic Bookstore</h3>
          <p className="text-gray-600">Buy your required textbooks with our seamless checkout process.</p>
        </div>
        <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm">
          <div className="text-3xl mb-4 text-purple-600 font-bold">03</div>
          <h3 className="text-xl font-bold mb-2">Peer Interaction</h3>
          <p className="text-gray-600">Join discussion forums to solve problems with your classmates.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;