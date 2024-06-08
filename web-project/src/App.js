import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Main from './pages/main';
import Board from './pages/board';
import Recommend from './pages/recommend';
import Search from './pages/search';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/board" element={<Board />} />
        <Route path="/recommend" element={<Recommend />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
};

export default App;