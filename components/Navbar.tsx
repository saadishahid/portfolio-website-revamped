const Navbar = () => {
    return (
      <nav className="bg-gray-900 p-4 fixed w-full z-10 shadow-md">
        <ul className="flex space-x-4 justify-center">
          <li><a href="#hero" className="text-white hover:text-gray-400 transition">Home</a></li>
          <li><a href="#about" className="text-white hover:text-gray-400 transition">About</a></li>
          <li><a href="#experience" className="text-white hover:text-gray-400 transition">Experience</a></li>
          <li><a href="#projects" className="text-white hover:text-gray-400 transition">Projects</a></li>
          <li><a href="#hobbies" className="text-white hover:text-gray-400 transition">Hobbies</a></li>
          <li><a href="#contact" className="text-white hover:text-gray-400 transition">Contact</a></li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
  