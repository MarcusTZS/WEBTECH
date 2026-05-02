import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Portal from './pages/Portal.jsx';
import Login from './pages/Login.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portal" element={<Portal />} />
          <Route path="/login" element={<Login />} />
          {/* Placeholders for Heng Yi's pages */}
          <Route path="/courses" element={<div className="p-20 text-center text-gray-500 text-2xl">Courses Page Under Construction</div>} />
          <Route path="/bookstore" element={<div className="p-20 text-center text-gray-500 text-2xl">Bookstore Page Under Construction</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;