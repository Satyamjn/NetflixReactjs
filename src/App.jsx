import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Moviess from './Component/Moviess';
import NavBar from './Component/NavBar';
import SignUp from './Component/SignUp';
import MovieDetail from './Component/MovieDetail';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Moviess />} />
        <Route path="/Sign" element={<SignUp />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
