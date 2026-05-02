const Portal = () => {
  return (
    <div className="flex min-h-[calc(100vh-80px)]">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 p-6 hidden md:block">
        <ul className="space-y-4 font-medium text-gray-600">
          <li className="text-purple-600 bg-purple-50 p-2 rounded-lg cursor-pointer">Dashboard</li>
          <li className="hover:text-purple-600 p-2 cursor-pointer">My Courses</li>
          <li className="hover:text-purple-600 p-2 cursor-pointer">Assignments</li>
          <li className="hover:text-purple-600 p-2 cursor-pointer">Settings</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-50">
        <h2 className="text-3xl font-bold mb-6">Welcome Back, Student!</h2>
        
        {/* Progress Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-gray-500 text-sm mb-1">Course Progress</h3>
            <p className="text-2xl font-bold mb-2">75% Complete</p>
            <div className="w-full bg-gray-100 h-2 rounded-full">
              <div className="bg-purple-600 h-2 w-3/4 rounded-full"></div>
            </div>
          </div>
          
          <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-gray-500 text-sm mb-1">Active Books</h3>
            <p className="text-2xl font-bold">4 Items</p>
            <p className="text-xs text-green-500 mt-2">2 new this week</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Portal;