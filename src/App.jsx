import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Portal from './pages/Portal.jsx';
import Login from './pages/Login.jsx';
import Courses from './pages/Courses.jsx'; // New Import
import Bookstore from './pages/Bookstore.jsx'; // New Import

function App() {
  return (
    <Router>
      {/* Container remains transparent for page-specific backgrounds */}
      <div className="min-h-screen font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portal" element={<Portal />} />
          <Route path="/login" element={<Login />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/bookstore" element={<Bookstore />} />
          
          {/* Simple 404 Fallback */}
          <Route path="*" element={
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
              <h1 className="text-4xl font-black text-gray-900 mb-4">404</h1>
              <p className="text-gray-500">The module you are looking for is currently being updated.</p>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;