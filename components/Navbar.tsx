'use client';
import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-primary p-4 fixed w-full z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex justify-center w-full md:w-auto">
          <ul className="hidden md:flex md:space-x-10">
            <li>
              <a href="#hero" className="block py-2 text-dark hover:text-gray-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="block py-2 text-dark hover:text-gray-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="block py-2 text-dark hover:text-gray-400 transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="block py-2 text-dark hover:text-gray-400 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#experience" className="block py-2 text-dark hover:text-gray-400 transition">
                Experience
              </a>
            </li>
            <li>
              <a href="#hobbies" className="block py-2 text-dark hover:text-gray-400 transition">
                Hobbies
              </a>
            </li>
            <li>
              <a href="#connect" className="block py-2 text-dark hover:text-gray-400 transition">
                Connect with me
              </a>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <button onClick={handleToggle} className="block text-dark focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-white flex flex-col items-center justify-center z-20 text-dark">
          <button onClick={handleToggle} className="absolute top-4 right-4 text-black focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <a href="#hero" className="block py-2 text-dark hover:text-blue-400 hover:scale-125 " onClick={handleToggle}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="block py-2 text-dark hover:text-blue-400 hover:scale-125 " onClick={handleToggle}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="block py-2 text-dark hover:text-blue-400 hover:scale-125 " onClick={handleToggle}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="block py-2 text-dark hover:text-blue-400 hover:scale-125 " onClick={handleToggle}>
                Projects
              </a>
            </li>
            <li>
              <a href="#experience" className="block py-2 text-dark hover:text-blue-400 hover:scale-125 " onClick={handleToggle}>
                Experience
              </a>
            </li>
            <li>
              <a href="#hobbies" className="block py-2 text-dark hover:text-blue-400 hover:scale-125 " onClick={handleToggle}>
                Hobbies
              </a>
            </li>
            <li>
              <a href="#connect" className="block py-2 text-dark hover:text-blue-400 hover:scale-125 " onClick={handleToggle}>
                Connect with me
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
