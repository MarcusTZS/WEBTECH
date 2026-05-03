import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Bookstore from './pages/Bookstore';
import Portal from './pages/Portal';
import Login from './pages/Login';
import Forum from './pages/Forum';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/bookstore" element={<Bookstore />} />
        <Route path="/portal" element={<Portal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forum" element={<Forum />} />
      </Routes>
    </Router>
  );
};

export default App;