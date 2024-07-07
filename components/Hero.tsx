const Hero = () => {
  return (
    <section id="hero" className="h-screen flex flex-col items-center justify-center bg-primary text-center text-dark">
      <h1 className="text-6xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-2xl">I am a Full Stack Developer</p>
      <a href="#about" className="mt-8 px-6 py-3 bg-light text-dark rounded-full shadow-lg hover:bg-secondary transition">Learn More</a>
    </section>
  );
};

export default Hero;
