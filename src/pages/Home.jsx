const Home = () => {
  return (
    <div className="relative min-h-screen w-full">
      
      {/* 1. BACKGROUND IMAGE - Fixed so it fills the whole screen */}
      <div 
        className="fixed inset-0 -z-30 bg-cover bg-center bg-no-repeat bg-purple-950"
        style={{ 
          backgroundImage: `url('https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1920')` 
        }}
      ></div>

      {/* 2. OVERLAY - Dark tint to make the white text readable */}
      <div className="fixed inset-0 -z-20 bg-black/40 backdrop-blur-[1px]"></div>

      {/* 3. CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-40 pb-20 px-6 text-center">
        
        {/* Hero Section */}
        <div className="max-w-4xl animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tight drop-shadow-2xl">
            Master Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">
              Education
            </span>
          </h1>
          <p className="text-xl text-gray-100 mb-12 leading-relaxed font-medium max-w-2xl mx-auto drop-shadow-md">
            The ultimate ecosystem for Sarawak undergraduates. Access specialized course materials 
            and a premium academic bookstore in one powerful portal.
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 mb-24">
          <button className="px-10 py-4 bg-purple-600 text-white font-bold rounded-2xl shadow-2xl hover:bg-purple-700 transition-all transform hover:scale-105 active:scale-95">
            Get Started Free
          </button>
          <button className="px-10 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-2xl border border-white/30 hover:bg-white/20 transition-all transform hover:scale-105 active:scale-95">
            View Bookstore
          </button>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl text-left">
          {features.map((f, i) => (
            <div key={i} className="group p-10 bg-white/10 backdrop-blur-xl rounded-[2.5rem] border border-white/10 shadow-2xl hover:-translate-y-4 transition-all duration-500">
              <div className="w-14 h-14 mb-8 flex items-center justify-center rounded-2xl bg-purple-500 text-white text-2xl font-bold">
                {f.id}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors">
                {f.title}
              </h3>
              <p className="text-gray-200 leading-relaxed text-lg">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const features = [
  { id: "01", title: "Learning Resources", desc: "Access high-quality lecture notes and video tutorials optimized for your university curriculum." },
  { id: "02", title: "Smart Bookstore", desc: "Digital and physical textbook procurement with seamless Sarawak Pay integration." },
  { id: "03", title: "Peer Collaboration", desc: "Join curated study groups and forums to solve complex tech problems together." }
];

export default Home;