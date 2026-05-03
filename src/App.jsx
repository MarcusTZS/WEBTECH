import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 确保你的路径是对的（根据你的文件夹结构调整）
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Bookstore from './pages/Bookstore';
import Portal from './pages/Portal';
import Login from './pages/Login';
import Forum from './pages/Forum'; // 新增：引入刚刚写好的 Forum 页面

const App = () => {
  return (
    <Router>
      {/* Navbar 放在这里，确保它在每一个页面都会显示 */}
      <Navbar />
      
      {/* Routes 控制页面切换：按了按钮就会跳转到对应的 Element */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/bookstore" element={<Bookstore />} />
        <Route path="/portal" element={<Portal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forum" element={<Forum />} /> {/* 新增：注册 Forum 路由 */}
      </Routes>
    </Router>
  );
};

export default App;