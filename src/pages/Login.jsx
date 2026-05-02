const Login = () => {
  return (
    /* Background: A soft gradient from top-left to bottom-right */
    <div className="relative min-h-[calc(100vh-80px)] w-full flex items-center justify-center bg-gradient-to-br from-white via-purple-50 to-indigo-100">
      
      {/* 1. Subtle Decorative Circles for Depth */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>

      {/* 2. Professional Login Card */}
      <div className="w-full max-w-md p-10 mx-4 bg-white/90 backdrop-blur-md rounded-[2.5rem] border border-white shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-black text-gray-900 mb-3 tracking-tight">Sign In</h2>
          <p className="text-gray-500 font-medium">Access your student portal</p>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <label className="block text-xs font-bold text-gray-400 ml-1 uppercase tracking-[0.2em]">Email Address</label>
            <input 
              type="email" 
              placeholder="student@uts.edu.my"
              className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:bg-white outline-none transition-all shadow-inner"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-bold text-gray-400 ml-1 uppercase tracking-[0.2em]">Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:bg-white outline-none transition-all shadow-inner"
            />
          </div>
          
          <button className="w-full py-4 bg-purple-600 text-white font-bold rounded-2xl shadow-lg shadow-purple-200 hover:bg-purple-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200">
            Login to Portal
          </button>
        </form>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-400 font-medium">
            Trouble logging in? <span className="text-purple-600 font-bold cursor-pointer hover:underline">Contact Support</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;