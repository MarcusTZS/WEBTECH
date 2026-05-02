const Login = () => (
  <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-gray-50 px-4">
    <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
      <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">Sign In</h2>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input type="email" className="mt-1 block w-full p-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-purple-500 focus:border-purple-500" placeholder="student@uts.edu.my" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" className="mt-1 block w-full p-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-purple-500 focus:border-purple-500" placeholder="••••••••" />
        </div>
        <button type="submit" className="w-full py-3 px-4 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 transition transform active:scale-95">
          Login to Portal
        </button>
      </form>
    </div>
  </div>
);

export default Login;