// components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 bg-black text-white rounded-full px-8 py-3 flex items-center gap-6 shadow-lg z-50">
      <a href="/" className="font-bold">Home</a>
      <a href="/photo-editing" className="hover:text-gray-300">Photo Editing</a>
      <a href="/graphics-design" className="hover:text-gray-300">Graphics Design</a>
      <a href="/social-media" className="hover:text-gray-300">Social Media</a>
      <a href="/about" className="hover:text-gray-300">About</a>
    </header>
  );
};

export default Header;
