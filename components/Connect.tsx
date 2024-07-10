import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Connect = () => {
  return (
    <section id="connect" className="p-12 bg-gray-100 text-center">
      <h2 className="text-lg mb-4 text-dark">Find me on...</h2>
      <div className="flex justify-center space-x-6">
        <a href="https://www.linkedin.com/in/saad-shahid-dev" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
          <FaLinkedin size={40} />
        </a>
        <a href="https://github.com/saadishahid" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black">
          <FaGithub size={40} />
        </a>
      </div>
    </section>
  );
};

export default Connect;
