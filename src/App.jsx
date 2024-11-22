import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PhotoEditingPage from './pages/PhotoEditingPage';
import GraphicsDesignPage from './pages/GraphicsDesignPage';
import SocialMediaPage from './pages/SocialMediaPage';
import AboutPage from './pages/AboutPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/photo-editing" element={<PhotoEditingPage />} />
            <Route path="/graphics-design" element={<GraphicsDesignPage />} />
            <Route path="/social-media" element={<SocialMediaPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;