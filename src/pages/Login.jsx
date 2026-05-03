import React, { useState } from 'react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="w-full max-w-sm relative z-50">
        <h2 className="text-3xl font-semibold mb-2 tracking-tight text-white italic">
          {isLogin ? 'Sign In' : 'Create Account'}
        </h2>
        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-10">
          {isLogin ? 'Academic Account Access' : 'Join the Ecosystem'}
        </p>
        
        <div className="space-y-4 mb-8">
          {!isLogin && (
            <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-8 outline-none focus:border-white transition-all text-white text-sm font-light" />
          )}
          <input type="text" placeholder="Student ID / Email" className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-8 outline-none focus:border-white transition-all text-white text-sm font-light" />
          <input type="password" placeholder="Password" className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-8 outline-none focus:border-white transition-all text-white text-sm font-light" />
        </div>

        {isLogin && (
          <div className="flex justify-start mb-10">
            <button className="text-[10px] font-bold text-gray-600 hover:text-white uppercase tracking-widest transition-colors cursor-pointer">
              Forgot Password?
            </button>
          </div>
        )}

        <button className="w-full py-5 bg-white text-black rounded-2xl font-bold text-[11px] uppercase tracking-widest hover:bg-gray-100 transition-all active:scale-95 shadow-2xl mb-8">
          {isLogin ? 'Sign In' : 'Sign Up'}
        </button>

        <p className="text-center text-xs text-gray-500 font-light">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button 
            onClick={() => setIsLogin(!isLogin)} 
            className="text-white font-semibold hover:underline"
          >
            {isLogin ? 'Sign up' : 'Sign in'}
          </button>
        </p>

      </div>
    </div>
  );
};

export default Login;