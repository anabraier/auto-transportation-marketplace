import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import PostCar from './PostCar';  // Import the PostCar component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post-car" element={<PostCar />} /> {/* Add the PostCar route */}
      </Routes>
    </Router>
  );
}

export default App;