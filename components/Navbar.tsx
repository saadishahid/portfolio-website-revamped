const Navbar = () => {
    return (
      <nav className="bg-primary p-4 fixed w-full z-10 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="md:hidden">
            <input type="checkbox" id="menu-toggle" className="hidden" />
            <label htmlFor="menu-toggle" className="cursor-pointer block">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </label>
          </div>
          <ul
            id="menu"
            className="hidden md:flex md:space-x-10 justify-center w-full md:w-auto"
          >
            <li><a href="#hero" className="block py-2 text-dark hover:text-gray-400 transition">Home</a></li>
            <li><a href="#about" className="block py-2 text-dark hover:text-gray-400 transition">About</a></li>
            <li><a href="##skills" className="block py-2 text-dark hover:text-gray-400 transition">Skills</a></li>
            <li><a href="#projects" className="block py-2 text-dark hover:text-gray-400 transition">Projects</a></li>
            <li><a href="#hobbies" className="block py-2 text-dark hover:text-gray-400 transition">Hobbies</a></li>
            <li><a href="#contact" className="block py-2 text-dark hover:text-gray-400 transition">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  