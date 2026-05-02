import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="flex justify-between items-center p-6 bg-white border-b border-gray-200 sticky top-0 z-50">
    <div className="text-2xl font-black text-purple-600 tracking-tighter cursor-pointer">EDU-TECH</div>
    <div className="hidden md:flex space-x-8 font-medium items-center text-gray-600">
      <Link to="/" className="hover:text-purple-600 transition">Home</Link>
      <Link to="/courses" className="hover:text-purple-600 transition">Courses</Link>
      <Link to="/bookstore" className="hover:text-purple-600 transition">Bookstore</Link>
      <Link to="/login" className="hover:text-purple-600 transition">Login</Link>
      <Link to="/portal" className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition shadow-md">
        Student Portal
      </Link>
    </div>
  </nav>
);

export default Navbar;