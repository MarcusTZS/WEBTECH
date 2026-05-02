import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="flex justify-between items-center p-6 bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 w-full z-50">
    <div className="text-2xl font-black text-purple-600 tracking-tighter cursor-pointer">
       EDU-TECH
    </div>
    
    <div className="hidden md:flex space-x-8 font-bold items-center text-gray-600">
      <Link to="/" className="hover:text-purple-600 transition duration-200">Home</Link>
      <Link to="/courses" className="hover:text-purple-600 transition duration-200">Courses</Link>
      <Link to="/bookstore" className="hover:text-purple-600 transition duration-200">Bookstore</Link>
      <Link to="/portal" className="hover:text-purple-600 transition duration-200">Student Portal</Link>
      
      {/* Login button as the primary action */}
      <Link to="/login" className="bg-purple-600 text-white px-8 py-2.5 rounded-full hover:bg-purple-700 transition shadow-lg shadow-purple-100 hover:scale-105 active:scale-95">
        Login
      </Link>
    </div>
  </nav>
);

export default Navbar;